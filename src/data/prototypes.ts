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
  desktopImage: string; // Image URL for desktop view (16:9 aspect ratio works best)
  tabletImage: string; // Image URL for tablet view (3:4 aspect ratio works best)
  mobileImage: string; // Image URL for mobile view (9:19.5 aspect ratio works best)
  color: string; // Gradient color overlay
}

export const prototypes: Prototype[] = [
  {
    id: 1,
    title: "NOD Real Estate Platform",
    category: "Real Estate Website",
    description: "Premium used homes marketplace with honest pricing",
    desktopImage: "/assets/Thumbnail1.png",
    tabletImage: "/assets/Thumbnail1.png",
    mobileImage: "/assets/Thumbnail1.png",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 2,
    title: "E-commerce Dashboard",
    category: "Web Application",
    description: "Modern admin dashboard with real-time analytics",
    desktopImage: "/assets/Thumbnail2.png",
    tabletImage: "/assets/Thumbnail2.png",
    mobileImage: "/assets/Thumbnail2.png",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Fitness Tracking App",
    category: "Mobile App",
    description: "Health and wellness tracking with gamification",
    desktopImage: "/assets/Thumbnail3.jpg",
    tabletImage: "/assets/Thumbnail3.jpg",
    mobileImage: "/assets/Thumbnail3.jpg",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    title: "Property Search Platform",
    category: "Web Platform",
    description: "Advanced property listings with virtual tours",
    desktopImage: "/assets/Thumbnail4.jpg",
    tabletImage: "/assets/Thumbnail4.jpg",
    mobileImage: "/assets/Thumbnail4.jpg",
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 5,
    title: "SaaS Landing Page",
    category: "Marketing Site",
    description: "High-converting landing page design",
    desktopImage: "/assets/Thumbnail5.jpg",
    tabletImage: "/assets/Thumbnail5.jpg",
    mobileImage: "/assets/Thumbnail5.jpg",
    color: "from-green-500 to-emerald-500",
  },
];
