# Netflux Clone - Enhanced Specification

## 1. Project Overview

**Project Name:** Netflux
**Type:** Streaming Platform Clone (Video Streaming UI)
**Core Functionality:** A cinematic streaming platform with movie/show browsing, category carousels, hero featured content, and immersive video player experience
**Target Users:** Movie enthusiasts, binge-watchers, casual viewers, accessibility-conscious users

## 2. Visual & Rendering Specification

### Color Palette
- **Primary Background:** Deep black `#0a0a0a`
- **Secondary Background:** Dark charcoal `#141414`
- **Accent:** Signature red `#e50914`
- **Accent Hover:** Brighter red `#f40612`
- **Text Primary:** White `#ffffff`
- **Text Secondary:** Light gray `#b3b3b3`
- **Hover Overlay:** Semi-transparent black `rgba(0, 0, 0, 0.4)`
- **Focus Ring:** White `#ffffff` with 2px offset
- **Card Border Highlight:** Red gradient on hover

### Typography
- **Primary Font:** "Bebas Neue" for branding, "Inter" for body text
- **Logo:** Bold, red, slightly italicized
- **Headings:** Large, bold, uppercase for categories
- **Body:** Clean, readable at various sizes

### Visual Style
- **Theme:** Dark, cinematic, immersive
- **Shadows:** Subtle, focused on cards and modals
- **Gradients:** Vertical dark gradients for hero overlays
- **Animations:** Smooth hover effects, scale transforms, fade transitions
- **Corners:** Slightly rounded for cards (8px), sharp for hero (0px)

## 3. Animation Specification

### Framer Motion Animations

#### Page Load Animations
- **Staggered Content Rows:** Each row fades in sequentially with 0.1s delay
- **Hero Content:** Fade up animation with 0.5s duration, ease-out
- **Navbar:** Slide down from top on initial load

#### Scroll Animations
- **Content Rows:** Fade in when entering viewport (20% threshold)
- **Cards:** Subtle scale animation (1.0 → 1.02) on intersection
- **Parallax Effect:** Hero background moves at 0.5x scroll speed

#### Hover Animations
- **Content Card:**
  - Scale: 1.0 → 1.08 (300ms spring)
  - Z-index elevation
  - Box shadow expansion
  - Info overlay slides up from bottom
- **Navbar Buttons:** Underline grows from left (200ms)
- **Action Buttons:** Background color transition with subtle scale

#### Modal Animations
- **Enter:** Backdrop fades in (200ms), modal scales from 0.95 → 1.0 with opacity 0 → 1 (300ms spring)
- **Exit:** Reverse of enter with 200ms duration
- **Content:** Staggered fade-in for children elements

#### Video Player Animations
- **Controls:** Fade in/out with 200ms duration
- **Progress Bar:** Smooth thumb movement
- **Volume Slider:** Expand/collapse animation

### CSS Animations
- **Glow Effect:** Subtle red glow on featured items
- **Pulse Animation:** "New" badge with subtle pulse
- **Loading Skeleton:** Shimmer effect

## 4. Accessibility Specification

### Keyboard Navigation
- **Tab Order:** Logical flow through all interactive elements
- **Arrow Keys:**
  - Left/Right: Navigate between cards in a row
  - Up/Down: Navigate between rows
  - Enter/Space: Activate buttons
  - Escape: Close modals/player
- **Home/End:** Jump to first/last card in row
- **Skip Link:** "Skip to main content" at page top

### Focus Management
- **Focus Visible:** 2px white outline with 2px offset
- **Focus Trap:** In modals and player
- **Focus Restoration:** Return focus to trigger element on modal close

### ARIA Implementation
- **Roles:** banner, navigation, main, region, dialog, button, listbox
- **Labels:** All interactive elements have accessible names
- **Descriptions:** Complex widgets have aria-describedby
- **Live Regions:** Announce dynamic content changes

### Screen Reader Support
- **Alt Text:** Descriptive alt for all images
- **Announcements:** "Now playing", "Showing X of Y results"
- **Progress:** aria-valuenow for video player

### Motion Sensitivity
- **Reduced Motion:** Respect prefers-reduced-motion
- **Alternative Animations:** Instant transitions when reduced motion preferred

### Color Contrast
- **Text on Background:** Minimum 4.5:1 ratio
- **Large Text:** Minimum 3:1 ratio
- **Interactive Elements:** Minimum 3:1 against background

## 5. Layout Specification

### Page Structure

