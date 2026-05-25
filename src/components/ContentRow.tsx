import { useState, useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ContentCard from '../ContentCard/ContentCard';
import { ContentItem } from '../../data/mockContent';
import { useReducedMotion } from '../../hooks';

interface ContentRowProps {
  title: string;
  items: ContentItem[];
  onPlay?: (item: ContentItem) => void;
  onMoreInfo?: (item: ContentItem) => void;
  index?: number;
}

export default function ContentRow({ title, items, onPlay, onMoreInfo, index = 0 }: ContentRowProps) {
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    loop: false,
    skipSnaps: true,
    containScroll: 'trimSnaps',
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const emblaApiRef = useRef<any>(null);
  const prefersReducedMotion = useReducedMotion();

  const updateScrollButtons = useCallback((emblaApi: any) => {
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    const emblaApi = emblaApiRef.current;
    if (!emblaApi) return;

    const handleSelect = () => {
      updateScrollButtons(emblaApi);
    };

    emblaApi.on('select', handleSelect);
    updateScrollButtons(emblaApi);

    return () => {
      emblaApi.off('select', handleSelect);
    };
  }, [updateScrollButtons]);

  const scrollPrev = useCallback(() => {
    const emblaApi = emblaApiRef.current;
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, []);

  const scrollNext = useCallback(() => {
    const emblaApi = emblaApiRef.current;
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollPrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollNext();
    }
  };

  // Animation variants
  const rowVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.5,
        delay: prefersReducedMotion ? 0 : index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.section
      className="relative mb-8 px-4 md:px-8 lg:px-12"
      variants={rowVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      onKeyDown={handleKeyDown}
      role="region"
      aria-label={`${title} category`}
    >
      {/* Title */}
      <motion.h2
        className="mb-4 font-semibold text-white text-lg md:text-xl hover:text-[#e50914] transition-colors cursor-pointer"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.h2>

      {/* Carousel Container */}
      <div className="relative group/row" role="list" aria-label={`${title} movies and shows`}>
        {/* Left Scroll Button */}
        <motion.button
          onClick={scrollPrev}
          className={`absolute left-0 top-0 bottom-6 z-20 flex items-center justify-center w-12 bg-black/60 text-white transition-all duration-300 hover:bg-black/80 ${
            canScrollPrev ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          aria-label={`Scroll ${title} left`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft size={28} aria-hidden="true" />
        </motion.button>

        {/* Scrollable Container */}
        <div
          className="overflow-hidden"
          ref={(node) => {
            if (node) {
              const emblaNode = node;
              // Initialize embla
              const embla = emblaRef({ root: emblaNode })?.[0];
              if (embla) {
                emblaApiRef.current = embla;
                updateScrollButtons(embla);
                embla.on('select', () => updateScrollButtons(embla));
              }
            }
          }}
          role="listbox"
          aria-label={`${title} content, use arrow keys to navigate`}
        >
          <div className="flex gap-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex-none"
                role="option"
                aria-selected={false}
              >
                <ContentCard
                  item={item}
                  onPlay={() => onPlay?.(item)}
                  onMoreInfo={() => onMoreInfo?.(item)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Scroll Button */}
        <motion.button
          onClick={scrollNext}
          className={`absolute right-0 top-0 bottom-6 z-20 flex items-center justify-center w-12 bg-black/60 text-white transition-all duration-300 hover:bg-black/80 ${
            canScrollNext ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          aria-label={`Scroll ${title} right`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight size={28} aria-hidden="true" />
        </motion.button>
      </div>
    </motion.section>
  );
}