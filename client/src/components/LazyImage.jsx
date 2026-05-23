import React, { useState, useEffect } from "react";
import "./LazyImage.css";

const LazyImage = ({ src, alt, className, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState("");

  useEffect(() => {
    setLoaded(false);
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
      setLoaded(true);
    };
  }, [src]);

  return (
    <div className={`lazy-image-wrapper ${loaded ? "loaded" : "loading"} ${className || ""}`}>
      {!loaded && <div className="lazy-image-skeleton" />}
      {currentSrc && (
        <img
          src={currentSrc}
          alt={alt}
          className={`lazy-image-el ${loaded ? "visible" : "hidden"}`}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;
