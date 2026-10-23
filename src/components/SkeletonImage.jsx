import { useEffect, useRef, useState } from "react";
import "./SkeletonImage.css";

export function SkeletonImage({
  className = "",
  onLoad,
  onError,
  showSkeleton = true,
  skeletonTone = "light",
  ...imageProps
}) {
  const imageRef = useRef(null);
  const [settledSrc, setSettledSrc] = useState(null);
  const isLoaded = settledSrc === imageProps.src;

  useEffect(() => {
    const image = imageRef.current;

    if (image?.complete) {
      setSettledSrc(imageProps.src);
    }
  }, [imageProps.src]);

  const handleLoad = (event) => {
    setSettledSrc(imageProps.src);
    onLoad?.(event);
  };

  const handleError = (event) => {
    setSettledSrc(imageProps.src);
    onError?.(event);
  };

  return (
    <>
      {showSkeleton && !isLoaded && (
        <span
          className={`placeholder image-skeleton-overlay image-skeleton-overlay--${skeletonTone}`}
          role="status"
          aria-label="Loading image"
        />
      )}
      <img
        {...imageProps}
        ref={imageRef}
        className={`${className} image-skeleton-target ${isLoaded ? "is-loaded" : ""}`.trim()}
        onLoad={handleLoad}
        onError={handleError}
      />
    </>
  );
}
