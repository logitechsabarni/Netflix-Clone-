import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Info } from 'lucide-react';
import { ContentItem } from '../../data/mockContent';

interface HeroProps {
  featured: ContentItem;
  onPlay?: () => void;
  onMoreInfo?: () => void;
}

export default function Hero({ featured, onPlay, onMoreInfo }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative h-[56.25vw] min-h-[500px] max-h-[900px] overflow-hidden"
      aria-label={`Featured: ${featured.title}`}
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y }}
      >
        <img
          src={featured.backdrop}
          alt=""
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/20 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-[15%] left-4 md:left-8 lg:left-12 max-w-xl md:max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Match & Tags */}
        <motion.div
          className="mb-2 flex items-center gap-2 text-sm md:text-base"
          variants={itemVariants}
        >
          {featured.match && (
            <span className="text-green-500 font-semibold" aria-label={`Match: ${featured.match}`}>
              {featured.match}
            </span>
          )}
          {featured.newTag && (
            <span
              className="bg-[#e50914] px-2 py-0.5 text-xs font-bold text-white"
              aria-label="New release"
            >
              {featured.newTag}
            </span>
          )}
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="mb-2 font-['Bebas_Neue'] text-4xl font-bold tracking-wide text-white md:text-6xl lg:text-7xl"
          aria-label={`Title: ${featured.title}`}
        >
          {featured.title}
        </motion.h2>

        {/* Meta Info */}
        <motion.div
          variants={itemVariants}
          className="mb-3 flex flex-wrap items-center gap-2 text-xs text-gray-300 md:text-sm"
          role="list"
          aria-label="Content information"
        >
          <span className="text-green-500 font-semibold">{featured.match}</span>
          <span aria-label={`Year: ${featured.year}`}>{featured.year}</span>
          <span
            className="rounded border border-gray-500 px-1 text-[10px] md:text-xs"
            aria-label={`Rating: ${featured.rating}`}
          >
            {featured.rating}
          </span>
          <span aria-label={`Duration: ${featured.duration}`}>{featured.duration}</span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mb-6 hidden text-sm leading-relaxed text-gray-200 md:text-base lg:block lg:max-w-lg"
          aria-live="polite"
        >
          {featured.description}
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex items-center gap-3"
          variants={itemVariants}
        >
          <motion.button
            onClick={onPlay}
            className="btn-primary flex items-center gap-2"
            aria-label={`Play ${featured.title}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play size={20} aria-hidden="true" />
            Play
          </motion.button>
          <motion.button
            onClick={onMoreInfo}
            className="btn-secondary flex items-center gap-2"
            aria-label={`More information about ${featured.title}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Info size={20} aria-hidden="true" />
            More Info
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}