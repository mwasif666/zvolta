import { useEffect } from "react";
import { legacyPageScripts } from "../generated/legacy-scripts";
import { ensureGsapGlobals } from "./gsap-globals";

const scriptSourceCache = new Map();

function attachInlineDomHandlers() {
  const cleanups = [];
  const elements = document.querySelectorAll("*");

  elements.forEach((element) => {
    for (const attributeName of element.getAttributeNames()) {
      if (!attributeName.startsWith("data-inline-on")) {
        continue;
      }

      const eventName = attributeName.replace("data-inline-on", "");
      const handlerCode = element.getAttribute(attributeName);

      if (!eventName || !handlerCode) {
        continue;
      }

      const listener = (event) => {
        const handler = new Function("event", handlerCode);
        return handler.call(element, event);
      };

      element.addEventListener(eventName, listener);
      cleanups.push(() => element.removeEventListener(eventName, listener));
    }
  });

  return () => {
    cleanups.forEach((cleanup) => cleanup());
  };
}

async function evaluateScript(sourceCode, sourceLabel) {
  const runner = new Function(`${sourceCode}\n//# sourceURL=${sourceLabel}`);
  runner.call(globalThis);
}

async function getExternalScriptSource(externalScript) {
  if (!scriptSourceCache.has(externalScript)) {
    const scriptPromise = fetch(externalScript).then((response) =>
      response.text(),
    );
    scriptSourceCache.set(externalScript, scriptPromise);
  }

  return scriptSourceCache.get(externalScript);
}

async function loadPageScripts(pageId) {
  const pageScripts = legacyPageScripts[pageId];

  if (!pageScripts) {
    return;
  }

  for (const externalScript of pageScripts.externalScripts) {
    const sourceCode = await getExternalScriptSource(externalScript);
    await evaluateScript(sourceCode, externalScript);
  }

  for (let index = 0; index < pageScripts.inlineScripts.length; index += 1) {
    const inlineScript = pageScripts.inlineScripts[index];
    await evaluateScript(inlineScript, `${pageId}:inline:${index + 1}`);
  }
}

function dispatchLegacyLifecycleEvents() {
  document.dispatchEvent(
    new Event("DOMContentLoaded", {
      bubbles: true,
      cancelable: true,
    }),
  );

  window.dispatchEvent(new Event("load"));
}

