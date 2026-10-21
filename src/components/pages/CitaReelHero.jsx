import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { citaChargers } from "../../data/citaChargers";

const DESKTOP_PITCH = 210;
const MOBILE_PITCH = 156;
const AUTO_SPEED = 42;
const SHAPE_INTERVAL = 48;
// Two copies let the infinite belt span widescreen displays without empty margins.
const carouselModels = [...citaChargers, ...citaChargers];

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

function positionCards(cards, bandWidth, bandHeight, offset, mobile, updateShape) {
  const pitch = mobile ? MOBILE_PITCH : DESKTOP_PITCH;
  const period = pitch * cards.length;
  const center = bandWidth / 2;
  const normalizer = mobile ? Math.max(185, center - 15) : Math.max(510, center - 75);
  const baseWidth = mobile ? 142 : 184;
  const baseHeight = mobile ? 159 : Math.min(273, bandHeight * 0.66);
  const edgeGain = mobile ? 42 : Math.min(92, (bandHeight - baseHeight - 24) / 1.4);

  for (let index = 0; index < cards.length; index += 1) {
    const card = cards[index];
    if (!card) continue;
    const t = wrap(index * pitch + offset, period);
    const x = center + t * (1 + 0.067 * (t / normalizer) ** 2);
    const d = Math.min(1.12, Math.abs(x - center) / normalizer);
    const width = baseWidth + (mobile ? 20 : 39) * d ** 2;
    const offscreen = x + width / 2 < -10 || x - width / 2 > bandWidth + 10;
    if (offscreen) {
      if (card.style.visibility !== "hidden") card.style.visibility = "hidden";
      continue;
    }
    if (card.style.visibility !== "visible") card.style.visibility = "visible";

    const dl = Math.min(1.12, Math.abs(x - width / 2 - center) / normalizer);
    const dr = Math.min(1.12, Math.abs(x + width / 2 - center) / normalizer);
    const leftHeight = baseHeight + edgeGain * dl ** 2.6;
    const rightHeight = baseHeight + edgeGain * dr ** 2.6;
    const height = Math.max(leftHeight, rightHeight);
    const cy = bandHeight / 2 - (mobile ? 3 : 10) * d ** 2;

    // Compositor-friendly movement every frame; more costly shape updates ~20fps.
    card.style.transform = `translate3d(${(x - width / 2).toFixed(2)}px, ${(cy - height / 2).toFixed(2)}px, 0)`;
    if (updateShape || !card.style.clipPath) {
      card.style.width = `${width.toFixed(2)}px`;
      card.style.height = `${height.toFixed(2)}px`;
      card.style.clipPath = roundedArcPath(width, leftHeight, rightHeight);
      card.style.zIndex = String(30 - Math.round(d * 5));
    }
  }
}

