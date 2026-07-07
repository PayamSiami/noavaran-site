'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const isMounted = useRef(true);

  // ✅ Use useCallback with a ref to track mounted state
  const updateProgress = useCallback(() => {
    if (!isMounted.current) return;
    
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
    setProgress(Math.min(Math.max(scrollPercent, 0), 1));
  }, []);

  useEffect(() => {
    // Set mounted flag
    isMounted.current = true;

    // ✅ Use requestAnimationFrame for initial calculation
    const rafId = requestAnimationFrame(() => {
      updateProgress();
    });

    // Add event listeners with passive option
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });

    // Cleanup
    return () => {
      isMounted.current = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, [updateProgress]);

  return progress;
};