        document.addEventListener('DOMContentLoaded', function () {

// Custom Cursor with Hover Effect and Mobile Hiding
    const cursor = document.getElementById('cursor');
    const cursorImg = document.getElementById('cursor-img');
    let mouseX = 0;
    let mouseY = 0;

    // Preload hover cursor image to ensure it loads
    const hoverCursor = new Image();
    hoverCursor.src = 'img/hover-cursor.png';
    hoverCursor.onload = () => {
      console.log('Hover cursor image preloaded successfully');
    };
    hoverCursor.onerror = () => {
      console.error('Failed to preload hover cursor image: img/hover-cursor.png');
    };

    // Check if the device is mobile (touch-enabled)
    const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isMobile) {
      cursor.classList.add('hidden');
      document.documentElement.style.cursor = 'auto'; // Restore default cursor
      console.log('Mobile device detected, custom cursor hidden');
    } else {
      // Ensure cursor is visible initially on non-mobile devices
      cursor.classList.remove('hidden');

      // Mouse movement
      document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
        cursor.style.display = 'block'; // Force visibility on movement
        cursor.classList.remove('hidden'); // Ensure cursor is visible while moving
      });

      // Use event delegation to handle hover on links
      document.addEventListener('mouseover', (e) => {
        if (e.target.tagName === 'A') {
          console.log('Hovering over link, switching to hover cursor');
          cursorImg.src = 'img/hover-cursor.png'; // Switch to hover cursor
        }
      });

      document.addEventListener('mouseout', (e) => {
        if (e.target.tagName === 'A') {
          console.log('Leaving link, reverting to default cursor');
          cursorImg.src = 'img/mouse-pointer-48.png'; // Revert to default cursor
        }
      });

      // Hide cursor when mouse leaves the page
      document.addEventListener('mouseleave', () => {
        cursor.classList.add('hidden');
      });

      // Show cursor when mouse re-enters the page
      document.addEventListener('mouseenter', (e) => {
        cursor.classList.remove('hidden');
        cursor.style.display = 'block'; // Force visibility on re-entry
        // Update position on re-entry to prevent jumping
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
      });
    }
   });
