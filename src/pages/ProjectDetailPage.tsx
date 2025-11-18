import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const projectData: Record<string, any> = {
  "1": {
    id: 1,
    title: "Kitchen Remodeling Landing Page",
    category: "Landing Page",
    image: "/assets/Thumbnail1.png",
    description:
      "A modern, conversion-focused landing page designed for a kitchen remodeling company.",
    role: ["UI/UX Design", "Research", "Wireframing", "Prototyping"],
    tools: ["Figma", "Adobe Illustrator"],
    timeline: "3 weeks",
    challenge:
      "The client needed a landing page that would capture leads effectively while showcasing their premium kitchen remodeling services. The main challenge was balancing visual appeal with clear calls-to-action.",
    solution:
      "Created a clean, structured layout with high-quality imagery, clear service descriptions, and strategically placed contact forms. Implemented trust signals through testimonials and before/after galleries.",
    nextProject: 2,
    prevProject: 8,
    wireframeImages: [
      "/assets/project-imgs/project1-img1.png",
      "/assets/Thumbnail1.png",
    ],
  },
  "2": {
    id: 2,
    title: "Bathroom Remodeling Website",
    category: "Website",
    image: "/assets/Thumbnail2.png",
    description:
      "Complete website redesign for a bathroom renovation company with focus on portfolio showcase.",
    role: ["UI/UX Design", "Visual Design", "Responsive Design"],
    tools: ["Figma"],
    timeline: "4 weeks",
    challenge:
      "The existing website was outdated and didn't effectively showcase the company's premium work. Navigation was confusing and mobile experience was poor.",
    solution:
      "Designed a modern, image-focused website with intuitive navigation, prominent project gallery, and seamless mobile responsiveness. Added filtering system for project browsing.",
    nextProject: 3,
    prevProject: 1,
    wireframeImages: [
      "/assets/Thumbnail2.png",
      "/assets/project-imgs/project2-img1.png",
    ],
  },
  "3": {
    id: 3,
    title: "Gym Brand Landing Page",
    category: "Landing Page",
    image: "/assets/Thumbnail3.jpg",
    description:
      "High-energy landing page for a fitness brand launching new membership packages.",
    role: ["UI/UX Design", "Branding Support", "Prototyping"],
    tools: ["Figma"],
    timeline: "2 weeks",
    challenge:
      "Creating an energetic, motivating design that appeals to fitness enthusiasts while maintaining clarity and ease of use for membership sign-ups.",
    solution:
      "Bold typography, dynamic imagery, and clear membership tier comparison. Streamlined sign-up flow with minimal friction.",
    nextProject: 4,
    prevProject: 2,
    wireframeImages: [
      "/assets/Thumbnail3.jpg",
      "/assets/project-imgs/project3-img1.jpeg",
      "/assets/project-imgs/project3-img2.jpeg",
      "/assets/project-imgs/project3-img3.jpeg",
    ],
  },
  "4": {
    id: 4,
    title: "Ecommerce Dashboard",
    category: "Dashboard",
    image: "/assets/Thumbnail4.jpg",
    description:
      "Analytics dashboard for ecommerce store owners to track sales, inventory, and customer metrics.",
    role: ["UI/UX Design", "Data Visualization", "User Research"],
    tools: ["Figma"],
    timeline: "4 weeks",
    challenge:
      "Presenting complex sales data in an easily digestible format while allowing deep-dive analysis for power users.",
    solution:
      "Hierarchical information architecture with overview dashboards and detailed drill-down views. Clear data visualization with contextual insights.",
    nextProject: 5,
    prevProject: 3,
    wireframeImages: [
      "/assets/Thumbnail4.jpg",
      "/assets/project-imgs/project4-img1.jpeg",
      "/assets/project-imgs/project4-img2.jpeg",
      "/assets/project-imgs/project4-img3.jpeg",
    ],
  },
  "5": {
    id: 5,
    title: "Laundry App UX/UI",
    category: "Mobile App",
    image: "/assets/Thumbnail5.jpg",
    description:
      "Mobile application for on-demand laundry service with scheduling and payment features.",
    role: ["UI/UX Design", "User Flows", "Prototyping", "Usability Testing"],
    tools: ["Figma"],
    timeline: "3 weeks",
    challenge:
      "Simplifying the booking process while accommodating various service types, scheduling preferences, and payment options.",
    solution:
      "Step-by-step booking flow with clear progress indicators. Smart defaults and saved preferences to speed up repeat bookings.",
    nextProject: 6,
    prevProject: 4,
    wireframeImages: [
      "/assets/Thumbnail5.jpg",
      "/assets/project-imgs/project5-img1.png",
      "/assets/project-imgs/project5-img2.png",
      "/assets/project-imgs/project5-img3.png",
      "/assets/project-imgs/project5-img4.png",
    ],
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
          <h1 className="text-4xl md:text-5xl mb-6 text-white">
            {project.title}
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            {project.description}
          </p>
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
          <p className="text-lg text-gray-300 leading-relaxed">
            {project.challenge}
          </p>
        </div>

        {/* Solution */}
        <div className="mb-12">
          <h2 className="text-3xl mb-4 text-white">Solution</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {project.solution}
          </p>
        </div>

        {/* UX Process */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 text-white">UX Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {["Research", "Wireframes", "Design", "Testing"].map(
              (step, index) => (
                <div
                  key={index}
                  className="bg-gray-800 border-2 border-gray-700 rounded-xl p-6 text-center"
                >
                  <div className="w-10 h-10 bg-lime-500/20 text-lime-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    {index + 1}
                  </div>
                  <div className="text-white">{step}</div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Wireframes/Screens Section */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 text-white">
            Wireframes & Final Screens
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.wireframeImages.map((imageUrl: string, index: number) => (
              <div
                key={index}
                className="aspect-video bg-gray-800 border border-gray-700 rounded-xl overflow-hidden"
              >
                <ImageWithFallback
                  src={imageUrl}
                  alt={`${project.title} - Screen ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
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
