import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { citaChargers } from "../../data/citaChargers";

const CARD_PITCH = 196;
const DESKTOP_WIDTH = 1440;
const FRAME_HEIGHT = 1080;
const AUTO_SPEED = 50;
const LONG_CLOCK_DURATION = 1e9;

function wrap(value, period) {
  return ((((value + period / 2) % period) + period) % period) - period / 2;
}

function roundedArcPath(width, leftHeight, rightHeight) {
  const height = Math.max(leftHeight, rightHeight);
  const topLeft = (height - leftHeight) / 2;
  const topRight = (height - rightHeight) / 2;
  const bottomLeft = topLeft + leftHeight;
  const bottomRight = topRight + rightHeight;
  const radius = 15;
  const fmt = (n) => Number(n.toFixed(2));
  return `path("M ${radius} ${fmt(topLeft)} L ${fmt(width - radius)} ${fmt(topRight)} Q ${fmt(width)} ${fmt(topRight)} ${fmt(width)} ${fmt(topRight + radius)} L ${fmt(width)} ${fmt(bottomRight - radius)} Q ${fmt(width)} ${fmt(bottomRight)} ${fmt(width - radius)} ${fmt(bottomRight)} L ${radius} ${fmt(bottomLeft)} Q 0 ${fmt(bottomLeft)} 0 ${fmt(bottomLeft - radius)} L 0 ${fmt(topLeft + radius)} Q 0 ${fmt(topLeft)} ${radius} ${fmt(topLeft)} Z")`;
}

function positionCards(cards, bandWidth, offset, mobile) {
  const pitch = mobile ? 150 : CARD_PITCH;
  const period = pitch * cards.length;
  const center = bandWidth / 2;
  const normalization = mobile ? Math.max(center - 12, 1) : 706;

  cards.forEach((card, index) => {
    const t = wrap(index * pitch + offset, period);
    const pushed = t * (1 + 0.083 * (t / normalization) ** 2);
    const x = center + pushed;
    const d = Math.min(1.8, Math.abs(x - center) / normalization);
    const width = (mobile ? 126 : 170) + (mobile ? 23 : 48) * d ** 2;
    const leftQ = Math.min(1.8, Math.abs(x - width / 2 - center) / normalization);
    const rightQ = Math.min(1.8, Math.abs(x + width / 2 - center) / normalization);
    const baseHeight = mobile ? 174 : 280;
    const edgeGain = mobile ? 43 : 92;
    const leftHeight = baseHeight + edgeGain * leftQ ** 2.6;
    const rightHeight = baseHeight + edgeGain * rightQ ** 2.6;
    const height = Math.max(leftHeight, rightHeight);
    const cy = (mobile ? 141 : 200) - (mobile ? 3 : 12) * d ** 2;
    const top = cy - height / 2;

    card.style.width = `${width}px`;
    card.style.height = `${height}px`;
    card.style.transform = `translate3d(${(x - width / 2).toFixed(2)}px, ${top.toFixed(2)}px, 0)`;
    card.style.clipPath = roundedArcPath(width, leftHeight, rightHeight);
    card.style.zIndex = String(20 - Math.round(d * 4));
    card.style.visibility = x + width / 2 < -10 || x - width / 2 > bandWidth + 10 ? "hidden" : "visible";
  });
}

