import { useEffect, useRef } from "react";
import { API_BASE_URL } from "../services/api";

// The API broadcasts nothing but event names on this stream, so it is safe to
// open without auth. Whoever is listening refetches their own data.
const STREAM_PATH = "/realtime/stream";
const RETRY_MS = 6000;

export const REALTIME_EVENT = "zvolta:realtime";
const REFRESH_EVENT = "zvolta:data-refresh";

function dispatchRealtime(message) {
  const event = String(message?.event || "");
  if (!event) return;

  window.dispatchEvent(new CustomEvent(REALTIME_EVENT, { detail: message }));
  // useCommerceData already listens for this, so every catalog-backed screen
  // refreshes without wiring the stream into each one.
  window.dispatchEvent(new CustomEvent(REFRESH_EVENT, { detail: message }));
}

/**
 * Opens a single server-sent-events connection for the whole app and rebroadcasts
 * each change as a window event. Reconnects on its own if the stream drops.
 */
export function useRealtimeUpdates() {
  useEffect(() => {
    if (typeof window === "undefined" || typeof EventSource === "undefined") {
      return undefined;
    }

    let source = null;
    let retryTimer = null;
    let closed = false;

    const connect = () => {
      if (closed) return;

      try {
        source = new EventSource(`${API_BASE_URL}${STREAM_PATH}`);
      } catch {
        // A blocked stream just means the site falls back to focus refreshes.
        return;
      }

      source.addEventListener("update", (event) => {
        try {
          dispatchRealtime(JSON.parse(event.data));
        } catch {
          // Ignore malformed frames; the next one usually lands fine.
        }
      });

      source.onerror = () => {
        source?.close();
        source = null;
        if (closed) return;
        clearTimeout(retryTimer);
        retryTimer = setTimeout(connect, RETRY_MS);
      };
    };

    connect();

    return () => {
      closed = true;
      clearTimeout(retryTimer);
      source?.close();
    };
  }, []);
}

/**
 * Runs `handler` whenever one of `events` arrives on the realtime stream.
 */
export function useRealtimeEvent(events, handler) {
  const handlerRef = useRef(handler);
  // Call sites pass a literal event name (or list), so the joined key is a
  // stable dependency and the listener is not torn down on every render.
  const key = [].concat(events).join(",");

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const wanted = new Set(key.split(","));
    const listener = (event) => {
      if (wanted.has(event.detail?.event)) handlerRef.current(event.detail);
    };

    window.addEventListener(REALTIME_EVENT, listener);
    return () => window.removeEventListener(REALTIME_EVENT, listener);
  }, [key]);
}
