import { useCallback, useRef, useEffect } from 'react';

/**
 * Hook to trap focus within a container
 * Essential for modals and dialogs for accessibility
 */
export function useFocusTrap(isActive: boolean) {
  const containerRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Store the previously focused element
  useEffect(() => {
    if (isActive) {
      previousActiveElement.current = document.activeElement as HTMLElement;
    }
  }, [isActive]);

  // Set up focus trap
  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const focusableElements = container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Focus the first element or the container
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);

    // Focus first element
    firstElement?.focus();

    return () => {
      container.removeEventListener('keydown', handleKeyDown);
      // Restore focus when trap is deactivated
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [isActive]);

  return containerRef;
}

export default useFocusTrap;