export default function CitaReelHero() {
  const outerRef = useRef(null);
  const bandRef = useRef(null);
  const cardRefs = useRef([]);
  const timeRef = useRef(0);
  const offsetRef = useRef(0);
  const speedRef = useRef(0);
  const dragRef = useRef({ active: false, lastX: 0, lastT: 0, distance: 0 });
  const clickBlockRef = useRef(false);
  const scaleRef = useRef(1);
  const [scale, setScale] = useState(1);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const outer = outerRef.current;
    const band = bandRef.current;
    if (!outer || !band) return undefined;

    const mobileQuery = window.matchMedia("(max-width: 820px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isMobile = mobileQuery.matches;
    let reduced = motionQuery.matches;
    let frame = 0;

    const clock = document.documentElement.animate(
      [{ opacity: 1 }, { opacity: 1 }],
      { duration: LONG_CLOCK_DURATION, iterations: 1 }
    );
    const animations = [];

    function syncSize() {
      isMobile = mobileQuery.matches;
      const nextScale = isMobile
        ? 1
        : Math.min(1, outer.clientWidth / DESKTOP_WIDTH, window.innerHeight / FRAME_HEIGHT);
      scaleRef.current = nextScale;
      setScale(nextScale);
      setMobile(isMobile);
      positionCards(cardRefs.current.filter(Boolean), band.clientWidth, offsetRef.current, isMobile);
    }

    function animateIn() {
      if (reduced) return;
      const parts = [
        [".cita-reel-badge", [{ opacity: 0, transform: "translateY(12px) scale(.94)" }, { opacity: 1, transform: "none" }], 80],
        [".cita-reel-heading", [{ opacity: 0, filter: "blur(12px)", transform: "translateY(24px)" }, { opacity: 1, filter: "blur(0)", transform: "none" }], 185],
        [".cita-reel-subline", [{ opacity: 0, transform: "translateY(15px)" }, { opacity: 1, transform: "none" }], 440],
        [".cita-reel-carousel", [{ opacity: 0, transform: "translateY(45px)" }, { opacity: 1, transform: "none" }], 585],
        [".cita-reel-cta", [{ opacity: 0, transform: "scale(.88)" }, { opacity: 1, transform: "scale(1)" }], 760],
        [".cita-reel-note", [{ opacity: 0 }, { opacity: 1 }], 880],
      ];
      parts.forEach(([selector, frames, delay]) => {
        const element = outer.querySelector(selector);
        if (element) {
          const anchored = selector === ".cita-reel-badge" ||
            selector === ".cita-reel-heading" ||
            selector === ".cita-reel-subline" ||
            selector === ".cita-reel-cta";
          const keyframes = anchored
            ? frames.map((step) => ({
                ...step,
                transform: step.transform === "none"
                  ? "translateX(-50%)"
                  : `translateX(-50%) ${step.transform}`,
              }))
            : frames;
          animations.push(element.animate(keyframes, {
            duration: 680, delay, fill: "both", easing: "cubic-bezier(.2,.7,.2,1)",
          }));
        }
      });
      outer.querySelectorAll(".cita-reel-doodle path").forEach((path, index) => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = String(length);
        animations.push(path.animate(
          [{ strokeDashoffset: length }, { strokeDashoffset: 0 }],
          { duration: 920, delay: 950 + index * 170, fill: "both", easing: "ease-out" }
        ));
      });
    }

    function tick() {
      const time = Number(clock.currentTime) || performance.now();
      const dt = timeRef.current ? Math.max(0, Math.min((time - timeRef.current) / 1000, .06)) : 0;
      timeRef.current = time;
      if (!reduced && !dragRef.current.active) {
        const decay = Math.pow(.95, dt);
        speedRef.current *= decay;
        offsetRef.current -= AUTO_SPEED * dt;
        offsetRef.current += speedRef.current * dt;
        const cycle = (isMobile ? 150 : CARD_PITCH) * cardRefs.current.length;
        offsetRef.current = wrap(offsetRef.current, cycle);
      }
      positionCards(cardRefs.current.filter(Boolean), band.clientWidth, offsetRef.current, isMobile);
      frame = window.requestAnimationFrame(tick);
    }

    function onDown(event) {
      if (reduced || (event.pointerType === "mouse" && event.button !== 0)) return;
      dragRef.current = {
        active: true, lastX: event.clientX, lastT: performance.now(), distance: 0,
      };
      speedRef.current = 0;
      band.classList.add("is-dragging");
    }

    function onMove(event) {
      const drag = dragRef.current;
      if (!drag.active) return;
      const now = performance.now();
      const delta = (event.clientX - drag.lastX) / scaleRef.current;
      const dt = Math.max((now - drag.lastT) / 1000, .012);
      offsetRef.current += delta;
      drag.distance += Math.abs(delta);
      if (drag.distance > 6 && !band.hasPointerCapture?.(event.pointerId)) {
        band.setPointerCapture?.(event.pointerId);
      }
      speedRef.current = Math.max(-900, Math.min(900, delta / dt));
      drag.lastX = event.clientX;
      drag.lastT = now;
    }

    function onUp(event) {
      if (!dragRef.current.active) return;
      if (dragRef.current.distance > 6) {
        clickBlockRef.current = true;
        window.setTimeout(() => { clickBlockRef.current = false; }, 80);
      }
      dragRef.current.active = false;
      band.classList.remove("is-dragging");
      if (band.hasPointerCapture?.(event.pointerId)) band.releasePointerCapture(event.pointerId);
    }

    function onMediaChange() {
      reduced = motionQuery.matches;
      syncSize();
    }

    band.addEventListener("pointerdown", onDown);
    band.addEventListener("pointermove", onMove);
    band.addEventListener("pointerup", onUp);
    band.addEventListener("pointercancel", onUp);
    mobileQuery.addEventListener("change", syncSize);
    motionQuery.addEventListener("change", onMediaChange);
    window.addEventListener("resize", syncSize, { passive: true });
    syncSize();
    animateIn();
    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
      clock.cancel();
      animations.forEach((animation) => animation.cancel());
      band.removeEventListener("pointerdown", onDown);
      band.removeEventListener("pointermove", onMove);
      band.removeEventListener("pointerup", onUp);
      band.removeEventListener("pointercancel", onUp);
      mobileQuery.removeEventListener("change", syncSize);
      motionQuery.removeEventListener("change", onMediaChange);
      window.removeEventListener("resize", syncSize);
    };
  }, []);

  return (
    <section className="cita-reel-hero" aria-labelledby="cita-reel-title">
      <div
        className="cita-reel-viewport"
        ref={outerRef}
        style={{ height: mobile ? undefined : `${FRAME_HEIGHT * scale}px` }}
      >
        <div
          className="cita-reel-frame"
          style={mobile ? undefined : { transform: `translateX(-50%) scale(${scale})` }}
        >
          <div className="cita-reel-ambient" aria-hidden="true" />
          <div className="cita-reel-badge"><span /> CITA EV — AC & DC Charging Solutions</div>
          <h1 className="cita-reel-heading" id="cita-reel-title">
            <span>CITA EV Chargers</span>
            <span>Simple, Safe & Reliable</span>
          </h1>
          <p className="cita-reel-subline">
            Innovative EV charging for homes, workplaces, fleets and public networks.
            <br className="cita-reel-desktop-break" />
            Explore the CITA EV hardware range — built for the future of mobility.
          </p>
          <svg className="cita-reel-doodle cita-reel-doodle-left" viewBox="0 0 90 74" fill="none" aria-hidden="true">
            <path d="M11 37C30 34 42 28 52 13M24 52C43 49 54 39 64 23" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <div className="cita-reel-note cita-reel-note-right" aria-hidden="true">Power every<br />journey <span>✳</span></div>
          <svg className="cita-reel-doodle cita-reel-arrow-right" viewBox="0 0 165 180" fill="none" aria-hidden="true">
            <path d="M12 6C36 20 85 10 106 58C128 108 92 141 58 157M58 157L68 136M58 157L79 155" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div
            className="cita-reel-carousel"
            ref={bandRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Draggable showcase of ten original CITA EV charger models"
            onClickCapture={(event) => {
              if (clickBlockRef.current) { event.preventDefault(); event.stopPropagation(); }
            }}
          >
            {citaChargers.map((charger, index) => (
              <Link
                key={charger.slug}
                ref={(node) => { cardRefs.current[index] = node; }}
                className="cita-reel-card"
                to={`/cita-ev-chargers/${charger.slug}`}
                aria-label={`View ${charger.name} — ${charger.power}`}
                draggable={false}
              >
                <img
                  src={charger.lifestyleImage}
                  alt=""
                  draggable={false}
                  decoding="async"
                  loading={index < 7 ? "eager" : "lazy"}
                />
                <span className="cita-reel-card-gradient" />
                <span className="cita-reel-card-copy">
                  <small>{charger.power}</small>
                  <strong>{charger.name.replace("CITA ", "")}</strong>
                </span>
                <span className="cita-reel-card-icon" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
          <div className="cita-reel-note cita-reel-note-bottom" aria-hidden="true">Find your<br />perfect charger</div>
          <svg className="cita-reel-doodle cita-reel-arrow-bottom" viewBox="0 0 130 94" fill="none" aria-hidden="true">
            <path d="M5 8C25 51 64 38 95 60L91 41M95 60L72 54" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="cita-reel-cta">
            <a href="#cita-range">Explore Chargers <span aria-hidden="true">↗</span></a>
          </div>
          <p className="cita-reel-microcopy">10 charger models &nbsp;·&nbsp; AC + DC &nbsp;·&nbsp; <Link to="/contact-us">Enquire with ZVolta ↗</Link></p>
        </div>
      </div>
    </section>
  );
}
