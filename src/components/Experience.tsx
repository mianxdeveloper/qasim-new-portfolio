import { ScrollFade } from './ScrollFade';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Mindra',
    role: 'Product Designer',
    period: '2024 – Present',
    type: 'Full-time',
    description:
      "I work with the Mindra team on UI design, UX flows, and refining the product's design system. My role includes creating responsive layouts, improving visual consistency, and shaping new feature concepts. I collaborate closely with developers and the strategy team to make the product easier to use and visually sharper.",
  },
  {
    company: 'Freelance',
    role: 'UX/UI Designer',
    period: '2023 – Present',
    type: 'Independent',
    description:
      'I take on client projects focused on website redesigns, mobile apps, and landing pages. My work includes research, wireframes, high-fidelity design, and responsive prototypes. I help clients improve conversions, structure, and brand consistency across their digital platforms.',
  },
];

export function Experience() {
  return (
    <section className="bg-gray-900 py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <ScrollFade direction="up">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center mb-4 text-white">
              INDUSTRY EXPERIENCE
            </h2>
          </ScrollFade>
        </div>

        {/* Experience List */}
        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {experiences.map((exp, index) => (
            <ScrollFade key={index} direction="up" delay={index * 0.1}>
              <div className="border-b border-gray-800 pb-8 sm:pb-12">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-lime-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Briefcase className="text-lime-500" size={20} />
                      </div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl text-white">
                        {exp.role} — {exp.company}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm sm:text-base text-gray-400 mb-6">
                      <span>{exp.type}</span>
                      <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-4xl">
                  {exp.description}
                </p>
              </div>
            </ScrollFade>
          ))}
        </div>

        {/* Bottom decorative line */}
        <ScrollFade direction="up" delay={0.3}>
          <div className="mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-12 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400">
                Delivering design solutions across multiple industries
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-lime-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-lime-400">Currently Available for Projects</span>
              </div>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
