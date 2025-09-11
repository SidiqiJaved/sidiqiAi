import { ComponentProps } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface OptimizedImageProps extends Omit<ComponentProps<typeof ImageWithFallback>, 'src'> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  sizes,
  ...props
}: OptimizedImageProps) {
  // Generate srcset for responsive images if dimensions are provided
  const generateSrcSet = (baseSrc: string, baseWidth?: number) => {
    if (!baseWidth) return undefined;
    
    const breakpoints = [0.5, 1, 1.5, 2];
    return breakpoints
      .map((multiplier) => {
        const scaledWidth = Math.round(baseWidth * multiplier);
        // In a real app, you'd have a service that generates these scaled images
        return `${baseSrc}?w=${scaledWidth} ${scaledWidth}w`;
      })
      .join(', ');
  };

  return (
    <ImageWithFallback
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      srcSet={generateSrcSet(src, width)}
      sizes={sizes || (width ? `(max-width: ${width}px) 100vw, ${width}px` : undefined)}
      {...props}
    />
  );
}

// SEO-optimized avatar component
export function ProfileImage({ 
  size = 64, 
  className = "",
  priority = false 
}: { 
  size?: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <OptimizedImage
      src="/javed-sidiqi.jpg"
      alt="Javed Sidiqi - Builder, Innovator, Entrepreneur"
      width={size}
      height={size}
      priority={priority}
      className={`rounded-full ${className}`}
      sizes={`${size}px`}
    />
  );
}
