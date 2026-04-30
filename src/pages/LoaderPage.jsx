export default function LoaderPage() {
  return (
    <>
      <style data-page-style="loader:1">{`/* Loader Background */
#orion-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0a0a0f; /* Dark grey */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
  transition: opacity 0.8s ease, visibility 0.8s ease;
}

/* Logo Container */
.orion-loader-logo {
  position: relative;
  width: 120px;
  height: 120px;
  max-width: 80vw;
  overflow: hidden;
}

/* Logo Image */
.orion-loader-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0.7; /* Light grey */
  pointer-events: none;
  user-select: none;
}



/* Shine Animation */
@keyframes shine {
  0% {
    left: -75%;
  }
  100% {
    left: 125%;
  }
}

/* Hide Loader After Page Load */
#orion-loader.hidden {
  opacity: 0;
  visibility: hidden;
}

/* Main Content Hidden During Load */
body.loading #main-content {
  opacity: 0;
  pointer-events: none;
}

body.loaded #main-content {
  opacity: 1;
  pointer-events: auto;
  transition: opacity 0.8s ease;
}`}</style>
      <div id="orion-loader">
        <div className="orion-loader-logo">
          <img src="img/zvolta-loader.gif" alt="Loading..." draggable="false" />
        </div>
      </div>
    </>
  );
}
