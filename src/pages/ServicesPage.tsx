import { Figma, Layout, BarChart3, Palette, Pen, RefreshCw, ArrowRight, Send } from 'lucide-react';
import { AnimatedButton } from '../components/AnimatedButton';
import { ScrollFade } from '../components/ScrollFade';

const services = [
  {
    icon: Figma,
    title: 'UI/UX Design',
    description: 'User-centered product design with clean layouts and clarity-focused interfaces. Every design decision is backed by research and best practices.',
    features: [
      'User research & personas',
      'Information architecture',
      'Interaction design',
      'Visual design',
      'Design systems',
    ],
  },
  {
    icon: Layout,
    title: 'Landing Pages',
    description: 'High-converting sections, strong hierarchy, modern visuals. Designed to capture attention and drive action.',
    features: [
      'Conversion-focused layouts',
      'A/B testing ready',
      'Lead capture forms',
      'Trust signals integration',
      'SEO-friendly structure',
    ],
  },
  {
    icon: Layout,
    title: 'Responsive Websites',
    description: 'Tablet + mobile breakpoints included. Seamless experience across all devices.',
    features: [
      'Mobile-first approach',
      'Tablet optimization',
      'Desktop layouts',
      'Touch-friendly interfaces',
      'Performance optimized',
    ],
  },
  {
    icon: BarChart3,
    title: 'Dashboard Design',
    description: 'Functional, data-focused UI. Making complex information easy to understand and act upon.',
    features: [
      'Data visualization',
      'Information hierarchy',
      'Custom widgets',
      'Filtering & search',
      'Export capabilities',
    ],
  },
  {
    icon: Pen,
    title: 'Wireframing & Prototyping',
    description: 'Clear structure before visual design. Test and validate concepts before committing to final designs.',
    features: [
      'Low-fidelity wireframes',
      'High-fidelity mockups',
      'Interactive prototypes',
      'User flow diagrams',
      'Click-through demos',
    ],
  },
  {
    icon: RefreshCw,
    title: 'Redesign & UX Audit',
    description: 'Fixing messy layouts and improving flows. Identify pain points and implement solutions.',
    features: [
      'UX audit reports',
      'Competitor analysis',
      'User journey mapping',
      'Improvement recommendations',
      'Phased implementation plans',
    ],
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Understanding your business goals, target audience, and project requirements.',
  },
  {
    step: '02',
    title: 'Research',
    description: 'Analyzing competitors, user needs, and industry best practices.',
  },
  {
    step: '03',
    title: 'Design',
    description: 'Creating wireframes, mockups, and high-fidelity designs.',
  },
  {
    step: '04',
    title: 'Feedback',
    description: 'Iterating based on your input and usability testing insights.',
  },
  {
    step: '05',
    title: 'Delivery',
    description: 'Providing final files, design system, and developer handoff documentation.',
  },
];

export function ServicesPage() {
  return (
    <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollFade direction="up">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-white px-4">What I Can Do for You</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Comprehensive design services to bring your digital products to life. From initial concept to final delivery, I handle every aspect of the design process.
            </p>
          </div>
        </ScrollFade>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20 lg:mb-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollFade key={index} direction="up" delay={index * 0.1}>
                <div className="bg-gray-800 border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-lime-500 hover:shadow-xl transition-all h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-lime-500/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <Icon className="text-lime-400" size={24} />
                </div>
                <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-white">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                      <span className="text-lime-400 mt-0.5 sm:mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </ScrollFade>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <ScrollFade direction="up">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-white">How I Work</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                A structured, collaborative approach to ensure your project succeeds.
              </p>
            </div>
          </ScrollFade>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
            {process.map((item, index) => (
              <ScrollFade key={index} direction="up" delay={index * 0.15}>
                <div className="relative">
                  <div className="bg-gray-800 border-2 border-gray-700 rounded-lg sm:rounded-xl p-5 sm:p-6 hover:border-lime-500 transition-all h-full">
                    <div className="text-3xl sm:text-4xl text-lime-400 mb-3 sm:mb-4">{item.step}</div>
                    <h3 className="text-lg sm:text-xl mb-2 text-white">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-lime-400 z-10"></div>
                  )}
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>

        {/* Pricing Info */}
        <ScrollFade direction="up">
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-12 mb-24 border border-gray-700">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl mb-6 text-white">Flexible Engagement</h2>
            <p className="text-lg text-gray-300 mb-8">
              Every project is unique. I offer flexible pricing based on project scope, complexity, and timeline. Whether you need a quick landing page or a comprehensive design system, we'll find an arrangement that works.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 border border-gray-600 rounded-xl p-6">
                <div className="text-2xl mb-2 text-white">Project-Based</div>
                <p className="text-gray-400">Fixed scope and timeline</p>
              </div>
              <div className="bg-gray-900 border border-gray-600 rounded-xl p-6">
                <div className="text-2xl mb-2 text-white">Hourly</div>
                <p className="text-gray-400">Flexible for ongoing work</p>
              </div>
              <div className="bg-gray-900 border border-gray-600 rounded-xl p-6">
                <div className="text-2xl mb-2 text-white">Retainer</div>
                <p className="text-gray-400">Continuous support</p>
              </div>
            </div>
          </div>
          </div>
        </ScrollFade>

        {/* CTA */}
        <ScrollFade direction="up">
          <div className="text-center bg-gradient-to-br from-lime-600 to-lime-700 text-white rounded-3xl p-12">
            <h2 className="text-4xl mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your goals and how I can help you achieve them.
            </p>
            <AnimatedButton 
              text1="Get in Touch" 
              text2="Start Project" 
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
