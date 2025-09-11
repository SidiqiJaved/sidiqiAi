import React, { useState, useRef, useEffect } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  lazy?: boolean;
  priority?: boolean;
  width?: number;
  height?: number;
}

export function ImageWithFallback({
  src,
  alt,
  lazy = true,
  priority = false,
  width,
  height,
  className,
  style,
  ...rest
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [inView, setInView] = useState(!lazy || priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || priority || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [lazy, priority, inView]);

  const handleError = () => {
    setDidError(true);
    setIsLoaded(true);
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  if (didError) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
        style={style}
        role="img"
        aria-label={`Failed to load image: ${alt}`}
      >
        <div className="flex items-center justify-center w-full h-full">
          <img 
            src={ERROR_IMG_SRC} 
            alt={`Error loading: ${alt}`} 
            width={width} 
            height={height}
            {...rest} 
            data-original-url={src}
            loading="eager"
          />
        </div>
      </div>
    );
  }

  return (
    <div ref={imgRef} className="relative">
      {inView && (
        <>
          {/* Low quality placeholder while loading */}
          {!isLoaded && (
            <div
              className={`absolute inset-0 bg-gray-200 animate-pulse ${className ?? ''}`}
              style={style}
              aria-hidden="true"
            />
          )}
          
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`${className ?? ''} ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-300`}
            style={style}
            onError={handleError}
            onLoad={handleLoad}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            {...rest}
          />
        </>
      )}
    </div>
  );
}
