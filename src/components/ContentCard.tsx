import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import { ContentItem } from '../../data/mockContent';

interface ContentCardProps {
  item: ContentItem;
  onPlay?: () => void;
  onMoreInfo?: () => void;
}

export default function ContentCard({ item, onPlay, onMoreInfo }: ContentCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onMoreInfo?.();
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="group relative shrink-0 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="article"
      aria-label={`${item.title}. ${item.year}. ${item.rating}. ${item.duration}. ${item.match}`}
      data-keyboard-nav-item
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.08 }}
      whileFocus={{ scale: 1.08 }}
      style={{ width: isHovered ? '340px' : '220px' }}
    >
      {/* Thumbnail */}
      <div
        className="relative overflow-hidden rounded-md bg-[#141414]"
        style={{ height: isHovered ? 'calc(340px * 0.5625)' : 'calc(220px * 0.5625)' }}
      >
        <motion.img
          src={item.thumbnail}
          alt={`Thumbnail for ${item.title}`}
          className="h-full w-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
          loading="lazy"
        />

        {/* Hover Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4"
            >
              {/* Title */}
              <motion.h3
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05 }}
                className="mb-1 font-semibold text-white text-sm md:text-base line-clamp-1"
              >
                {item.title}
              </motion.h3>

              {/* Meta */}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mb-2 flex flex-wrap items-center gap-1 text-xs text-gray-300"
              >
                <span className="text-green-500 font-medium">{item.match}</span>
                <span className="text-gray-500">•</span>
                <span>{item.year}</span>
                <span className="rounded border border-gray-600 px-1 text-[10px]">
                  {item.rating}
                </span>
                <span>{item.duration}</span>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="flex items-center gap-2"
              >
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    onPlay?.();
                  }}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/50 bg-black/40 text-white hover:border-white hover:bg-white/10 transition-colors focus-visible-ring"
                  aria-label={`Play ${item.title}`}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Play size={14} fill="currentColor" aria-hidden="true" />
                </motion.button>
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    // Add to list functionality
                  }}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/50 bg-black/40 text-white hover:border-white hover:bg-white/10 transition-colors focus-visible-ring"
                  aria-label="Add to my list"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Plus size={14} aria-hidden="true" />
                </motion.button>
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    // Like functionality
                  }}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/50 bg-black/40 text-white hover:border-white hover:bg-white/10 transition-colors focus-visible-ring"
                  aria-label="Like"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ThumbsUp size={14} aria-hidden="true" />
                </motion.button>
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    onMoreInfo?.();
                  }}
                  className="ml-auto flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/50 bg-black/40 text-white hover:border-white hover:bg-white/10 transition-colors focus-visible-ring"
                  aria-label={`More information about ${item.title}`}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronDown size={14} aria-hidden="true" />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* New Tag */}
        {!isHovered && item.newTag && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute left-2 top-2 bg-[#e50914] px-1.5 py-0.5 text-[10px] font-bold text-white badge-pulse"
          >
            {item.newTag}
          </motion.div>
        )}
      </div>

      {/* Title Below Card */}
      <motion.p
        className="mt-1 text-xs text-gray-400 line-clamp-1 group-hover:text-white transition-colors"
        animate={{ color: isHovered ? '#ffffff' : '#9ca3af' }}
      >
        {item.title}
      </motion.p>
    </motion.div>
  );
}