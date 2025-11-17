import { AnimatedButton } from './AnimatedButton';
import { ScrollFade } from './ScrollFade';
import { Figma, Layout, BarChart3, Palette, ArrowRight, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Figma,
    title: 'UI Design & UX Research',
    description: 'Wireframes, user flows, prototypes, usability refinement, layout structuring.',
  },
  {
    icon: Layout,
    title: 'Website & Landing Page Design',
    description: 'High-converting landing pages, service websites, portfolio sites, responsive breakpoints.',
  },
  {
    icon: BarChart3,
    title: 'Dashboard & SaaS UI Design',
    description: 'Analytics dashboards, internal tools, admin panels, clean data-heavy layouts.',
  },
  {
    icon: Palette,
    title: 'Branding & Visual Identity',
    description: 'Basic brand direction, typography system, colors, style consistency for digital products.',
  },
];

export function Services() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFade direction="up">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 text-white">Digital Design Services</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              From concept to completion, I deliver design solutions that drive results.
            </p>
          </div>
        </ScrollFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollFade key={index} direction="up" delay={index * 0.1}>
                <div className="bg-gray-800 border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-lime-500 hover:shadow-lg transition-all h-full">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-lime-500/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <Icon className="text-lime-500" size={24} />
                  </div>
                  <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-white">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              </ScrollFade>
            );
          })}
        </div>

        <ScrollFade direction="up" delay={0.5}>
          <div className="text-center">
            <AnimatedButton 
              text1="View All Services" 
              text2="Explore More" 
              to="/services"
              icon1={ArrowRight}
              icon2={Sparkles}
            />
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
