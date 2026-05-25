import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Plus, ThumbsUp, ChevronDown, Share } from 'lucide-react';
import { ContentItem, mockContent } from '../../data/mockContent';
import { useFocusTrap, useAnnounce } from '../../hooks';

interface ContentModalProps {
  item: ContentItem;
  onClose: () => void;
  onPlay?: () => void;
}

export default function ContentModal({ item, onClose, onPlay }: ContentModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const focusTrapRef = useFocusTrap(true);
  const { announce } = useAnnounce();

  const similarContent = mockContent
    .filter(c => c.id !== item.id && c.genre.some(g => item.genre.includes(g)))
    .slice(0, 6);

  useEffect(() => {
    // Announce modal open
    announce(`${item.title} details opened`);

    // Focus close button on open
    closeButtonRef.current?.focus();

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
      announce('Dialog closed');
    };
  }, [onClose, item.title, announce]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: { duration: 0.2 },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/80 p-4 pt-[5vh] md:pt-[10vh]"
        onClick={handleBackdropClick}
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        role="presentation"
      >
        <motion.div
          ref={focusTrapRef}
          className="relative w-full max-w-3xl rounded-lg bg-[#141414] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          {/* Close Button */}
          <motion.button
            ref={closeButtonRef}
            onClick={onClose}
            className="btn-primary absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full p-0"
            aria-label="Close dialog"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={18} aria-hidden="true" />
          </motion.button>

          {/* Hero Image with Video Preview */}
          <motion.div
            className="relative aspect-video overflow-hidden rounded-t-lg"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.img
              src={item.backdrop}
              alt={`Preview image for ${item.title}`}
              className="h-full w-full object-cover"
              variants={itemVariants}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />

            {/* Play Button Overlay */}
            <motion.button
              onClick={onPlay}
              className="btn-primary absolute bottom-4 left-4 flex items-center gap-2"
              aria-label={`Play ${item.title}`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={20} aria-hidden="true" />
              Play
            </motion.button>
          </motion.div>

          {/* Content Details */}
          <motion.div
            className="p-6 md:p-8"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Title & Meta */}
            <motion.div className="mb-4" variants={itemVariants}>
              <h2
                id="modal-title"
                className="font-['Bebas_Neue'] text-3xl font-bold text-white md:text-4xl"
              >
                {item.title}
              </h2>
              <div
                className="mt-2 flex flex-wrap items-center gap-2 text-sm text-gray-300"
                role="list"
                aria-label="Content information"
              >
                <motion.span
                  className="text-green-500 font-semibold"
                  variants={itemVariants}
                  role="listitem"
                >
                  {item.match}
                </motion.span>
                <motion.span role="listitem" variants={itemVariants}>
                  {item.year}
                </motion.span>
                <motion.span
                  className="rounded border border-gray-500 px-1 text-xs"
                  role="listitem"
                  variants={itemVariants}
                  aria-label={`Rating: ${item.rating}`}
                >
                  {item.rating}
                </motion.span>
                <motion.span role="listitem" variants={itemVariants}>
                  {item.duration}
                </motion.span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              id="modal-description"
              className="mb-6 text-sm leading-relaxed text-gray-200 md:text-base"
              variants={itemVariants}
            >
              {item.description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex items-center gap-3"
              variants={itemVariants}
              role="group"
              aria-label="Content actions"
            >
              <motion.button
                onClick={onPlay}
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/50 bg-black/40 text-white hover:border-white hover:bg-white/10 transition-colors focus-visible-ring"
                aria-label={`Play ${item.title}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Play size={20} fill="currentColor" aria-hidden="true" />
              </motion.button>
              <motion.button
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/50 bg-black/40 text-white hover:border-white hover:bg-white/10 transition-colors focus-visible-ring"
                aria-label="Add to my list"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Plus size={20} aria-hidden="true" />
              </motion.button>
              <motion.button
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/50 bg-black/40 text-white hover:border-white hover:bg-white/10 transition-colors focus-visible-ring"
                aria-label="Like this content"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ThumbsUp size={20} aria-hidden="true" />
              </motion.button>
              <motion.button
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/50 bg-black/40 text-white hover:border-white hover:bg-white/10 transition-colors focus-visible-ring ml-auto"
                aria-label="Share this content"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Share size={20} aria-hidden="true" />
              </motion.button>
              <motion.button
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/50 bg-black/40 text-white hover:border-white hover:bg-white/10 transition-colors focus-visible-ring"
                aria-label="More options"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronDown size={20} aria-hidden="true" />
              </motion.button>
            </motion.div>

            {/* Genre Tags */}
            <motion.div
              className="mt-6 flex flex-wrap items-center gap-2 text-sm"
              variants={itemVariants}
            >
              <span className="text-gray-400" id="genres-label">Genres:</span>
              <div className="flex flex-wrap gap-2" role="list" aria-labelledby="genres-label">
                {item.genre.map((g) => (
                  <motion.button
                    key={g}
                    className="rounded-full border border-gray-600 px-3 py-1 text-gray-300 hover:border-white hover:text-white transition-colors focus-visible-ring"
                    role="listitem"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {g}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Similar Content */}
            {similarContent.length > 0 && (
              <motion.div className="mt-8" variants={itemVariants}>
                <h3 className="mb-4 text-lg font-semibold text-white">
                  More Like {item.title}
                </h3>
                <div
                  className="grid grid-cols-2 gap-3 md:grid-cols-3"
                  role="list"
                  aria-label="Similar content recommendations"
                >
                  {similarContent.map((c, index) => (
                    <motion.div
                      key={c.id}
                      className="group relative aspect-video cursor-pointer overflow-hidden rounded-md bg-[#0a0a0a] focus-visible-ring"
                      role="listitem"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      tabIndex={0}
                      aria-label={`${c.title}. ${c.year}. ${c.rating}.`}
                    >
                      <img
                        src={c.thumbnail}
                        alt={`Thumbnail for ${c.title}`}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity" />
                      <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity">
                        <p className="text-xs font-medium text-white line-clamp-1">{c.title}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}