#### Home Page
1. **Navigation Bar** (fixed, transparent → solid on scroll)
   - Logo (left)
   - Navigation links with focus states
   - Genre dropdown with keyboard support
   - Search with aria-expanded
   - User profile avatar

2. **Hero Section** (60vh height)
   - Featured movie/show backdrop with parallax
   - Large title with gradient overlay
   - Description with aria-live for dynamic updates
   - "Play" button (red) with loading state
   - "More Info" button (semi-transparent)

3. **Content Rows** (scrollable carousels)
   - Category rows with horizontal scrolling cards
   - Arrow navigation buttons (visible on focus/hover)
   - Row titles with proper heading hierarchy
   - Cards with full keyboard navigation

4. **Footer**
   - Links with proper focus states
   - Social icons with aria-labels

#### Movie Detail Modal
- Full-screen overlay with role="dialog"
- Focus trap implementation
- Video preview with controls
- Title, year, rating, duration with semantic markup
- Synopsis with proper paragraph structure
- Genre tags as linked elements
- Similar recommendations grid
- Close button with aria-label="Close"

#### Video Player Page
- Full viewport player
- Custom controls with keyboard shortcuts
- Progress bar with aria-valuenow
- Volume control with aria-valuemin/max
- Fullscreen toggle
- Back button with focus management
- Keyboard shortcuts overlay (?)

## 6. Interaction Specification

### Keyboard Controls
- **Space/Enter:** Play/Pause
- **M:** Mute/Unmute
- **F:** Fullscreen toggle
- **Arrow Left/Right:** Seek -10s/+10s
- **Arrow Up/Down:** Volume +/-10%
- **0-9:** Seek to 0%-90%
- **Escape:** Exit fullscreen or close player

### Touch Interactions
- **Swipe:** Navigate between cards
- **Tap:** Select card or toggle play
- **Double Tap:** Zoom/unzoom on player
- **Pinch:** Zoom on player

### Mouse Interactions
- **Hover:** Reveal info overlay
- **Click:** Select item
- **Double Click:** Enter fullscreen on player
- **Right Click:** Context menu (disabled on player)

## 7. Content Data

### Mock Data Categories
1. **Trending Now** - Currently popular content
2. **Netflux Originals** - Platform exclusives
3. **Action & Adventure** - Genre-specific
4. **Comedies** - Humor content
5. **Drama** - Serious storytelling
6. **Horror** - Thriller content
7. **Documentaries** - Real-world stories
8. **Sci-Fi & Fantasy** - Imaginative worlds

### Content Card Data Structure
```typescript
interface ContentItem {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  backdrop: string;
  year: number;
  rating: string;
  duration: string;
  genre: string[];
  match?: string;
  newTag?: string;
}
```

## 8. Technical Implementation

### Dependencies
- React 18.3 + TypeScript
- Tailwind CSS 3.4
- Framer Motion 11.x for animations
- Lucide React icons
- Embla Carousel for smooth scrolling rows

### Component Architecture
```
src/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── ContentRow/
│   ├── ContentCard/
│   ├── ContentModal/
│   ├── VideoPlayer/
│   └── Footer/
├── hooks/
│   ├── useKeyboardNavigation.ts
│   ├── useFocusTrap.ts
│   ├── useReducedMotion.ts
│   └── useAnnounce.ts
├── data/
│   └── mockContent.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 9. Acceptance Criteria

### Visual Fidelity
- [x] Dark cinematic theme applied throughout
- [x] Red accent color used for primary actions
- [x] Smooth hover transitions on all interactive elements
- [x] Proper gradient overlays on hero section
- [x] Staggered entrance animations for content rows
- [x] Smooth parallax effect on hero

### Functionality
- [x] Horizontal scrolling carousels work smoothly
- [x] Cards expand and show info on hover
- [x] Modal opens/closes with animations
- [x] Video player shows custom controls
- [x] Navigation highlights active section
- [x] Full keyboard navigation support

### Accessibility
- [x] All interactive elements are keyboard accessible
- [x] Focus states are clearly visible
- [x] ARIA labels and roles properly implemented
- [x] Screen reader announcements work
- [x] Reduced motion is respected
- [x] Color contrast meets WCAG AA standards

### Performance
- [x] No layout shifts during interactions
- [x] Smooth 60fps animations
- [x] Lazy loading for off-screen content
- [x] Optimized re-renders with proper memoization

### Responsiveness
- [x] Works on desktop (1200px+)
- [x] Tablet support (768px-1199px)
- [x] Mobile layout adjustments (320px-767px)