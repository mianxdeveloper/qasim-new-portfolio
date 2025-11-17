import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const projectData: Record<string, any> = {
  '1': {
    id: 1,
    title: 'Kitchen Remodeling Landing Page',
    category: 'Landing Page',
    image: 'https://images.unsplash.com/photo-1682888818589-404faaa4dbc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwcmVtb2RlbGluZyUyMG1vZGVybnxlbnwxfHx8fDE3NjMyNzQwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A modern, conversion-focused landing page designed for a kitchen remodeling company.',
    role: ['UI/UX Design', 'Research', 'Wireframing', 'Prototyping'],
    tools: ['Figma', 'Adobe Illustrator'],
    timeline: '3 weeks',
    challenge: 'The client needed a landing page that would capture leads effectively while showcasing their premium kitchen remodeling services. The main challenge was balancing visual appeal with clear calls-to-action.',
    solution: 'Created a clean, structured layout with high-quality imagery, clear service descriptions, and strategically placed contact forms. Implemented trust signals through testimonials and before/after galleries.',
    nextProject: 2,
    prevProject: 8,
  },
  '2': {
    id: 2,
    title: 'Bathroom Remodeling Website',
    category: 'Website',
    image: 'https://images.unsplash.com/photo-1625578324458-a106197ff141?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc2MzE3NTI2NXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Complete website redesign for a bathroom renovation company with focus on portfolio showcase.',
    role: ['UI/UX Design', 'Visual Design', 'Responsive Design'],
    tools: ['Figma'],
    timeline: '4 weeks',
    challenge: 'The existing website was outdated and didn\'t effectively showcase the company\'s premium work. Navigation was confusing and mobile experience was poor.',
    solution: 'Designed a modern, image-focused website with intuitive navigation, prominent project gallery, and seamless mobile responsiveness. Added filtering system for project browsing.',
    nextProject: 3,
    prevProject: 1,
  },
  '3': {
    id: 3,
    title: 'Gym Brand Landing Page',
    category: 'Landing Page',
    image: 'https://images.unsplash.com/photo-1632077804406-188472f1a810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmaXRuZXNzJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MzE4Nzc3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'High-energy landing page for a fitness brand launching new membership packages.',
    role: ['UI/UX Design', 'Branding Support', 'Prototyping'],
    tools: ['Figma'],
    timeline: '2 weeks',
    challenge: 'Creating an energetic, motivating design that appeals to fitness enthusiasts while maintaining clarity and ease of use for membership sign-ups.',
    solution: 'Bold typography, dynamic imagery, and clear membership tier comparison. Streamlined sign-up flow with minimal friction.',
    nextProject: 4,
    prevProject: 2,
  },
  '4': {
    id: 4,
    title: 'Ecommerce Dashboard',
    category: 'Dashboard',
    image: 'https://images.unsplash.com/photo-1629963918958-1b62cfe3fe92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYzMjcxMTg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Analytics dashboard for ecommerce store owners to track sales, inventory, and customer metrics.',
    role: ['UI/UX Design', 'Data Visualization', 'User Research'],
    tools: ['Figma'],
    timeline: '4 weeks',
    challenge: 'Presenting complex sales data in an easily digestible format while allowing deep-dive analysis for power users.',
    solution: 'Hierarchical information architecture with overview dashboards and detailed drill-down views. Clear data visualization with contextual insights.',
    nextProject: 5,
    prevProject: 3,
  },
  '5': {
    id: 5,
    title: 'Laundry App UX/UI',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1750587289608-dbaeba3ea64d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXVuZHJ5JTIwYXBwJTIwbW9iaWxlfGVufDF8fHx8MTc2MzI3NDA3NHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Mobile application for on-demand laundry service with scheduling and payment features.',
    role: ['UI/UX Design', 'User Flows', 'Prototyping', 'Usability Testing'],
    tools: ['Figma'],
    timeline: '3 weeks',
    challenge: 'Simplifying the booking process while accommodating various service types, scheduling preferences, and payment options.',
    solution: 'Step-by-step booking flow with clear progress indicators. Smart defaults and saved preferences to speed up repeat bookings.',
    nextProject: 6,
    prevProject: 4,
  },
  '6': {
    id: 6,
    title: 'SaaS Analytics Dashboard',
    category: 'Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MzI3NDA3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Comprehensive analytics platform for SaaS companies to track user engagement and product metrics.',
    role: ['UI/UX Design', 'Information Architecture', 'Data Visualization'],
    tools: ['Figma'],
    timeline: '4 weeks',
    challenge: 'Creating a dashboard that serves both executive overview needs and detailed analyst requirements.',
    solution: 'Modular dashboard system with customizable widgets, saved views, and intelligent data grouping.',
    nextProject: 7,
    prevProject: 5,
  },
  '7': {
    id: 7,
    title: 'Real Estate Web UI',
    category: 'Website',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHl8ZW58MXx8fHwxNzYzMjc0MDc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Property listing website with advanced search, filtering, and virtual tour capabilities.',
    role: ['UI/UX Design', 'Responsive Design', 'Prototyping'],
    tools: ['Figma'],
    timeline: '4 weeks',
    challenge: 'Designing an intuitive search experience with multiple filter criteria while maintaining visual appeal.',
    solution: 'Smart filter system with real-time results, map integration, and comprehensive property detail pages.',
    nextProject: 8,
    prevProject: 6,
  },
  '8': {
    id: 8,
    title: 'Mindra Website',
    category: 'Website',
    image: 'https://images.unsplash.com/photo-1622131815526-eaae1e615381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYXB0b3AlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzMjI5NjAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Modern SaaS website with focus on conversion and clear product communication.',
    role: ['UI/UX Design', 'Visual Design', 'Prototyping'],
    tools: ['Figma'],
    timeline: '3 weeks',
    challenge: 'Explaining complex SaaS features in a simple, digestible way while driving sign-ups.',
    solution: 'Clear value proposition hierarchy, interactive feature demonstrations, and strategic CTA placement throughout.',
    nextProject: 1,
    prevProject: 7,
  },
};

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = id ? projectData[id] : null;

  if (!project) {
    return (
      <div className="pt-24 pb-16 text-center bg-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl mb-4 text-white">Project not found</h1>
          <Link to="/projects" className="text-lime-400 hover:text-lime-300">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 bg-gray-900 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        {/* Hero Image */}
        <div className="aspect-video rounded-3xl overflow-hidden bg-gray-800 mb-12">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Overview */}
        <div className="mb-16">
          <div className="inline-block px-4 py-1 bg-lime-500/20 text-lime-400 rounded-full text-sm mb-4">
            {project.category}
          </div>
          <h1 className="text-4xl md:text-5xl mb-6 text-white">{project.title}</h1>
          <p className="text-xl text-gray-300 leading-relaxed">{project.description}</p>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 p-8 bg-gray-800 border border-gray-700 rounded-2xl">
          <div>
            <h3 className="text-sm text-gray-400 mb-3">My Role</h3>
            <ul className="space-y-2">
              {project.role.map((item: string, index: number) => (
                <li key={index} className="text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm text-gray-400 mb-3">Tools Used</h3>
            <ul className="space-y-2">
              {project.tools.map((tool: string, index: number) => (
                <li key={index} className="text-white">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm text-gray-400 mb-3">Timeline</h3>
            <p className="text-white">{project.timeline}</p>
          </div>
        </div>

        {/* Challenge */}
        <div className="mb-12">
          <h2 className="text-3xl mb-4 text-white">Challenge</h2>
          <p className="text-lg text-gray-300 leading-relaxed">{project.challenge}</p>
        </div>

        {/* Solution */}
        <div className="mb-12">
          <h2 className="text-3xl mb-4 text-white">Solution</h2>
          <p className="text-lg text-gray-300 leading-relaxed">{project.solution}</p>
        </div>

        {/* UX Process */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 text-white">UX Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {['Research', 'Wireframes', 'Design', 'Testing'].map((step, index) => (
              <div key={index} className="bg-gray-800 border-2 border-gray-700 rounded-xl p-6 text-center">
                <div className="w-10 h-10 bg-lime-500/20 text-lime-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  {index + 1}
                </div>
                <div className="text-white">{step}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Wireframes/Screens Placeholder */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 text-white">Wireframes & Final Screens</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-video bg-gray-800 border border-gray-700 rounded-xl"></div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-12 border-t border-gray-700 gap-4">
          <button
            onClick={() => navigate(`/projects/${project.prevProject}`)}
            className="group relative inline-flex items-center justify-center h-[52px] px-8 min-w-[180px] bg-[#1f2a38] text-white rounded-full overflow-hidden transition-all"
          >
            <span className="btn-text-one absolute w-full left-0 flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-wider transition-[top] duration-500 ease-in-out top-1/2 -translate-y-1/2">
              <ArrowLeft size={16} className="animate-icon-pulse" />
              Previous
            </span>
            <span className="btn-text-two absolute w-full left-0 flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-wider transition-[top] duration-500 ease-in-out top-[150%] -translate-y-1/2">
              <ArrowLeft size={16} className="animate-icon-pulse" />
              Prev Project
            </span>
          </button>
          <button
            onClick={() => navigate(`/projects/${project.nextProject}`)}
            className="group relative inline-flex items-center justify-center h-[52px] px-8 min-w-[180px] bg-[#1f2a38] text-white rounded-full overflow-hidden transition-all"
          >
            <span className="btn-text-one absolute w-full left-0 flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-wider transition-[top] duration-500 ease-in-out top-1/2 -translate-y-1/2">
              Next
              <ArrowRight size={16} className="animate-icon-pulse" />
            </span>
            <span className="btn-text-two absolute w-full left-0 flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-wider transition-[top] duration-500 ease-in-out top-[150%] -translate-y-1/2">
              Next Project
              <ArrowRight size={16} className="animate-icon-pulse" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
