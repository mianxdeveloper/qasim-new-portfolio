import { useEffect, useRef } from 'react';

export function ScrollSpeed() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInView) {
          // Apply scroll speed multiplier
          const scrollSpeed = 1.05;
          document.documentElement.style.scrollBehavior = 'auto';
          
          // This creates a faster scroll effect
          requestAnimationFrame(() => {
            window.scrollBy(0, window.scrollY * (scrollSpeed - 1) * 0.01);
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="h-1 w-full" data-scroll-speed="1.05"></div>
  );
}
