import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bell, ChevronDown, X, Play } from 'lucide-react';
import { genreList } from '../../data/mockContent';

interface NavbarProps {
  onSearch?: (query: string) => void;
  onSelectGenre?: (genre: string) => void;
  onHome?: () => void;
}

export default function Navbar({ onSearch, onSelectGenre, onHome }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showGenreDropdown, setShowGenreDropdown] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch?.(searchQuery);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setShowSearch(false);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'TV Shows', href: '#' },
    { label: 'Movies', href: '#' },
    { label: 'New & Popular', href: '#' },
    { label: 'My List', href: '#' },
  ];

  return (
    <>
      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="skip-link focus:translate-y-0"
      >
        Skip to main content
      </a>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a0a] shadow-lg'
            : 'bg-gradient-to-b from-black/80 to-transparent'
        }`}
        role="banner"
      >
        <div className="mx-auto max-w-[1920px] px-4 md:px-8 lg:px-12">
          <div className="flex h-16 items-center justify-between">
            {/* Logo & Nav Links */}
            <div className="flex items-center gap-6 md:gap-8">
              <motion.h1
                onClick={onHome}
                className="cursor-pointer font-['Bebas_Neue'] text-3xl font-bold tracking-tight text-[#e50914] md:text-4xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                role="heading"
                aria-level={1}
              >
                NETFLUX
              </motion.h1>

              <nav className="hidden items-center gap-4 text-sm text-gray-300 lg:flex" role="navigation" aria-label="Main navigation">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="nav-link focus-visible-ring px-2 py-1"
                    whileHover={{ color: '#ffffff' }}
                    whileFocus={{ color: '#ffffff' }}
                    tabIndex={0}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <AnimatePresence mode="wait">
                {showSearch ? (
                  <motion.form
                    key="search-form"
                    initial={{ opacity: 0, width: 40 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 40 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={handleSearchSubmit}
                    className="flex items-center"
                    role="search"
                  >
                    <label htmlFor="search-input" className="sr-only">
                      Search titles
                    </label>
                    <input
                      id="search-input"
                      ref={searchInputRef}
                      type="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Titles, people, genres"
                      className="w-40 bg-black/40 border border-white/30 px-3 py-1 text-sm text-white placeholder-gray-500 focus:border-[#e50914] focus:outline-none focus:ring-2 focus:ring-[#e50914] md:w-64"
                      aria-label="Search for titles"
                    />
                    <motion.button
                      type="button"
                      onClick={() => {
                        setShowSearch(false);
                        setSearchQuery('');
                      }}
                      className="ml-2 p-2 text-gray-400 hover:text-white focus-visible-ring rounded"
                      aria-label="Close search"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X size={18} />
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.button
                    key="search-button"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setShowSearch(true)}
                    className="p-2 text-gray-300 hover:text-white transition-colors focus-visible-ring rounded"
                    aria-label="Open search"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Search size={20} aria-hidden="true" />
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Genre Dropdown */}
              <div className="relative hidden md:block">
                <motion.button
                  onClick={() => setShowGenreDropdown(!showGenreDropdown)}
                  className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors focus-visible-ring px-2 py-1 rounded"
                  aria-expanded={showGenreDropdown}
                  aria-haspopup="listbox"
                  aria-label="Select genre"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Genre
                  <motion.span
                    animate={{ rotate: showGenreDropdown ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={16} aria-hidden="true" />
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {showGenreDropdown && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setShowGenreDropdown(false)}
                        onKeyDown={(e) => e.key === 'Escape' && setShowGenreDropdown(false)}
                        role="button"
                        tabIndex={-1}
                        aria-label="Close genre dropdown"
                      />
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 top-full mt-2 w-48 bg-[#141414] border border-white/10 shadow-xl z-20 rounded-md overflow-hidden"
                        role="listbox"
                        aria-label="Genre options"
                      >
                        <div className="max-h-80 overflow-y-auto p-2">
                          {genreList.map((genre, index) => (
                            <motion.button
                              key={genre}
                              onClick={() => {
                                onSelectGenre?.(genre);
                                setShowGenreDropdown(false);
                              }}
                              className="block w-full px-3 py-2 text-left text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors rounded focus-visible-ring"
                              role="option"
                              aria-selected={false}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.02 }}
                              whileFocus={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                            >
                              {genre}
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* Notifications */}
              <motion.button
                className="p-2 text-gray-300 hover:text-white transition-colors focus-visible-ring rounded"
                aria-label="Notifications"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Bell size={20} aria-hidden="true" />
              </motion.button>

              {/* Profile */}
              <div className="flex items-center gap-2">
                <motion.div
                  className="h-8 w-8 overflow-hidden rounded cursor-pointer focus-visible-ring"
                  whileHover={{ scale: 1.1 }}
                  whileFocus={{ scale: 1.1, ring: 2, ringColor: 'white' }}
                  role="button"
                  tabIndex={0}
                  aria-label="User profile menu"
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
                    alt="User profile"
                    className="h-full w-full object-cover"
                  />
                </motion.div>
                <motion.div
                  animate={{ rotate: showGenreDropdown ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={16} className="hidden text-gray-300 md:block" aria-hidden="true" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}