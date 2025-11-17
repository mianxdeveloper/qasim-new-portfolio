/**
 * EDITABLE PROTOTYPES DATA
 * 
 * Instructions:
 * 1. Each prototype needs THREE images (desktop, tablet, mobile)
 * 2. Replace the image URLs with your own project images
 * 3. Update title, category, and description for each project
 * 4. Choose a color gradient for each project
 * 
 * Available gradients:
 * - 'from-blue-500 to-cyan-500'
 * - 'from-purple-500 to-pink-500'
 * - 'from-orange-500 to-red-500'
 * - 'from-green-500 to-emerald-500'
 * - 'from-indigo-500 to-purple-500'
 * - 'from-rose-500 to-pink-500'
 * - 'from-yellow-500 to-orange-500'
 * - 'from-teal-500 to-cyan-500'
 */

export interface Prototype {
  id: number;
  title: string;
  category: string;
  description: string;
  desktopImage: string;  // Image URL for desktop view (16:9 aspect ratio works best)
  tabletImage: string;   // Image URL for tablet view (3:4 aspect ratio works best)
  mobileImage: string;   // Image URL for mobile view (9:19.5 aspect ratio works best)
  color: string;         // Gradient color overlay
}

export const prototypes: Prototype[] = [
  {
    id: 1,
    title: 'NOD Real Estate Platform',
    category: 'Real Estate Website',
    description: 'Premium used homes marketplace with honest pricing',
    desktopImage: 'figma:asset/53582f009c0843c2c547da64d95f81d11ff27fbf.png',
    tabletImage: 'figma:asset/33ab0caee70391c84462b57ab9c2b27c87b89d0c.png',
    mobileImage: 'figma:asset/33ab0caee70391c84462b57ab9c2b27c87b89d0c.png',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 2,
    title: 'E-commerce Dashboard',
    category: 'Web Application',
    description: 'Modern admin dashboard with real-time analytics',
    desktopImage: 'https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNrdG9wJTIwd2ViJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MzI3NjY2MXww&ixlib=rb-4.1.0&q=80&w=1080',
    tabletImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
    mobileImage: 'https://images.unsplash.com/photo-1521391406205-4a6af174a4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB1aSUyMGRlc2lnbnxlbnwxfHx8fDE3NjMyNzY2NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'Fitness Tracking App',
    category: 'Mobile App',
    description: 'Health and wellness tracking with gamification',
    desktopImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200',
    tabletImage: 'https://images.unsplash.com/photo-1580983703451-bf6bb44a9917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc2MzI0ODY0OHww&ixlib=rb-4.1.0&q=80&w=1080',
    mobileImage: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1200',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 4,
    title: 'Property Search Platform',
    category: 'Web Platform',
    description: 'Advanced property listings with virtual tours',
    desktopImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200',
    tabletImage: 'https://images.unsplash.com/photo-1719938073286-437141b562e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwYXBwJTIwbW9ja3VwfGVufDF8fHx8MTc2MzI3NjY2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    mobileImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 5,
    title: 'SaaS Landing Page',
    category: 'Marketing Site',
    description: 'High-converting landing page design',
    desktopImage: 'https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MzI3MTg2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    tabletImage: 'https://images.unsplash.com/photo-1742837442755-caf3f540c30d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzMjc2NjYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    mobileImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    color: 'from-green-500 to-emerald-500',
  },
];
