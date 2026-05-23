import { useState, useEffect, useRef } from 'react';
import { cn } from '../../utils/cn';

export function LazyImage({ src, alt, className, ...props }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {!loaded && !error && (
        <div className="absolute inset-0 bg-surface animate-pulse" aria-hidden />
      )}
      {error ? (
        <div
          className="absolute inset-0 flex items-center justify-center bg-surface text-white/30 text-sm"
          role="img"
          aria-label={alt}
        >
          Image unavailable
        </div>
      ) : (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={cn(
            'w-full h-full object-cover transition-opacity duration-500',
            loaded ? 'opacity-100' : 'opacity-0'
          )}
          {...props}
        />
      )}
    </div>
  );
}
