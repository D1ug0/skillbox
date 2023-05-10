import React from "react";

type ImageProps = {
  png?: string;
  webp?: string;
  jpg?: string;
  alt?: string;
  className?: string;
  width?: string;
  height?: string;
  style?: React.CSSProperties;
};

export const Image: React.FC<ImageProps> = ({
  webp,
  png,
  jpg,
  alt,
  className,
  width,
  height,
  style,
}) => {
  return (
    <picture>
      {webp && <source srcSet={webp} type="image/webp" />}
      {png && <source srcSet={png} type="image/png" />}
      {jpg && <source srcSet={jpg} type="image/jpeg" />}
      <img
        src={webp || png || jpg}
        alt={alt}
        className={className}
        style={{ width, height, ...style }}
      />
    </picture>
  );
};
