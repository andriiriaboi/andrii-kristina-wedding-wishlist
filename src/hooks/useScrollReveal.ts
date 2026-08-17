import { useEffect, useRef } from 'react';

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.classList.add('is-revealed');
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('is-revealed');
        observer.disconnect();
      }
    }, { threshold: 0.14 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return ref;
}
