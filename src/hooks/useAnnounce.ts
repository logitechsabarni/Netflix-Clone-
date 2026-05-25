import { useCallback } from 'react';

/**
 * Hook to announce messages to screen readers using aria-live regions
 */
export function useAnnounce() {
  const announce = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    // Find or create the announcer element
    let announcer = document.getElementById(`a11y-announcer-${priority}`);

    if (!announcer) {
      announcer = document.createElement('div');
      announcer.id = `a11y-announcer-${priority}`;
      announcer.setAttribute('aria-live', priority);
      announcer.setAttribute('aria-atomic', 'true');
      announcer.className = 'sr-only';
      announcer.style.cssText = `
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      `;
      document.body.appendChild(announcer);
    }

    // Clear and set message with slight delay to ensure announcement
    announcer.textContent = '';
    setTimeout(() => {
      announcer!.textContent = message;
    }, 100);
  }, []);

  return { announce };
}

export default useAnnounce;