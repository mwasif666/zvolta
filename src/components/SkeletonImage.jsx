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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const image = imageRef.current;

    if (image?.complete) {
      setIsLoaded(true);
    }
  }, [imageProps.src]);

  const handleLoad = (event) => {
    setIsLoaded(true);
    onLoad?.(event);
  };

  const handleError = (event) => {
    setIsLoaded(true);
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
