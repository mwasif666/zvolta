import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { citaChargers } from "../../data/citaChargers";

const DESKTOP_PITCH = 210;
const MOBILE_PITCH = 156;
const AUTO_SPEED = 50;
// Two copies let the infinite belt span widescreen displays without empty margins.
const carouselModels = [...citaChargers, ...citaChargers];

function wrap(value, period) {
  return ((((value + period / 2) % period) + period) % period) - period / 2;
}

// Motion, depth and scale are interpolated on every animation frame.
// Card dimensions stay fixed, avoiding frame-by-frame layout repaint.
function positionCards(cards, bandWidth, bandHeight, offset, mobile) {
  const pitch = mobile ? MOBILE_PITCH : DESKTOP_PITCH;
  const cycle = pitch * cards.length;
  const center = bandWidth / 2;
  const radius = mobile ? Math.max(200, center) : Math.max(540, center - 78);
  const width = mobile ? 142 : 184;
  const height = mobile ? 172 : bandHeight < 400 ? 235 : 270;

  cards.forEach((card, index) => {
    if (!card) return;

    const travel = wrap(index * pitch + offset, cycle);
    const position = center + travel * (1 + 0.045 * (travel / radius) ** 2);
    const normalized = Math.min(1.16, Math.abs(position - center) / radius);
    const distance = Math.min(1, normalized);
    const scaleX = 1 + (mobile ? 0.09 : 0.12) * distance ** 2;
    const scaleY =
      1 + (mobile ? 0.13 : bandHeight < 400 ? 0.16 : 0.22) * distance ** 2;
    const rotation =
      -Math.sign(position - center) * (mobile ? 15 : 23) * distance ** 1.4;
    const visibleHalfWidth = width * scaleX * 0.62;
    const isOutside =
      position + visibleHalfWidth < -32 ||
      position - visibleHalfWidth > bandWidth + 32;

    if (isOutside) {
      if (card.style.visibility !== "hidden") card.style.visibility = "hidden";
      return;
    }
    if (card.style.visibility !== "visible") card.style.visibility = "visible";

    // A gentle 3-D cylinder: outer edges appear taller via perspective.
    // The original photograph is no longer distorted by 2-D skewY.
    // Geometry stays on a SINGLE GPU transform, without resizing clip paths.
    const y = bandHeight / 2 - height / 2 - (mobile ? 3 : 9) * distance ** 2;
    card.style.transform = `translate3d(${(position - width / 2).toFixed(2)}px, ${y.toFixed(2)}px, 0) perspective(${mobile ? 850 : 1100}px) rotateY(${rotation.toFixed(3)}deg) scale(${scaleX.toFixed(4)}, ${scaleY.toFixed(4)})`;
  });
}

