import { AnimatedButton } from './AnimatedButton';
import { ScrollFade, ScrollScale } from './ScrollFade';
import { ArrowRight, BookOpen } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <ScrollFade direction="left">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 text-white">About Me</h2>
              <div className="space-y-4 sm:space-y-6 text-gray-400 text-base sm:text-lg leading-relaxed">
                <p>
                  Qasim Ali is a UI/UX Designer focused on creating clean, structured and high-performing digital experiences that solve real business problems.
                </p>
                <p>
                  With experience spanning across ecommerce, real estate, SaaS, fitness, and service-based industries, he has delivered 6+ design projects including brand launches and product redesigns.
                </p>
                <p>
                  His work combines strategic thinking, functional UX, and refined visual design—built in Figma with careful attention to typography, spacing, and hierarchy.
                </p>
              </div>
              <div className="mt-6 sm:mt-8">
                <AnimatedButton 
                  text1="View Work" 
                  text2="See Projects" 
                  to="/projects"
                  icon1={ArrowRight}
                  icon2={BookOpen}
                  size="md"
                />
              </div>
            </div>
          </ScrollFade>

          {/* Right Content - Visual */}
          <ScrollFade direction="right" delay={0.2}>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-lime-900/30 to-gray-800 rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">💼</div>
                  <div className="text-2xl text-white mb-4">6+ Projects</div>
                  <div className="text-gray-400">Delivered Across Industries</div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-gray-800 border-2 border-lime-500/30 rounded-2xl px-6 py-4 shadow-lg">
                <div className="text-sm text-gray-400">Specializing in</div>
                <div className="text-lg text-white">UI/UX Design</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gray-800 border-2 border-lime-500/30 rounded-2xl px-6 py-4 shadow-lg">
                <div className="text-sm text-gray-400">Based in</div>
                <div className="text-lg text-white">Pakistan</div>
              </div>
            </div>
          </ScrollFade>
        </div>

        {/* Client Logos Placeholder */}
        <ScrollFade direction="up" delay={0.4}>
          <div className="mt-24 pt-12 border-t border-gray-800">
            <p className="text-center text-gray-500 mb-8">Trusted by clients across industries</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-40">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-32 h-16 bg-gray-800 rounded-lg"></div>
              ))}
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
