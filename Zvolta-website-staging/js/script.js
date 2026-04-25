document.addEventListener('DOMContentLoaded', function () {

    gsap.registerPlugin(ScrollTrigger, Observer);
    let scrollObserver;

    // =========================================
    // GLOBAL UI ELEMENTS (Moved to top for scope access)
    // =========================================
    const floatingDock = document.getElementById('floating-dock-container');
    const dynamicLogo = document.getElementById('dynamic-logo');
    const dynamicSidebar = document.getElementById('dynamic-sidebar-btn');

    // =========================================
    // 1. FINAL LOADER: LOGIC BASED (SMART)
    // =========================================
    const loaderElement = document.getElementById('custom-loader');
    const blindTop = document.getElementById('loader-blind-top');
    const blindBottom = document.getElementById('loader-blind-bottom');
    const loaderContent = document.getElementById('loader-content');
    const loaderBar = document.getElementById('loader-bar');
    const loaderBarContainer = document.getElementById('loader-bar-container');
    const loaderStatus = document.getElementById('loader-status');
    const loaderStatusContainer = document.getElementById('loader-status-container');
    const loaderLogo = document.getElementById('loader-logo');
    const loaderGlow = document.getElementById('loader-glow');

    // Select Hero Elements
    const pageContent = document.querySelector('main');
    const heroElements = document.querySelectorAll('#hero-section h1, #hero-section p, #hero-section .flex');
    const heroBg = document.querySelector('#hero-section img');

    // A. Initial States
    gsap.set(pageContent, { autoAlpha: 1 });
    gsap.set(heroElements, { y: 40, opacity: 0 });
    gsap.set(heroBg, { scale: 1.1 });

    // Idle Breathing Animation
    gsap.to(loaderLogo, {
        scale: 1.05,
        opacity: 0.8,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // B. Continuous "Trickle" Progress (Never Freezes)
    const trickleTween = gsap.to(loaderBar, {
        width: "99%",
        duration: 15,
        ease: "expo.out",
        onUpdate: function() {
           const prog = this.progress();
           if(loaderStatus) {
               if(prog < 0.2) loaderStatus.innerText = "INITIALIZING...";
               else if(prog < 0.5) loaderStatus.innerText = "LOADING ASSETS...";
               else if(prog < 0.8) loaderStatus.innerText = "PREPARING...";
               else loaderStatus.innerText = "ALMOST THERE...";
           }
        }
    });

    // C. Wait for Real Page Load
    const criticalAssetsLoaded = new Promise(async (resolve) => {
        try { await document.fonts.ready; } catch(e) {}
        const criticalImages = document.querySelectorAll('img[data-critical="true"]');
        const imagePromises = Array.from(criticalImages).map(img => {
            if (img.complete) return Promise.resolve();
            return new Promise(resolve => {
                img.onload = resolve;
                img.onerror = resolve;
            });
        });
        await Promise.all(imagePromises);
        resolve();
    });

    const windowLoaded = new Promise((resolve) => {
        if (document.readyState === 'complete') {
            resolve();
        } else {
            window.addEventListener('load', resolve);
        }
    });

    // D. Execution Sequence
    Promise.all([criticalAssetsLoaded, windowLoaded]).then(() => {
        trickleTween.kill();

        const tl = gsap.timeline({
            defaults: { ease: "power3.inOut" },
            onStart: () => {
                ScrollTrigger.refresh();
                window.scrollTo(0, 0);
            },
            onComplete: () => {
                loaderElement.style.display = 'none';
                gsap.set([heroElements, heroBg], { clearProps: "willChange" });
            }
        });

        tl
        .to(loaderBar, {
            width: "100%",
            duration: 0.3,
            ease: "power2.out",
            onStart: () => { if(loaderStatus) loaderStatus.innerText = "READY"; }
        })
        .to(loaderBar, { backgroundColor: "#16a34a", boxShadow: "0 0 30px #16a34a", duration: 0.1 })
        .to([loaderBarContainer, loaderStatusContainer, loaderGlow], { opacity: 0, duration: 0.2 }, "+=0.1")
        .to(loaderLogo, {
            scale: 20,
            duration: 0.6,
            ease: "expo.in",
            force3D: true
        }, "<")
        .to(loaderLogo, { opacity: 0, duration: 0.2 }, "-=0.2")
        .set(loaderContent, { opacity: 0 })
        .to(blindTop, { scaleY: 0, duration: 0.8, ease: "power4.inOut" }, "-=0.3")
        .to(blindBottom, { scaleY: 0, duration: 0.8, ease: "power4.inOut" }, "<")
        .to(heroBg, {
            scale: 1,
            duration: 1.5,
            ease: "power2.out"
        }, "-=0.6")
        .to(heroElements, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "out",
            clearProps: "transform"
        }, "-=1.1");
    });

    // =========================================
    // 2. HERO TEXT ANIMATION
    // =========================================
    const words = ["Charging", "Investing", "Driving"];
    const wordContainer = document.getElementById("hero-changing-word");
    let wordIndex = 0;

    if (wordContainer) {
        const ruler = document.createElement("span");
        ruler.style.visibility = "hidden";
        ruler.style.position = "absolute";
        ruler.style.whiteSpace = "nowrap";
        ruler.style.font = window.getComputedStyle(wordContainer).font;
        document.body.appendChild(ruler);

        const measureAndSet = (text) => {
            const styles = window.getComputedStyle(wordContainer);
            ruler.style.font = styles.font;
            ruler.style.fontSize = styles.fontSize;
            ruler.style.fontWeight = styles.fontWeight;
            ruler.style.letterSpacing = styles.letterSpacing;
            ruler.innerText = text;
            return ruler.offsetWidth;
        };

        const startWidth = measureAndSet(words[0]);
        gsap.set(wordContainer, { width: startWidth });
        wordContainer.innerHTML = '';

        const initialSpan = document.createElement('span');
        initialSpan.innerText = words[0];
        gsap.set(initialSpan, { position: "absolute", top: 0, left: "50%", xPercent: -50, yPercent: 0 });
        wordContainer.appendChild(initialSpan);

        setInterval(() => {
            const nextIndex = (wordIndex + 1) % words.length;
            const nextWord = words[nextIndex];
            const currentSpan = wordContainer.querySelector('span:not(.exiting)');
            const newWidth = measureAndSet(nextWord);

            if(currentSpan) currentSpan.classList.add('exiting');

            const nextSpan = document.createElement('span');
            nextSpan.innerText = nextWord;

            gsap.set(nextSpan, {
                position: "absolute",
                top: 0,
                left: "50%",
                xPercent: -50,
                yPercent: 100,
                opacity: 0,
                filter: "blur(12px)",
            });

            wordContainer.appendChild(nextSpan);

            const tl = gsap.timeline({
                onComplete: () => {
                    if(currentSpan) currentSpan.remove();
                }
            });

            tl.to(wordContainer, { width: newWidth, duration: 0.6, ease: "expo.inOut" }, 0);
            if(currentSpan) {
                tl.to(currentSpan, { yPercent: -100, opacity: 0, filter: "blur(12px)", duration: 0.6, ease: "power3.inOut" }, 0);
            }
            tl.to(nextSpan, { yPercent: 0, opacity: 1, filter: "blur(0px)", duration: 0.6, ease: "power3.inOut" }, 0.05);

            wordIndex = nextIndex;
        }, 2500);

        window.addEventListener('resize', () => {
            const currentWord = words[wordIndex];
            const w = measureAndSet(currentWord);
            gsap.set(wordContainer, { width: w });
        });
    }


  // =========================================
  // 3. VIRTUAL SCROLL (Touch Fix + Custom Scrollbar)
  // =========================================
  const wrapper = document.querySelector("#smooth-wrapper");
  const content = document.querySelector("#smooth-content");
  const sbThumb = document.getElementById('virtual-scrollbar-thumb');

  let scrollY = 0;
  let targetScrollY = 0;
  let maxScroll = 0;
  let scrollTimeout;

  function onResize() {
    maxScroll = content.offsetHeight - window.innerHeight;
  }
  window.addEventListener("resize", onResize);
  ScrollTrigger.addEventListener("refresh", onResize);
  onResize();

  scrollObserver = Observer.create({
    target: window,
    type: "wheel,touch,pointer",
    onChange: (self) => {
      if(document.getElementById('custom-loader').style.display !== 'none') return;

      const isTouch = self.event.type.startsWith('touch') ||
        (self.event.pointerType && self.event.pointerType === 'touch');

      // UPDATED: Increased from 6 to 9 for better sensitivity
      const speedFactor = isTouch ? 9 : 1;
      const directionMultiplier = isTouch ? -1 : 1;

      targetScrollY += self.deltaY * speedFactor * directionMultiplier;
      targetScrollY = Math.max(0, Math.min(maxScroll, targetScrollY));
    },
    onPress: (self) => {
      targetScrollY = scrollY;
    },
    preventDefault: true
  });

  gsap.ticker.add(() => {
    const diff = targetScrollY - scrollY;
    // 0.05 is the easing/damping factor.
    // You can increase this to 0.08 if you want it to stop "sliding" faster.
    scrollY += diff * 0.05;

    gsap.set(content, { y: -scrollY });
    ScrollTrigger.update();

    if (sbThumb && maxScroll > 0) {
      const winH = window.innerHeight;
      const docH = content.offsetHeight;
      let thumbH = (winH / docH) * winH;
      if (thumbH < 50) thumbH = 50;
      if (thumbH > winH) thumbH = 0;

      const progress = scrollY / maxScroll;
      const thumbY = progress * (winH - thumbH);

      gsap.set(sbThumb, { height: thumbH, y: thumbY });

      if (Math.abs(diff) > 0.5) {
        document.body.classList.add('is-scrolling');
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          document.body.classList.remove('is-scrolling');
        }, 1000);
      }
    }
  });

  ScrollTrigger.scrollerProxy(wrapper, {
    scrollTop(value) {
      if (arguments.length) {
        targetScrollY = value;
        scrollY = value;
        gsap.set(content, { y: -scrollY });
        return;
      }
      return scrollY;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    }
  });
  ScrollTrigger.defaults({ scroller: wrapper });

    // =========================================
    // 4. STICKY HERO
    // =========================================
    ScrollTrigger.create({
        trigger: "#hero-section",
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false
    });

    // =========================================
    // 6. DYNAMIC HOW IT WORKS (FIXED & CLIPPING SOLVED)
    // =========================================
    const howSection = document.getElementById("how-it-works");
    if (howSection) {

        const wordSlides = document.querySelectorAll(".dynamic-word");
        const cardColumns = document.querySelectorAll(".card-column");
        const btnGroups = document.querySelectorAll(".btn-group");
        const progressBar = document.getElementById("scroll-progress-bar");
        const scrollIndicator = document.getElementById("how-scroll-indicator");

        gsap.set(wordSlides, { yPercent: 120, autoAlpha: 0 });
        gsap.set(wordSlides[0], { yPercent: 0, autoAlpha: 1 });

        cardColumns.forEach(col => {
            const state0 = col.querySelector('[data-state="0"]');
            const state1 = col.querySelector('[data-state="1"]');
            const state2 = col.querySelector('[data-state="2"]');

            if (state0) gsap.set(state0, { autoAlpha: 1, y: 0, zIndex: 10 });
            if (state1 && state2) gsap.set([state1, state2], { autoAlpha: 0, y: 30, zIndex: 0 });
        });

        if (btnGroups.length >= 3) {
            gsap.set([btnGroups[1], btnGroups[2]], { y: 20, autoAlpha: 0, pointerEvents: "none" });
            gsap.set(btnGroups[0], { y: 0, autoAlpha: 1, pointerEvents: "auto" });
        }

        if(progressBar) {
            progressBar.style.top = "0%";
            progressBar.style.backgroundColor = "#059669";
        }

        let currentIndex = 0;
        const totalStates = 3;

        ScrollTrigger.create({
            trigger: "#how-it-works",
            start: "top top",
            end: "+=1500",
            pin: true,
            pinType: "transform",
            scrub: 0.5,
            // UPDATED: Hide dock when pinned
            onToggle: (self) => {
                let index = Math.floor(self.progress * totalStates);
                if (index >= totalStates) index = totalStates - 1;
                if (index !== currentIndex) {
                    changeState(index, currentIndex);
                    currentIndex = index;
                }
                if (scrollIndicator) {
                    scrollIndicator.style.opacity = self.progress > 0.05 ? '0' : '1';
                }

                // HIDE DOCK ON PIN
                if (floatingDock) {
                    if (self.isActive) {
                        floatingDock.style.transform = 'translate(-50%, -250%)';
                    } else {
                        floatingDock.style.transform = 'translate(-50%, 0)';
                    }
                }
            },
            onUpdate: (self) => {
                // Ensure state updates happen during scrub
                 let index = Math.floor(self.progress * totalStates);
                if (index >= totalStates) index = totalStates - 1;

                if (index !== currentIndex) {
                    changeState(index, currentIndex);
                    currentIndex = index;
                }
            }
        });

       function changeState(newIndex, oldIndex) {
            if (progressBar) {
                const positions = ["0%", "33.33%", "66.66%"];
                const colors = ["#059669", "#84cc16", "#064e3b"];
                progressBar.style.top = positions[newIndex];
                progressBar.style.backgroundColor = colors[newIndex];
            }

            if (wordSlides[oldIndex]) {
                gsap.to(wordSlides[oldIndex], {
                    yPercent: -120,
                    autoAlpha: 0,
                    duration: 0.25,
                    ease: "power2.in",
                    overwrite: true
                });
            }

            if (wordSlides[newIndex]) {
                gsap.fromTo(wordSlides[newIndex],
                    { yPercent: 120, autoAlpha: 0 },
                    {
                        yPercent: 0,
                        autoAlpha: 1,
                        duration: 0.4,
                        delay: 0.15,
                        ease: "back.out(1.2)",
                        overwrite: true
                    }
                );
            }

            cardColumns.forEach((col, i) => {
                const oldLayer = col.querySelector(`[data-state="${oldIndex}"]`);
                const newLayer = col.querySelector(`[data-state="${newIndex}"]`);

                if(oldLayer) {
                    gsap.to(oldLayer, {
                        autoAlpha: 0, y: -40, duration: 0.3, delay: i * 0.03, ease: "power1.in", zIndex: 0, overwrite: 'auto'
                    });
                }
                if(newLayer) {
                    gsap.fromTo(newLayer,
                        { autoAlpha: 0, y: 50, zIndex: 10 },
                        { autoAlpha: 1, y: 0, duration: 0.6, delay: (i * 0.08) + 0.35, ease: "back.out(1.1)", overwrite: 'auto' }
                    );
                }
            });

            if (btnGroups[oldIndex]) {
                gsap.to(btnGroups[oldIndex], {
                    autoAlpha: 0, y: -15, pointerEvents: "none", duration: 0.2, overwrite: 'auto'
                });
            }
            if (btnGroups[newIndex]) {
                gsap.fromTo(btnGroups[newIndex],
                    { autoAlpha: 0, y: 15, pointerEvents: "none" },
                    { autoAlpha: 1, y: 0, pointerEvents: "auto", duration: 0.4, delay: 0.3, overwrite: 'auto' }
                );
            }
        }
    }

    // =========================================
    // 7. UTILS: TEXT REVEAL
    // =========================================
    const textRevealElement = document.querySelector('.reveal-text');
    if (textRevealElement) {
        const textContent = textRevealElement.innerText;
        const textWords = textContent.split(' ');
        textRevealElement.innerHTML = '';
        textWords.forEach(word => {
            const span = document.createElement('span');
            span.textContent = word + ' ';
            span.style.opacity = '0.15';
            span.style.color = 'inherit';
            textRevealElement.appendChild(span);
        });
        const spans = textRevealElement.querySelectorAll('span');

        ScrollTrigger.create({
            trigger: textRevealElement,
            start: "top 90%",
            end: "top 40%",
            scrub: 0.5,
            onUpdate: (self) => {
                const progress = self.progress;
                const totalSpans = spans.length;
                const spread = 0.15;
                spans.forEach((span, index) => {
                    const wordPos = index / (totalSpans - 1);
                    let wordOpacity = 0.15;
                    let wordColor = 'inherit';
                    if (progress >= 1 || progress > wordPos + spread) {
                        wordOpacity = 1;
                        wordColor = '#000';
                    } else if (progress > wordPos - spread) {
                        const transitionState = (progress - (wordPos - spread)) / (spread * 2);
                        const clampedState = Math.max(0, Math.min(1, transitionState));
                        wordOpacity = 0.15 + (0.85 * clampedState);
                        if (clampedState > 0.6) wordColor = '#000';
                    }
                    if (index === totalSpans - 1 && progress > 0.95) {
                        wordOpacity = 1;
                        wordColor = '#000';
                    }
                    span.style.opacity = wordOpacity;
                    span.style.color = wordColor;
                });
            }
        });
    }


   // =========================================
    // 8. STATS COUNTER & 3D TILT
    // =========================================
    const statContainers = document.querySelectorAll('.stat-container');

    const playCounterAnimation = (container) => {
        const targetElement = container.querySelector('.stat-number');
        if (!targetElement) return;

        if (container.hasAttribute('data-played')) return;
        container.setAttribute('data-played', 'true');

        const endValue = parseInt(targetElement.getAttribute('data-target'));
        const duration = 2000;
        let startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(easeProgress * endValue);
            targetElement.textContent = currentValue.toLocaleString();
            if (progress < 1) window.requestAnimationFrame(step);
            else targetElement.textContent = endValue.toLocaleString();
        }
        window.requestAnimationFrame(step);
    };

    const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                playCounterAnimation(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statContainers.forEach(container => {
        statsObserver.observe(container);

        container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;

            gsap.to(container, {
                duration: 0.5,
                rotateX: rotateX,
                rotateY: rotateY,
                scale: 1.05,
                transformPerspective: 1000,
                ease: "power2.out",
                overwrite: "auto"
            });
        });

        container.addEventListener('mouseleave', () => {
            gsap.to(container, {
                duration: 0.8,
                rotateX: 0,
                rotateY: 0,
                scale: 1,
                ease: "elastic.out(1, 0.5)",
                overwrite: "auto"
            });
        });
    });

    // =========================================
    // 11. APP SECTION TABS (SMOOTH TRANSITIONS)
    // =========================================
    const appTabs = document.querySelectorAll('.app-tab');
    const appTabBg = document.getElementById('app-tab-bg');
    const screenImg = document.getElementById('app-screen-img');

    const appData = {
        user: [
            { title: "Live Map", desc: "Find chargers nearby", icon: "bi-geo-alt-fill" },
            { title: "Instant Start", desc: "Scan to charge", icon: "bi-qr-code" },
            { title: "Clear Pricing", desc: "See rates instantly", icon: "bi-tag-fill" },
            { title: "History", desc: "Track your spending", icon: "bi-wallet2" }
        ],
        host: [
            { title: "Dashboard", desc: "Real-time revenue", icon: "bi-speedometer2" },
            { title: "Pricing", desc: "Adjust rates easily", icon: "bi-sliders" },
            { title: "Access", desc: "Manage user groups", icon: "bi-people-fill" },
            { title: "Alerts", desc: "Instant notifications", icon: "bi-bell-fill" }
        ]
    };

    if (appTabs.length > 0) {
        appTabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-target');
                const data = appData[target];
                const cards = [
                    document.getElementById('card-1'),
                    document.getElementById('card-2'),
                    document.getElementById('card-3'),
                    document.getElementById('card-4')
                ];

                if (index === 0) {
                    appTabBg.style.left = '4px';
                } else {
                    appTabBg.style.left = 'calc(50% + 0px)';
                }

                appTabs.forEach(t => {
                    t.classList.remove('text-white');
                    t.classList.add('text-gray-400');
                });
                tab.classList.remove('text-gray-400');
                tab.classList.add('text-white');

                const tl = gsap.timeline();

                tl.to(cards, {
                    y: 20,
                    opacity: 0,
                    scale: 0.9,
                    duration: 0.3,
                    stagger: 0.05,
                    ease: "power2.in"
                });

                tl.add(() => {
                    const newSrc =
                      target === "user"
                        ? "img/Gray and Black Modern Handphone Mockup Instagram Story(5).png"
                        : "img/Gray and Black Modern Handphone Mockup Instagram Story(6).png";
                    screenImg.src = newSrc;
                    cards.forEach((card, i) => {
                        card.querySelector('.card-title').innerText = data[i].title;
                        card.querySelector('.card-desc').innerText = data[i].desc;
                        card.querySelector('i').className = `bi ${data[i].icon} text-lg`;
                    });
                });

                tl.fromTo(screenImg,
                    { opacity: 0.5, scale: 0.98 },
                    { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" },
                    "<"
                );

                tl.to(cards, {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    stagger: 0.08,
                    ease: "back.out(1.7)",
                    clearProps: "transform"
                }, "-=0.2");
            });
        });
    }

    // =========================================
    // STORIES FILTER LOGIC
    // =========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const storyCards = document.querySelectorAll('.story-card');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => {
                    b.classList.remove('bg-zinc-900', 'text-white');
                    b.classList.add('bg-white', 'text-zinc-600');
                });
                btn.classList.remove('bg-white', 'text-zinc-600');
                btn.classList.add('bg-zinc-900', 'text-white');

                const filterValue = btn.getAttribute('data-filter');

                storyCards.forEach(card => {
                    const categories = card.getAttribute('data-category');

                    if (filterValue === 'all' || categories.includes(filterValue)) {
                        gsap.to(card, {
                            display: 'block',
                            opacity: 1,
                            scale: 1,
                            duration: 0.4,
                            ease: "power2.out"
                        });
                    } else {
                        gsap.to(card, {
                            opacity: 0,
                            scale: 0.95,
                            duration: 0.3,
                            ease: "power2.in",
                            onComplete: () => { card.style.display = 'none'; }
                        });
                    }
                });
            });
        });
    }

    // =========================================
    // STORIES HORIZONTAL SCROLL (Fixed Pinning)
    // =========================================
    const storiesSection = document.getElementById("stories-section");
    const storiesTrack = document.getElementById("stories-track");

    if (storiesSection && storiesTrack) {

        function getScrollAmount() {
            let trackWidth = storiesTrack.scrollWidth;
            return -(trackWidth - window.innerWidth);
        }

        const tween = gsap.to(storiesTrack, {
            x: getScrollAmount,
            ease: "none"
        });

        ScrollTrigger.create({
            trigger: storiesSection,
            // UPDATED: Force pin at top for full screen section
            start: "top top",
            end: () => `+=${storiesTrack.scrollWidth - window.innerWidth}`,
            pin: true,
            animation: tween,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            // UPDATED: Hide dock when pinned
            onToggle: (self) => {
                // Dock Toggle
                if (floatingDock) {
                    if (self.isActive) {
                        floatingDock.style.transform = 'translate(-50%, -250%)';
                    } else {
                        floatingDock.style.transform = 'translate(-50%, 0)';
                    }
                }
                // Arrow Toggle
                if (sbThumb) {
                    if (self.isActive) sbThumb.classList.add('is-arrow-indicator');
                    else sbThumb.classList.remove('is-arrow-indicator');
                }
            }
        });
    }

    // =========================================
    // 12. DUAL MARQUEE (High Velocity)
    // =========================================
    const trackTop = document.getElementById('partner-track-top');
    const trackBottom = document.getElementById('partner-track-bottom');

    if (trackTop && trackBottom) {

        const createMarquee = (track, direction) => {
            const content = track.innerHTML;
            track.innerHTML = content + content + content + content;

            let config;
            if (direction === 1) {
                config = { xPercent: -25, ease: "none", duration: 30, repeat: -1 };
            } else {
                gsap.set(track, { xPercent: -25 });
                config = { xPercent: 0, ease: "none", duration: 30, repeat: -1 };
            }

            return gsap.to(track, config);
        };

        const tweenTop = createMarquee(trackTop, 1);
        const tweenBottom = createMarquee(trackBottom, -1);

        let targetTimeScale = 1;
        let currentTimeScale = 1;

        Observer.create({
            target: window,
            type: "wheel,touch,pointer",
            onChangeY: (self) => {
                const velocity = Math.abs(self.deltaY);
                let boost = 1 + (velocity / 15);
                if (boost > 12) boost = 12;
                targetTimeScale = boost;
            }
        });

        gsap.ticker.add(() => {
            targetTimeScale += (1 - targetTimeScale) * 0.05;
            currentTimeScale += (targetTimeScale - currentTimeScale) * 0.1;

            tweenTop.timeScale(currentTimeScale);
            tweenBottom.timeScale(currentTimeScale);
        });
    }

   // =========================================
    // TEAM SCROLL ACCORDION (Performance Optimized)
    // =========================================
    const teamSection = document.getElementById("team-section");

    if (teamSection) {
        const teamMembers = document.querySelectorAll(".team-member");
        const contents = document.querySelectorAll(".team-content");
        const heights = [];

        contents.forEach((content, i) => {
            const clone = content.cloneNode(true);
            clone.style.height = "auto";
            clone.style.position = "absolute";
            clone.style.visibility = "hidden";
            clone.style.width = content.offsetWidth + "px";
            document.body.appendChild(clone);
            heights[i] = clone.offsetHeight;
            document.body.removeChild(clone);

            gsap.set(content, { height: 0, opacity: 0 });
        });

        gsap.set(contents[0], { height: heights[0], opacity: 1 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#team-accordion-wrapper",
                pin: "#team-section",
                start: "top 5%",
                end: "+=2500",
                scrub: 0.5,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                // UPDATED: Hide dock when pinned
                onToggle: (self) => {
                    if (floatingDock) {
                        if (self.isActive) {
                            floatingDock.style.transform = 'translate(-50%, -250%)';
                        } else {
                            floatingDock.style.transform = 'translate(-50%, 0)';
                        }
                    }
                }
            }
        });

        tl.to(contents[0], { height: 0, opacity: 0, duration: 1, ease: "power2.inOut" })
          .to(contents[1], { height: heights[1], opacity: 1, duration: 1, ease: "power2.inOut" }, "<");

        tl.to({}, { duration: 0.5 });

        tl.to(contents[1], { height: 0, opacity: 0, duration: 1, ease: "power2.inOut" })
          .to(contents[2], { height: heights[2], opacity: 1, duration: 1, ease: "power2.inOut" }, "<");

        tl.to({}, { duration: 0.5 });

        window.addEventListener('resize', () => {
            ScrollTrigger.refresh();
        });
    }

   // =========================================
   // 13. DYNAMIC NAV & DOCK CONTROLLER
   // =========================================
   const cardsSection = document.getElementById('horizontal-scroll-section');

    if (dynamicLogo) {
        dynamicLogo.style.opacity = '1';
        dynamicLogo.style.pointerEvents = 'auto';
    }
    if (dynamicSidebar) {
        dynamicSidebar.style.opacity = '1';
        dynamicSidebar.style.pointerEvents = 'auto';
    }

    if (floatingDock && cardsSection) {
        ScrollTrigger.create({
            trigger: cardsSection,
            start: "top center",
            onEnter: () => {
                floatingDock.style.transform = 'translate(-50%, 0)';
            },
            onLeaveBack: () => {
                floatingDock.style.transform = 'translate(-50%, -250%)';
            }
        });
    }

  // =========================================
    // 14. MOBILE MENU (FULL SCREEN CARD GRID)
    // =========================================
    const menuBtn = document.getElementById('dynamic-sidebar-btn');
    const menuOverlay = document.getElementById('mobile-menu-overlay');
    const menuBackdrop = document.getElementById('mobile-menu-backdrop');
    const menuClose = document.getElementById('mobile-menu-close');
    const menuCards = document.querySelectorAll('.menu-card');
    const menuLinks = document.querySelectorAll('.mobile-menu-link');

    let isMenuOpen = false;

    const menuTl = gsap.timeline({ paused: true, reversed: true });

    menuTl
        .to(menuOverlay, { autoAlpha: 1, duration: 0 })
        .set(menuOverlay, { pointerEvents: "auto" })
        .to(menuBackdrop, { opacity: 1, duration: 0.4, ease: "power2.out" })
        .to(menuClose, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "back.out(1.7)"
        }, "-=0.2")
        .to(menuCards, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out"
        }, "-=0.3")
        .from(menuLinks, {
            x: -20,
            opacity: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: "power2.out"
        }, "-=0.4");


    function toggleMenu() {
        if (!isMenuOpen) {
            menuTl.play();
            if(scrollObserver) scrollObserver.disable();
            document.body.style.overflow = 'hidden';
        } else {
            menuTl.reverse();
            if(scrollObserver) scrollObserver.enable();
            document.body.style.overflow = '';
        }
        isMenuOpen = !isMenuOpen;
    }

    if(menuBtn) menuBtn.addEventListener('click', toggleMenu);
    if(menuClose) menuClose.addEventListener('click', toggleMenu);

    if(menuOverlay) {
        menuOverlay.addEventListener('click', (e) => {
            if (e.target === document.querySelector('#mobile-menu-overlay > div')) {
                 if(isMenuOpen) toggleMenu();
            }
        });
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
             if(isMenuOpen) toggleMenu();
        });
    });

    // =========================================
    // 15. CONTACT FORM HANDLING
    // =========================================
    const contactForm = document.getElementById('contact-form');
    const successMsg = document.getElementById('contact-success');
    const submitBtn = document.getElementById('contact-submit-btn');
    const btnText = document.getElementById('btn-text');
    const btnLoader = document.getElementById('btn-loader');
    const formError = document.getElementById('form-error');
    const resetBtn = document.getElementById('reset-form-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            btnLoader.classList.remove('hidden');
            btnText.style.opacity = '0';
            submitBtn.classList.add('pointer-events-none');
            formError.classList.add('hidden');

            const formData = new FormData(contactForm);

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    contactForm.reset();
                    successMsg.classList.remove('hidden');
                    setTimeout(() => { successMsg.style.opacity = '1'; }, 50);

                } else {
                     throw new Error('Form submission failed');
                }
            } catch (error) {
                formError.classList.remove('hidden');
            } finally {
                btnLoader.classList.add('hidden');
                btnText.style.opacity = '1';
                submitBtn.classList.remove('pointer-events-none');
            }
        });

        if(resetBtn) {
            resetBtn.addEventListener('click', () => {
                 successMsg.style.opacity = '0';
                 setTimeout(() => { successMsg.classList.add('hidden'); }, 500);
            });
        }
    }

    // =========================================
    // HERO DAY/NIGHT CYCLE
    // =========================================
    const heroImg = document.getElementById('hero-bg-img');
    if (heroImg) {
        const currentHour = new Date().getHours();
        const dayImage = "img/Hero/Zv%20-%20Main%20Banner%20Day.png";
        const nightImage = "img/Hero/Zv%20-%20Main%20Banner.png";
        if (currentHour < 6 || currentHour >= 18) {
            heroImg.src = nightImage;
        } else {
            heroImg.src = dayImage;
        }
    }

    // =========================================
    // 16. CARD SLIDESHOW LOGIC
    // =========================================
    const slideshows = document.querySelectorAll('.card-slideshow');
    if (slideshows.length > 0) {
        slideshows.forEach(container => {
            const images = container.querySelectorAll('img');
            if (images.length < 2) return;
            let currentIndex = 0;
            setInterval(() => {
                const nextIndex = (currentIndex + 1) % images.length;
                images[currentIndex].classList.remove('opacity-100');
                images[currentIndex].classList.add('opacity-0');
                images[nextIndex].classList.remove('opacity-0');
                images[nextIndex].classList.add('opacity-100');
                currentIndex = nextIndex;
            }, 3000);
        });
    }
     const trigger = document.getElementById('dropdown-trigger');
    const menu = document.getElementById('dropdown-menu');
    const arrow = document.getElementById('dropdown-arrow');
    const selectedText = document.getElementById('dropdown-selected-text');
    const hiddenInput = document.getElementById('dropdown-hidden-input');
    const items = document.querySelectorAll('.dropdown-item');

    // Toggle Menu
    trigger.addEventListener('click', () => {
        const isOpen = !menu.classList.contains('opacity-0');
        if (isOpen) {
            menu.classList.add('opacity-0', 'translate-y-[-10px]', 'pointer-events-none');
            arrow.style.transform = 'rotate(0deg)';
        } else {
            menu.classList.remove('opacity-0', 'translate-y-[-10px]', 'pointer-events-none');
            arrow.style.transform = 'rotate(180deg)';
        }
    });

    // Handle Selection
    items.forEach(item => {
        item.addEventListener('click', () => {
            const value = item.getAttribute('data-value');
            const text = item.innerText;

            selectedText.innerText = text;
            selectedText.classList.remove('text-zinc-500');
            selectedText.classList.add('text-white');
            hiddenInput.value = value;

            // Close Menu
            menu.classList.add('opacity-0', 'translate-y-[-10px]', 'pointer-events-none');
            arrow.style.transform = 'rotate(0deg)';
        });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!trigger.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.add('opacity-0', 'translate-y-[-10px]', 'pointer-events-none');
            arrow.style.transform = 'rotate(0deg)';
        }
    });
    ScrollTrigger.refresh();
});
