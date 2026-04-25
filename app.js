document.addEventListener('DOMContentLoaded', (event) => {

    // 1. Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // 2. Create ScrollSmoother
    let smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',

        smooth: 2,               // 2 seconds to "catch up" to the native scroll
        effects: true,           // Enables data-speed/data-lag
        smoothTouch: 0.1,        // Shorter smoothing on touch devices

        // --- ADDED BASED ON YOUR EXAMPLE ---
        normalizeScroll: true    // Normalizes scroll behavior across devices
        // -------------------------------
    });

    // 3. Setup Horizontal Scroll Animation

    const horizontalSection = document.querySelector('.horizontal-scroll-container');
    const panelsContainer = document.querySelector('.panels-container');

    let scrollWidth; // Will be calculated

    function calculateScrollWidth() {
        let startPin = parseFloat(getComputedStyle(panelsContainer).paddingLeft) || 0;
        scrollWidth = panelsContainer.offsetWidth - window.innerWidth + startPin;
    }

    // Initial calculation
    calculateScrollWidth();

    // Set the height of the pinning container
    horizontalSection.style.height = `${scrollWidth}px`;

    // Create the GSAP tween
    gsap.to(panelsContainer, {
        x: () => -scrollWidth,
        ease: "none",
        scrollTrigger: {
            trigger: horizontalSection,
            pin: true,

            // --- CHANGED FOR A TIGHTER FEEL ---
            scrub: 0.5, // Was 1, now 0.5s to "catch up"
            // ------------------------------------

            start: "top top",
            end: () => `+=${scrollWidth}`,
            invalidateOnRefresh: true,
            onRefresh: () => {
                // Recalculate on refresh
                calculateScrollWidth();
                horizontalSection.style.height = `${scrollWidth}px`;
            }
        }
    });

    // Recalculate on resize
    window.addEventListener('resize', () => {
        ScrollTrigger.refresh();
    });

});
