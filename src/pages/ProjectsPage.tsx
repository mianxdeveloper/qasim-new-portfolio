import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight, Send } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AnimatedButton } from "../components/AnimatedButton";
import { ScrollFade } from "../components/ScrollFade";

const allProjects = [
  {
    id: 1,
    title: "IronClad Fitness Website",
    category: "Landing Page",
    tags: ["Landing Page"],
    image: "/assets/Thumbnail5.jpg",
    description:
      "High-energy landing page for fitness brand with membership sign-up.",
  },
  {
    id: 2,
    title: "Crypto Vault Website",
    category: "Dashboard",
    tags: ["Dashboard"],
    image: "/assets/Thumbnail2.png",
    description:
      "Analytics dashboard for ecommerce store with sales tracking and metrics.",
  },
  {
    id: 3,
    title: "Real Estate Website",
    category: "Mobile App",
    tags: ["Mobile App"],
    image: "/assets/Thumbnail4.jpg",
    description:
      "Mobile app design for on-demand laundry service with booking flow.",
  },
  {
    id: 4,
    title: "RenovateRight - Bathroom and Kitchen Remodeling Website",
    category: "Website",
    tags: ["Website"],
    image: "/assets/Thumbnail1.png",
    description:
      "Complete website for bathroom renovation company with project gallery.",
  },
  {
    id: 5,
    title: "Plumbing Website",
    category: "Landing Page",
    tags: ["Landing Page", "Website"],
    image: "/assets/Thumbnail3.jpg",
    description:
      "Modern landing page for kitchen remodeling services with lead capture forms.",
  },
];

const filters = ["All", "Website", "Landing Page", "Dashboard", "Mobile App"];

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((project) => project.tags.includes(activeFilter));

  return (
    <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollFade direction="up">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-white px-4">
              My Work
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              A collection of projects spanning websites, dashboards, landing
              pages, and mobile applications.
            </p>
          </div>
        </ScrollFade>

        {/* Filters */}
        <ScrollFade direction="up" delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12 px-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-full transition-all text-sm sm:text-base ${
                  activeFilter === filter
                    ? "bg-lime-500 text-gray-900 shadow-md"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </ScrollFade>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollFade key={project.id} direction="up" delay={index * 0.05}>
              <Link
                to={`/projects/${project.id}`}
                className="group relative bg-gray-800 border border-gray-700 rounded-xl sm:rounded-2xl overflow-hidden hover:border-lime-500 hover:shadow-xl transition-all block h-full"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-900">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-lime-400 mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl text-white mb-2 group-hover:text-lime-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors">
                    <span className="text-sm">View Project</span>
                    <ExternalLink
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-500 animate-icon-pulse"
                    />
                  </div>
                </div>
              </Link>
            </ScrollFade>
          ))}
        </div>

        {/* CTA */}
        <ScrollFade direction="up">
          <div className="text-center mt-16 p-12 bg-gradient-to-br from-lime-600 to-lime-700 rounded-3xl">
            <h2 className="text-3xl mb-4 text-white">
              Have a project in mind?
            </h2>
            <p className="text-white/90 mb-6">
              Let's discuss how I can help bring your vision to life.
            </p>
            <AnimatedButton
              text1="Get in Touch"
              text2="Contact Me"
              to="/contact"
              icon1={ArrowRight}
              icon2={Send}
              variant="primary"
            />
          </div>
        </ScrollFade>
      </div>
    </div>
  );
}
