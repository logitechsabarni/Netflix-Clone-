import { useEffect } from 'react';

/**
 * Hook to detect if user prefers reduced motion
 * Returns true if user has requested reduced motion
 */
export function useReducedMotion(): boolean {
  const prefersReducedMotion = (): boolean => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  };

  // In SSR or during initial hydration, assume no preference
  if (typeof window === 'undefined') return false;

  return prefersReducedMotion();
}

export default useReducedMotion;