function createRuntimeTracker() {
  const listeners = [];
  const intervals = new Set();
  const timeouts = new Set();
  const tickerCallbacks = new Set();
  const observers = new Set();
  const scrollTriggers = new Set();
  const animations = new Set();
  const baselineAnimations = new Set(
    globalThis.gsap?.globalTimeline?.getChildren(true, true, true) ?? [],
  );
  const baselineScrollTriggers = new Set(
    globalThis.ScrollTrigger?.getAll?.() ?? [],
  );
  let patchesRestored = false;

  const originalAddEventListener = EventTarget.prototype.addEventListener;
  const originalRemoveEventListener = EventTarget.prototype.removeEventListener;
  const originalSetInterval = globalThis.setInterval.bind(globalThis);
  const originalClearInterval = globalThis.clearInterval.bind(globalThis);
  const originalSetTimeout = globalThis.setTimeout.bind(globalThis);
  const originalClearTimeout = globalThis.clearTimeout.bind(globalThis);

  const originalTickerAdd = globalThis.gsap?.ticker?.add?.bind(
    globalThis.gsap.ticker,
  );
  const originalTickerRemove = globalThis.gsap?.ticker?.remove?.bind(
    globalThis.gsap.ticker,
  );
  const originalObserverCreate = globalThis.Observer?.create?.bind(
    globalThis.Observer,
  );
  const originalScrollTriggerCreate = globalThis.ScrollTrigger?.create?.bind(
    globalThis.ScrollTrigger,
  );

  EventTarget.prototype.addEventListener = function patchedAddEventListener(
    type,
    listener,
    options,
  ) {
    listeners.push({ target: this, type, listener, options });
    return originalAddEventListener.call(this, type, listener, options);
  };

  EventTarget.prototype.removeEventListener =
    function patchedRemoveEventListener(type, listener, options) {
      const listenerIndex = listeners.findIndex(
        (entry) =>
          entry.target === this &&
          entry.type === type &&
          entry.listener === listener &&
          entry.options === options,
      );

      if (listenerIndex >= 0) {
        listeners.splice(listenerIndex, 1);
      }

      return originalRemoveEventListener.call(this, type, listener, options);
    };

  globalThis.setInterval = (callback, delay, ...args) => {
    const intervalId = originalSetInterval(callback, delay, ...args);
    intervals.add(intervalId);
    return intervalId;
  };

  globalThis.clearInterval = (intervalId) => {
    intervals.delete(intervalId);
    return originalClearInterval(intervalId);
  };

  globalThis.setTimeout = (callback, delay, ...args) => {
    const timeoutId = originalSetTimeout(() => {
      timeouts.delete(timeoutId);
      callback(...args);
    }, delay);
    timeouts.add(timeoutId);
    return timeoutId;
  };

  globalThis.clearTimeout = (timeoutId) => {
    timeouts.delete(timeoutId);
    return originalClearTimeout(timeoutId);
  };

  if (globalThis.gsap?.ticker && originalTickerAdd && originalTickerRemove) {
    globalThis.gsap.ticker.add = (callback, once, prioritize) => {
      tickerCallbacks.add(callback);
      return originalTickerAdd(callback, once, prioritize);
    };

    globalThis.gsap.ticker.remove = (callback) => {
      tickerCallbacks.delete(callback);
      return originalTickerRemove(callback);
    };
  }

  if (globalThis.Observer && originalObserverCreate) {
    globalThis.Observer.create = (...args) => {
      const observer = originalObserverCreate(...args);
      observers.add(observer);
      return observer;
    };
  }

  if (globalThis.ScrollTrigger && originalScrollTriggerCreate) {
    globalThis.ScrollTrigger.create = (...args) => {
      const trigger = originalScrollTriggerCreate(...args);
      scrollTriggers.add(trigger);
      return trigger;
    };
  }

  const restorePatches = () => {
    if (patchesRestored) {
      return;
    }

    patchesRestored = true;
    EventTarget.prototype.addEventListener = originalAddEventListener;
    EventTarget.prototype.removeEventListener = originalRemoveEventListener;
    globalThis.setInterval = originalSetInterval;
    globalThis.clearInterval = originalClearInterval;
    globalThis.setTimeout = originalSetTimeout;
    globalThis.clearTimeout = originalClearTimeout;

    if (globalThis.gsap?.ticker && originalTickerAdd && originalTickerRemove) {
      globalThis.gsap.ticker.add = originalTickerAdd;
      globalThis.gsap.ticker.remove = originalTickerRemove;
    }

    if (globalThis.Observer && originalObserverCreate) {
      globalThis.Observer.create = originalObserverCreate;
    }

    if (globalThis.ScrollTrigger && originalScrollTriggerCreate) {
      globalThis.ScrollTrigger.create = originalScrollTriggerCreate;
    }
  };

  const finalize = () => {
    const nextAnimations =
      globalThis.gsap?.globalTimeline?.getChildren(true, true, true) ?? [];
    nextAnimations.forEach((animation) => {
      if (!baselineAnimations.has(animation)) {
        animations.add(animation);
      }
    });

    const nextScrollTriggers = globalThis.ScrollTrigger?.getAll?.() ?? [];
    nextScrollTriggers.forEach((trigger) => {
      if (!baselineScrollTriggers.has(trigger)) {
        scrollTriggers.add(trigger);
      }
    });
  };

  const cleanup = () => {
    restorePatches();

    tickerCallbacks.forEach((callback) => {
      originalTickerRemove?.(callback);
    });
    tickerCallbacks.clear();

    intervals.forEach((intervalId) => {
      originalClearInterval(intervalId);
    });
    intervals.clear();

    timeouts.forEach((timeoutId) => {
      originalClearTimeout(timeoutId);
    });
    timeouts.clear();

    observers.forEach((observer) => {
      observer.kill?.();
      observer.disable?.();
    });
    observers.clear();

    scrollTriggers.forEach((trigger) => {
      trigger.kill?.();
    });
    scrollTriggers.clear();

    animations.forEach((animation) => {
      animation.kill?.();
    });
    animations.clear();

    while (listeners.length > 0) {
      const entry = listeners.pop();
      originalRemoveEventListener.call(
        entry.target,
        entry.type,
        entry.listener,
        entry.options,
      );
    }

    document.body.style.overflow = "";
    document.body.classList.remove("is-scrolling");
  };

  return { finalize, restorePatches, cleanup };
}

export function useLegacyPageRuntime(pageId) {
  useEffect(() => {
    let cancelled = false;

    ensureGsapGlobals();

    const runtimeTracker = createRuntimeTracker();
    const cleanupInlineHandlers = attachInlineDomHandlers();

    const mountScripts = async () => {
      try {
        await loadPageScripts(pageId);

        if (cancelled) {
          return;
        }

        dispatchLegacyLifecycleEvents();
      } finally {
        runtimeTracker.finalize();
        runtimeTracker.restorePatches();
      }
    };

    mountScripts();

    return () => {
      cancelled = true;
      cleanupInlineHandlers();
      runtimeTracker.cleanup();
    };
  }, [pageId]);
}
