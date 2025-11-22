import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Briefcase } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnimatedButton } from "./AnimatedButton";
import { ScrollFade } from "./ScrollFade";

const projects = [
  {
    id: 1,
    title: "IronClad Fitness Website",
    category: "Landing Page",
    image: "/assets/Thumbnail5.jpg",
  },
  {
    id: 2,
    title: "Crypto Vault Website",
    category: "Dashboard",
    image: "/assets/Thumbnail2.png",
  },
  {
    id: 3,
    title: "Real Estate Website",
    category: "Mobile App",
    image: "/assets/Thumbnail4.jpg",
  },
  {
    id: 4,
    title: "RenovateRight - Bathroom and Kitchen Remodeling Website",
    category: "Website",
    image: "/assets/Thumbnail1.png",
  },
  {
    id: 5,
    title: "Plumbing Website",
    category: "Landing Page",
    image: "/assets/Thumbnail3.jpg",
  },
];

export function Projects() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFade direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-white">
              Projects That Inspire
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A selection of recent work across various industries and design
              disciplines.
            </p>
          </div>
        </ScrollFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <ScrollFade key={project.id} direction="up" delay={index * 0.1}>
              <Link
                to={`/projects/${project.id}`}
                className="group relative bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:border-lime-500 hover:shadow-xl transition-all h-full flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-700">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-lime-500 mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl text-white mb-2 group-hover:text-lime-400 transition-colors">
                    {project.title}
                  </h3>
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

        <ScrollFade direction="up" delay={0.3}>
          <div className="text-center">
            <AnimatedButton
              text1="View All Projects"
              text2="See Portfolio"
              to="/projects"
              icon1={ArrowRight}
              icon2={Briefcase}
              className="min-w-[200px]"
            />
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