function measureCards(cards, mobile, bandHeight) {
  const width = mobile ? 142 : 184;
  const height = mobile ? 172 : bandHeight < 400 ? 235 : 270;
  for (const card of cards) {
    if (!card) continue;
    card.style.width = `${width}px`;
    card.style.height = `${height}px`;
    card.style.clipPath = "none";
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
    let isPointerHovering = false;
    let isKeyboardFocused = false;
    let lastTime = 0;
    let bandWidth = band.clientWidth;
    let bandHeight = band.clientHeight;
    const cards = cardRefs.current;
    const resizeObserver = new ResizeObserver(() => syncSize());
    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        isOnScreen = entries[0]?.isIntersecting ?? true;
        lastTime = 0;
      },
      { rootMargin: "250px" },
    );

    const animations = [];

    function syncSize() {
      isMobile = mobileQuery.matches;
      bandWidth = band.clientWidth;
      bandHeight = band.clientHeight;
      measureCards(cards, isMobile, bandHeight);
      positionCards(cards, bandWidth, bandHeight, offsetRef.current, isMobile);
    }

    function animateIn() {
      if (reduced) return;
      const parts = [
        [
          ".cita-reel-badge",
          [
            { opacity: 0, transform: "translateY(12px) scale(.94)" },
            { opacity: 1, transform: "none" },
          ],
          80,
        ],
        [
          ".cita-reel-heading",
          [
            { opacity: 0, filter: "blur(12px)", transform: "translateY(24px)" },
            { opacity: 1, filter: "blur(0)", transform: "none" },
          ],
          185,
        ],
        [
          ".cita-reel-subline",
          [
            { opacity: 0, transform: "translateY(15px)" },
            { opacity: 1, transform: "none" },
          ],
          440,
        ],
        [
          ".cita-reel-carousel",
          [
            { opacity: 0, transform: "translateY(45px)" },
            { opacity: 1, transform: "none" },
          ],
          585,
        ],
        [
          ".cita-reel-cta",
          [
            { opacity: 0, transform: "scale(.88)" },
            { opacity: 1, transform: "scale(1)" },
          ],
          760,
        ],
        [".cita-reel-note", [{ opacity: 0 }, { opacity: 1 }], 880],
      ];
      parts.forEach(([selector, frames, delay]) => {
        const element = outer.querySelector(selector);
        if (element) {
          animations.push(
            element.animate(frames, {
              duration: 660,
              delay,
              fill: "both",
              easing: "cubic-bezier(.2,.7,.2,1)",
            }),
          );
        }
      });
      outer
        .querySelectorAll(".cita-reel-doodle path")
        .forEach((path, index) => {
          const length = path.getTotalLength();
          path.style.strokeDasharray = String(length);
          animations.push(
            path.animate(
              [{ strokeDashoffset: length }, { strokeDashoffset: 0 }],
              {
                duration: 920,
                delay: 950 + index * 170,
                fill: "both",
                easing: "ease-out",
              },
            ),
          );
        });
    }

    function tick(now) {
      const dt = lastTime
        ? Math.max(0, Math.min((now - lastTime) / 1000, 0.045))
        : 0;
      lastTime = now;
      if (!document.hidden && isOnScreen) {
        if (
          !reduced &&
          !dragRef.current.active &&
          !isPointerHovering &&
          !isKeyboardFocused
        ) {
          offsetRef.current -= AUTO_SPEED * dt;
          offsetRef.current += speedRef.current * dt;
          speedRef.current *= Math.pow(0.12, dt);
          if (Math.abs(speedRef.current) < 1) speedRef.current = 0;
          const cycle =
            (isMobile ? MOBILE_PITCH : DESKTOP_PITCH) * cards.length;
          offsetRef.current = wrap(offsetRef.current, cycle);
        }
        positionCards(
          cards,
          bandWidth,
          bandHeight,
          offsetRef.current,
          isMobile,
        );
      }
      frame = window.requestAnimationFrame(tick);
    }

    function onHoverEnter(event) {
      // Touch has no persistent hover; let touch swipes keep their momentum.
      if (event.pointerType === "mouse" || event.pointerType === "pen") {
        isPointerHovering = true;
        speedRef.current = 0;
      }
    }

    function onHoverLeave(event) {
      if (event.pointerType === "mouse" || event.pointerType === "pen") {
        isPointerHovering = false;
      }
    }

    function onFocusIn() {
      isKeyboardFocused = true;
      speedRef.current = 0;
    }

    function onFocusOut(event) {
      if (!band.contains(event.relatedTarget)) isKeyboardFocused = false;
    }

    function onDown(event) {
      if (reduced || (event.pointerType === "mouse" && event.button !== 0))
        return;
      dragRef.current = {
        active: true,
        lastX: event.clientX,
        lastT: performance.now(),
        distance: 0,
      };
      speedRef.current = 0;
      band.classList.add("is-dragging");
    }

    function onMove(event) {
      const drag = dragRef.current;
      if (!drag.active) return;
      const now = performance.now();
      const delta = event.clientX - drag.lastX;
      const dt = Math.max((now - drag.lastT) / 1000, 0.012);
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
      if (band.hasPointerCapture?.(event.pointerId))
        band.releasePointerCapture(event.pointerId);
    }

    function onMediaChange() {
      reduced = motionQuery.matches;
      syncSize();
    }

    band.addEventListener("pointerenter", onHoverEnter);
    band.addEventListener("pointerleave", onHoverLeave);
    band.addEventListener("focusin", onFocusIn);
    band.addEventListener("focusout", onFocusOut);
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
      band.removeEventListener("pointerenter", onHoverEnter);
      band.removeEventListener("pointerleave", onHoverLeave);
      band.removeEventListener("focusin", onFocusIn);
      band.removeEventListener("focusout", onFocusOut);
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
          <div className="cita-reel-badge">
            <span /> CITA EV — AC & DC Charging Solutions
          </div>
          <h1 className="cita-reel-heading" id="cita-reel-title">
            <span>CITA EV Chargers</span>
            <span>Simple, Safe & Reliable</span>
          </h1>
          <p className="cita-reel-subline">
            Innovative EV charging for homes, workplaces, fleets and public
            networks.
            <br className="cita-reel-desktop-break" />
            Explore the CITA EV hardware range — built for the future of
            mobility.
          </p>
          <p className="cita-reel-browse-hint">
            <span className="cita-reel-browse-desktop">
              Drag to explore · Hover for charger details
            </span>
            <span className="cita-reel-browse-mobile">
              Swipe to discover the CITA charger range
            </span>
          </p>
          <div
            className="cita-reel-note cita-reel-note-right"
            aria-hidden="true"
          >
            Power every journey <span>✳</span>
          </div>
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
                  ref={(node) => {
                    cardRefs.current[index] = node;
                  }}
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
                  <span
                    className="cita-reel-card-gradient"
                    aria-hidden="true"
                  />
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
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20.5 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.3 0-2.5-.27-3.6-.77L3 21l1.76-5.4A8.5 8.5 0 1 1 20.5 11.5Z" />
                        <path d="M8 11.5h8M8 15h5" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="cita-reel-note cita-reel-note-bottom"
            aria-hidden="true"
          >
            Find your
            <br />
            perfect charger
          </div>
          <svg
            className="cita-reel-doodle cita-reel-arrow-bottom"
            viewBox="0 0 130 94"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 8C25 51 64 38 95 60L91 41M95 60L72 54"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="cita-reel-cta">
            <a href="#cita-range">Explore Chargers</a>
          </div>
          <p className="cita-reel-microcopy">
            10 charger models &nbsp;·&nbsp; AC + DC &nbsp;·&nbsp;{" "}
            <Link to="/contact-us">Enquire with ZVolta</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
