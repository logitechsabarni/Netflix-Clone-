export interface ContentItem {
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

export const mockContent: ContentItem[] = [
  // Trending Now
  {
    id: 1,
    title: "Cyber Dawn",
    description: "In a post-apocalyptic world, a rogue hacker discovers a conspiracy that could reset humanity's memory. With neural implants and quantum tech, she races against megacorporations to preserve human consciousness before it's overwritten.",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&h=1080&fit=crop",
    year: 2024,
    rating: "TV-MA",
    duration: "2h 18m",
    genre: ["Sci-Fi", "Thriller", "Action"],
    match: "97% Match",
    newTag: "New"
  },
  {
    id: 2,
    title: "Midnight Protocol",
    description: "A disgraced intelligence agent uncovers a network of moles embedded in global governments. To expose them, she must trust her enemies and betray her allies in this high-stakes espionage thriller.",
    thumbnail: "https://images.unsplash.com/photo-1485846224035-5424f0f3a6eb?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1485846224035-5424f0f3a6eb?w=1920&h=1080&fit=crop",
    year: 2024,
    rating: "TV-MA",
    duration: "1h 52m",
    genre: ["Thriller", "Spy", "Drama"],
    match: "94% Match"
  },
  {
    id: 3,
    title: "Neon Shadows",
    description: "In the rain-soaked streets of Neo-Shanghai, a street racer with a haunted past becomes entangled with a crime syndicate. When a heist goes wrong, she must outrun both the cops and the killers.",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&h=1080&fit=crop",
    year: 2023,
    rating: "TV-MA",
    duration: "2h 05m",
    genre: ["Action", "Crime", "Drama"],
    match: "91% Match",
    newTag: "New"
  },
  {
    id: 4,
    title: "The Last Frontier",
    description: "A survivalist family refuses to join a government-rationed society. When their isolation is threatened, they must defend their way of life while uncovering the truth behind the new world order.",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop",
    year: 2024,
    rating: "TV-MA",
    duration: "1h 48m",
    genre: ["Thriller", "Drama", "Sci-Fi"],
    match: "89% Match"
  },
  {
    id: 5,
    title: "Echoes of Tomorrow",
    description: "A physicist discovers that her experiments are causing parallel universes to collapse into each other. As reality fractures, she must fix the timeline before her own existence becomes impossible.",
    thumbnail: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&h=1080&fit=crop",
    year: 2024,
    rating: "TV-MA",
    duration: "2h 22m",
    genre: ["Sci-Fi", "Mystery", "Drama"],
    match: "96% Match"
  },
  {
    id: 6,
    title: "Crimson Tide",
    description: "On the eve of a global naval exercise, a submarine captain receives orders that conflict with his moral code. The crew must choose between duty and conscience as the torpedoes lock on target.",
    thumbnail: "https://images.unsplash.com/photo-1547234935-80c7145ec969?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1547234935-80c7145ec969?w=1920&h=1080&fit=crop",
    year: 2023,
    rating: "TV-MA",
    duration: "1h 58m",
    genre: ["Thriller", "War", "Drama"],
    match: "93% Match"
  },
  // Originals
  {
    id: 7,
    title: "Velvet Obsession",
    description: "A struggling fashion designer gets a once-in-a-lifetime opportunity to design for a celebrity client. But as the deadline looms and rivals sabotage her work, she discovers the industry devours those who dare to dream.",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop",
    year: 2024,
    rating: "TV-MA",
    duration: "2h 10m",
    genre: ["Drama", "Biography"],
    match: "88% Match",
    newTag: "New"
  },
  {
    id: 8,
    title: "Quantum Break",
    description: "When a particle accelerator experiment goes catastrophically wrong, a group of strangers find themselves linked by impossible visions of each other's futures. Together, they must prevent the catastrophe from repeating.",
    thumbnail: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&h=1080&fit=crop",
    year: 2024,
    rating: "TV-MA",
    duration: "1h 55m",
    genre: ["Sci-Fi", "Thriller"],
    match: "92% Match"
  },
  {
    id: 9,
    title: "The Architect",
    description: "A brilliant but emotionally detached architect designs cities that anticipate human behavior. When one of her creations begins to fail, she must confront the design flaw at the heart of her own life.",
    thumbnail: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&h=1080&fit=crop",
    year: 2023,
    rating: "TV-14",
    duration: "1h 42m",
    genre: ["Drama", "Mystery"],
    match: "85% Match"
  },
  // Action & Adventure
  {
    id: 10,
    title: "Iron Summit",
    description: "An elite mountain rescue team must survive an impossible climb while retrieving stolen satellite codes from a summit gone wrong. Every step down is harder than the climb up.",
    thumbnail: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&h=1080&fit=crop",
    year: 2024,
    rating: "TV-MA",
    duration: "2h 08m",
    genre: ["Action", "Adventure", "Thriller"],
    match: "95% Match",
    newTag: "New"
  },
  {
    id: 11,
    title: "Desert Storm",
    description: "A former special forces operative is pulled back into action when a weapons dealer threatens to sell a stolen nuclear device. The mission: one man, seventy-two hours, infinite sand.",
    thumbnail: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920&h=1080&fit=crop",
    year: 2023,
    rating: "TV-MA",
    duration: "2h 15m",
    genre: ["Action", "Thriller"],
    match: "90% Match"
  },
  {
    id: 12,
    title: "Riptide",
    description: "When a tourist ferry is hijacked in international waters, three strangers with hidden skills must work together to save the hostages. The ocean is deep, and so is the conspiracy.",
    thumbnail: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&h=1080&fit=crop",
    year: 2024,
    rating: "TV-MA",
    duration: "1h 48m",
    genre: ["Action", "Thriller"],
    match: "87% Match"
  },
  // Comedies
  {
    id: 13,
    title: "Love in the Time of Algorithms",
    description: "A hopeless romantic who trusts AI matchmaking over real connection falls for someone her algorithm would never recommend. Now she must prove that love doesn't compute.",
    thumbnail: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1920&h=1080&fit=crop",
    year: 2024,
    rating: "TV-14",
    duration: "1h 35m",
    genre: ["Comedy", "Romance"],
    match: "84% Match",
    newTag: "New"
  },
  {
    id: 14,
    title: "The Backup Plan",
    description: "When a software developer accidentally creates a sentient backup copy of himself, they must share an apartment, a job, and one very complicated love interest. Chaos ensues.",
    thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1920&h=1080&fit=crop",
    year: 2023,
    rating: "TV-14",
    duration: "1h 45m",
    genre: ["Comedy", "Sci-Fi"],
    match: "89% Match"
  },
  {
    id: 15,
    title: "Table for One",
    description: "A confirmed bachelor signs up for his nephew's wedding as a plus-one escort service. One weekend of pretending to be coupled up becomes increasingly complicated when real feelings intervene.",
    thumbnail: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop",
    year: 2024,
    rating: "TV-14",
    duration: "1h 38m",
    genre: ["Comedy", "Romance"],
    match: "86% Match"
  },
  // Drama
  {
    id: 16,
    title: "The Weight of Water",
    description: "A championship swimmer battles depression after a career-ending injury. When her daughter signs them both up for a community rowing team, she must decide whether to sink or swim again.",
    thumbnail: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=1920&h=1080&fit=crop",
    year: 2024,
    rating: "TV-MA",
    duration: "2h 02m",
    genre: ["Drama", "Sports"],
    match: "94% Match"
  },
  {
    id: 17,
    title: "Meridian",
    description: "A family of immigrants running a failing diner in a shrinking town must decide whether to sell their legacy to developers. Each generation carries a different dream for the same piece of land.",
    thumbnail: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=1080&fit=crop",
    year: 2023,
    rating: "TV-MA",
    duration: "1h 55m",
    genre: ["Drama", "Family"],
    match: "91% Match"
  },
  {
    id: 18,
    title: "The Confession",
    description: "A successful lawyer receives a letter from his estranged father claiming he committed a crime thirty years ago. To expose the truth, he must cross-examine the only witness: his mother.",
    thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop",
    year: 2024,
    rating: "TV-MA",
    duration: "2h 12m",
    genre: ["Drama", "Mystery"],
    match: "93% Match",
    newTag: "New"
  },
  // Horror
  {
    id: 19,
    title: "The Hollow House",
    description: "A paranormal investigator takes a job in a Victorian mansion where every night, the family photographs show someone new standing in the background. Tonight, it's her.",
    thumbnail: "https://images.unsplash.com/photo-1509248961895-40216a224c8c?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1509248961895-40216a224c8c?w=1920&h=1080&fit=crop",
    year: 2024,
    rating: "TV-MA",
    duration: "1h 52m",
    genre: ["Horror", "Thriller"],
    match: "88% Match",
    newTag: "New"
  },
  {
    id: 20,
    title: "Cellar Door",
    description: "After a cabin rental goes wrong, a group of friends discovers a hidden cellar with recordings of people claiming to be their future selves. The recordings show how they die.",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop",
    year: 2023,
    rating: "TV-MA",
    duration: "1h 48m",
    genre: ["Horror", "Mystery"],
    match: "85% Match"
  },
  {
    id: 21,
    title: "Dead Signal",
    description: "A true-crime podcaster investigates a cold case by calling the victim's old phone number. Someone answers. Someone who shouldn't exist. Now the calls are coming back.",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&h=1080&fit=crop",
    year: 2024,
    rating: "TV-MA",
    duration: "1h 42m",
    genre: ["Horror", "Thriller"],
    match: "90% Match"
  },
  // Documentaries
  {
    id: 22,
    title: "Deep Dive: Ocean Cities",
    description: "Engineers and dreamers are building cities beneath the waves. This documentary follows three teams racing to create the first permanent underwater settlement before climate change makes it necessary.",
    thumbnail: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&h=1080&fit=crop",
    year: 2024,
    rating: "TV-14",
    duration: "1h 38m",
    genre: ["Documentary", "Science"],
    match: "96% Match",
    newTag: "New"
  },
  {
    id: 23,
    title: "The Algorithm Always Wins",
    description: "An investigative look at how social media algorithms shape human behavior, elections, and mental health. Former employees of major tech companies break their silence.",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop",
    year: 2023,
    rating: "TV-14",
    duration: "1h 55m",
    genre: ["Documentary", "Technology"],
    match: "92% Match"
  },
  {
    id: 24,
    title: "Last Light",
    description: "Scientists race against extinction to save the world's most endangered languages before the last speakers die. Each language takes a universe of knowledge with it.",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop",
    year: 2024,
    rating: "TV-G",
    duration: "1h 42m",
    genre: ["Documentary", "Culture"],
    match: "94% Match"
  },
  // Sci-Fi & Fantasy
  {
    id: 25,
    title: "Starbound",
    description: "A generation ship reaches its destination after 300 years, only to find the promised planet inhabited by humans who claim they never left. Someone has been lying for centuries.",
    thumbnail: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&h=1080&fit=crop",
    year: 2024,
    rating: "TV-MA",
    duration: "2h 08m",
    genre: ["Sci-Fi", "Drama"],
    match: "95% Match",
    newTag: "New"
  },
  {
    id: 26,
    title: "The Witcher of Brooklyn",
    description: "In an alternate New York where magic is real and monsters lurk in subway tunnels, a maintenance worker discovers he is the last in a line of monster hunters. Time to upgrade his toolbelt.",
    thumbnail: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=1920&h=1080&fit=crop",
    year: 2024,
    rating: "TV-MA",
    duration: "2h 15m",
    genre: ["Fantasy", "Action", "Comedy"],
    match: "91% Match"
  },
  {
    id: 27,
    title: "Neural",
    description: "In a world where memories can be downloaded and shared, a black market dealer discovers that someone's memories contain evidence of a murder. The victim is still alive. Or is she?",
    thumbnail: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&h=1080&fit=crop",
    year: 2023,
    rating: "TV-MA",
    duration: "1h 58m",
    genre: ["Sci-Fi", "Thriller"],
    match: "89% Match"
  },
  {
    id: 28,
    title: "Mythic",
    description: "When gods start appearing in the modern world with fading powers, a museum curator must help them reclaim their myths before humanity forgets them entirely. The divine meets the mundane.",
    thumbnail: "https://images.unsplash.com/photo-1485846224035-5424f0f3a6eb?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1485846224035-5424f0f3a6eb?w=1920&h=1080&fit=crop",
    year: 2024,
    rating: "TV-14",
    duration: "2h 02m",
    genre: ["Fantasy", "Drama"],
    match: "87% Match"
  }
];

export const categories = [
  { id: 1, name: "Trending Now", contentIds: [1, 2, 3, 4, 5, 6] },
  { id: 2, name: "Netflux Originals", contentIds: [7, 8, 9] },
  { id: 3, name: "Action & Adventure", contentIds: [10, 11, 12] },
  { id: 4, name: "Comedies", contentIds: [13, 14, 15] },
  { id: 5, name: "Drama", contentIds: [16, 17, 18] },
  { id: 6, name: "Horror", contentIds: [19, 20, 21] },
  { id: 7, name: "Documentaries", contentIds: [22, 23, 24] },
  { id: 8, name: "Sci-Fi & Fantasy", contentIds: [25, 26, 27, 28] }
];

export const getContentById = (id: number): ContentItem | undefined => {
  return mockContent.find(item => item.id === id);
};

export const getContentByCategory = (categoryId: number): ContentItem[] => {
  const category = categories.find(c => c.id === categoryId);
  if (!category) return [];
  return category.contentIds.map(id => getContentById(id)).filter((item): item is ContentItem => item !== undefined);
};

export const getFeaturedContent = (): ContentItem => {
  return mockContent[0];
};

export const genreList = [
  "Action", "Adventure", "Biography", "Comedy", "Crime", "Documentary",
  "Drama", "Fantasy", "Horror", "Mystery", "Romance", "Sci-Fi",
  "Sports", "Thriller", "War"
];