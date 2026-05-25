import { useCallback, useEffect, useRef } from 'react';

interface KeyboardNavigationOptions {
  orientation?: 'horizontal' | 'vertical';
  loop?: boolean;
  onSelect?: (index: number) => void;
  onEscape?: () => void;
  onHome?: () => void;
  onEnd?: () => void;
}

/**
 * Hook for keyboard navigation in carousels and grids
 * Supports arrow keys, home, end, and escape
 */
export function useKeyboardNavigation<T extends HTMLElement>(
  itemCount: number,
  options: KeyboardNavigationOptions = {}
) {
  const {
    orientation = 'horizontal',
    loop = true,
    onSelect,
    onEscape,
    onHome,
    onEnd,
  } = options;

  const containerRef = useRef<T>(null);
  const currentIndexRef = useRef(0);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const isHorizontal = orientation === 'horizontal';
      const prevKey = isHorizontal ? 'ArrowLeft' : 'ArrowUp';
      const nextKey = isHorizontal ? 'ArrowRight' : 'ArrowDown';

      switch (e.key) {
        case prevKey: {
          e.preventDefault();
          if (loop) {
            currentIndexRef.current =
              currentIndexRef.current > 0
                ? currentIndexRef.current - 1
                : itemCount - 1;
          } else {
            currentIndexRef.current = Math.max(0, currentIndexRef.current - 1);
          }
          // Focus the item
          focusItem(currentIndexRef.current);
          break;
        }
        case nextKey: {
          e.preventDefault();
          if (loop) {
            currentIndexRef.current =
              currentIndexRef.current < itemCount - 1
                ? currentIndexRef.current + 1
                : 0;
          } else {
            currentIndexRef.current = Math.min(itemCount - 1, currentIndexRef.current + 1);
          }
          // Focus the item
          focusItem(currentIndexRef.current);
          break;
        }
        case 'Home': {
          e.preventDefault();
          currentIndexRef.current = 0;
          focusItem(0);
          onHome?.();
          break;
        }
        case 'End': {
          e.preventDefault();
          currentIndexRef.current = itemCount - 1;
          focusItem(itemCount - 1);
          onEnd?.();
          break;
        }
        case 'Escape': {
          e.preventDefault();
          onEscape?.();
          break;
        }
        case 'Enter':
        case ' ': {
          e.preventDefault();
          onSelect?.(currentIndexRef.current);
          break;
        }
      }
    },
    [itemCount, loop, orientation, onSelect, onEscape, onHome, onEnd]
  );

  const focusItem = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll<HTMLElement>(
      '[data-keyboard-nav-item]'
    );
    const targetItem = items[index];
    if (targetItem) {
      targetItem.focus();
      // Scroll item into view if needed
      targetItem.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest',
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('keydown', handleKeyDown as EventListener);
    return () => {
      container.removeEventListener('keydown', handleKeyDown as EventListener);
    };
  }, [handleKeyDown]);

  return { containerRef, setCurrentIndex: (index: number) => { currentIndexRef.current = index; } };
}

export default useKeyboardNavigation;