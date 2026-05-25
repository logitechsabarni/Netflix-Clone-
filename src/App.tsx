import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ContentRow from './components/ContentRow/ContentRow';
import ContentModal from './components/ContentModal/ContentModal';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Footer from './components/Footer/Footer';
import { categories, getContentByCategory, getFeaturedContent, ContentItem } from './data/mockContent';

function App() {
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

  const featuredContent = getFeaturedContent();

  const handlePlay = (item: ContentItem) => {
    setSelectedItem(item);
    setShowPlayer(true);
  };

  const handleMoreInfo = (item: ContentItem) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleHome = () => {
    setSelectedItem(null);
    setShowModal(false);
    setShowPlayer(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar onHome={handleHome} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          featured={featuredContent}
          onPlay={() => handlePlay(featuredContent)}
          onMoreInfo={() => handleMoreInfo(featuredContent)}
        />

        {/* Content Rows */}
        <div className="relative -mt-32 pb-8 z-10">
          {categories.map((category) => (
            <ContentRow
              key={category.id}
              title={category.name}
              items={getContentByCategory(category.id)}
              onPlay={handlePlay}
              onMoreInfo={handleMoreInfo}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Content Modal */}
      {showModal && selectedItem && (
        <ContentModal
          item={selectedItem}
          onClose={() => {
            setShowModal(false);
            setSelectedItem(null);
          }}
          onPlay={() => {
            setShowModal(false);
            setShowPlayer(true);
          }}
        />
      )}

      {/* Video Player */}
      {showPlayer && selectedItem && (
        <VideoPlayer
          title={selectedItem.title}
          onBack={() => {
            setShowPlayer(false);
            setSelectedItem(null);
          }}
        />
      )}
    </div>
  );
}

export default App;