export default function CitaReelHero() {
  const outerRef = useRef(null);
  const bandRef = useRef(null);
  const cardRefs = useRef([]);
  const offsetRef = useRef(0);
  const speedRef = useRef(0);
  const dragRef = useRef({ active: false, lastX: 0, lastT: 0, distance: 0 });
  const blockedClickUntil = useRef(0);

  useEffect(() => {
    const outer = outerRef.current;
    const band = bandRef.current;
    if (!outer || !band) return undefined;

    const mobileQuery = window.matchMedia("(max-width: 820px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isMobile = mobileQuery.matches;
    let reduced = motionQuery.matches;
    let frame = 0;
    let isOnScreen = true;
    let lastTime = 0;
    let lastShapeTime = 0;
    let bandWidth = band.clientWidth;
    let bandHeight = band.clientHeight;
    const cards = cardRefs.current;
    const resizeObserver = new ResizeObserver(() => syncSize());
    const visibilityObserver = new IntersectionObserver((entries) => {
      isOnScreen = entries[0]?.isIntersecting ?? true;
      lastTime = 0;
    }, { rootMargin: "250px" });

    const animations = [];

    function syncSize() {
      isMobile = mobileQuery.matches;
      bandWidth = band.clientWidth;
      bandHeight = band.clientHeight;
      positionCards(cards, bandWidth, bandHeight, offsetRef.current, isMobile, true);
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
          animations.push(element.animate(frames, {
            duration: 660, delay, fill: "both",
            easing: "cubic-bezier(.2,.7,.2,1)",
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


    function tick(now) {
      const dt = lastTime ? Math.max(0, Math.min((now - lastTime) / 1000, 0.045)) : 0;
      lastTime = now;
      if (!document.hidden && isOnScreen) {
        if (!reduced && !dragRef.current.active) {
          offsetRef.current -= AUTO_SPEED * dt;
          offsetRef.current += speedRef.current * dt;
          speedRef.current *= Math.pow(0.12, dt);
          if (Math.abs(speedRef.current) < 1) speedRef.current = 0;
          const cycle = (isMobile ? MOBILE_PITCH : DESKTOP_PITCH) * cards.length;
          offsetRef.current = wrap(offsetRef.current, cycle);
        }
        const shapeUpdate = now - lastShapeTime >= SHAPE_INTERVAL;
        positionCards(cards, bandWidth, bandHeight, offsetRef.current, isMobile, shapeUpdate);
        if (shapeUpdate) lastShapeTime = now;
      }
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
      const delta = event.clientX - drag.lastX;
      const dt = Math.max((now - drag.lastT) / 1000, .012);
      offsetRef.current += delta;
      drag.distance += Math.abs(delta);
      if (drag.distance > 6) {
        if (event.cancelable) event.preventDefault();
        if (!band.hasPointerCapture?.(event.pointerId)) {
          band.setPointerCapture?.(event.pointerId);
        }
      }
      const instantaneous = Math.max(-650, Math.min(650, delta / dt));
      speedRef.current = speedRef.current * 0.6 + instantaneous * 0.4;
      drag.lastX = event.clientX;
      drag.lastT = now;
    }

    function onUp(event) {
      if (!dragRef.current.active) return;
      if (dragRef.current.distance > 6) {
        blockedClickUntil.current = performance.now() + 320;
      }
      if (event.type === "pointercancel") speedRef.current = 0;
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
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    mobileQuery.addEventListener("change", syncSize);
    motionQuery.addEventListener("change", onMediaChange);
    window.addEventListener("resize", syncSize, { passive: true });
    resizeObserver.observe(band);
    visibilityObserver.observe(outer);
    syncSize();
    animateIn();
    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
      animations.forEach((animation) => animation.cancel());
      band.removeEventListener("pointerdown", onDown);
      band.removeEventListener("pointermove", onMove);
      band.removeEventListener("pointerup", onUp);
      band.removeEventListener("pointercancel", onUp);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      mobileQuery.removeEventListener("change", syncSize);
      motionQuery.removeEventListener("change", onMediaChange);
      window.removeEventListener("resize", syncSize);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
    };
  }, []);

  return (
    <section className="cita-reel-hero" aria-labelledby="cita-reel-title">
      <div className="cita-reel-viewport" ref={outerRef}>
        <div className="cita-reel-frame">
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
              if (performance.now() < blockedClickUntil.current) {
                event.preventDefault();
                event.stopPropagation();
              }
            }}
          >

            {carouselModels.map((charger, index) => {
              const duplicate = index >= citaChargers.length;
              return (
                <div
                  key={`${charger.slug}-${index}`}
                  ref={(node) => { cardRefs.current[index] = node; }}
                  className="cita-reel-card"
                  data-model={charger.slug}
                  aria-hidden={duplicate ? "true" : undefined}
                >
                  <Link
                    className="cita-reel-card-detail"
                    to={`/cita-ev-chargers/${charger.slug}`}
                    aria-label={`View details for ${charger.name}`}
                    tabIndex={duplicate ? -1 : 0}
                    draggable={false}
                  >
                    <img
                      src={charger.lifestyleImage}
                      alt=""
                      draggable={false}
                      decoding="async"
                      loading={index < 10 ? "eager" : "lazy"}
                    />
                  </Link>
                  <span className="cita-reel-card-gradient" aria-hidden="true" />
                  <div className="cita-reel-card-hover">
                    <div className="cita-reel-card-copy">
                      <small>{charger.power}</small>
                      <strong>{charger.name.replace("CITA ", "")}</strong>
                    </div>
                    <Link
                      className="cita-reel-card-contact"
                      to="/contact-us"
                      aria-label={`Contact us about ${charger.name}`}
                      title="Contact Us"
                      tabIndex={duplicate ? -1 : 0}
                      draggable={false}
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.5 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.3 0-2.5-.27-3.6-.77L3 21l1.76-5.4A8.5 8.5 0 1 1 20.5 11.5Z" />
                        <path d="M8 11.5h8M8 15h5" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cita-reel-note cita-reel-note-bottom" aria-hidden="true">Find your<br />perfect charger</div>
          <svg className="cita-reel-doodle cita-reel-arrow-bottom" viewBox="0 0 130 94" fill="none" aria-hidden="true">
            <path d="M5 8C25 51 64 38 95 60L91 41M95 60L72 54" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="cita-reel-cta">
            <a href="#cita-range">Explore Chargers</a>
          </div>
          <p className="cita-reel-microcopy">10 charger models &nbsp;·&nbsp; AC + DC &nbsp;·&nbsp; <Link to="/contact-us">Enquire with ZVolta</Link></p>
        </div>
      </div>
    </section>
  );
}
