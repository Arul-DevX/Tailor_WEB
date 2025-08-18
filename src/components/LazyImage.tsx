import React from 'react';
import { useLazyImage } from '../hooks/useLazyImage';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export default function LazyImage({ src, alt, className, ...props }: LazyImageProps) {
  const imgRef = useLazyImage();

  return (
    <img
      ref={imgRef}
      data-src={src}
      alt={alt}
      className={`opacity-0 transition-opacity duration-300 ${className}`}
      onLoad={(e) => {
        (e.target as HTMLImageElement).classList.remove('opacity-0');
      }}
      {...props}
    />
  );
}