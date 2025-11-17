import { ScrollFade } from './ScrollFade';

const clients = [
  { name: 'Mindra', industry: 'Product Design' },
  { name: 'Tech Startups', industry: 'SaaS' },
  { name: 'E-commerce Brands', industry: 'Retail' },
  { name: 'Real Estate Firms', industry: 'Property' },
  { name: 'Fitness Studios', industry: 'Health & Wellness' },
  { name: 'Service Agencies', industry: 'B2B' },
];

export function TrustedClients() {
  return (
    <section className="bg-gray-900 py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollFade direction="up">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-white">
              Trusted by Clients Worldwide
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              I've partnered with startups, agencies, and businesses across multiple industries
              to deliver designs that drive results.
            </p>
          </div>
        </ScrollFade>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <ScrollFade direction="up" delay={0.1}>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-2 text-white">6+</div>
              <div className="text-sm sm:text-base text-gray-400">Projects Delivered</div>
            </div>
          </ScrollFade>
          
          <ScrollFade direction="up" delay={0.2}>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-2 text-white">5</div>
              <div className="text-sm sm:text-base text-gray-400">Industries Served</div>
            </div>
          </ScrollFade>
          
          <ScrollFade direction="up" delay={0.3}>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-2 text-white">100%</div>
              <div className="text-sm sm:text-base text-gray-400">On-Time Delivery</div>
            </div>
          </ScrollFade>
          
          <ScrollFade direction="up" delay={0.4}>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-2 text-white">2+</div>
              <div className="text-sm sm:text-base text-gray-400">Years Experience</div>
            </div>
          </ScrollFade>
        </div>

        {/* Client Industries */}
        <ScrollFade direction="up" delay={0.5}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:border-lime-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-base sm:text-lg mb-2 text-white">
                  {client.name}
                </div>
                <div className="text-xs sm:text-sm text-gray-400">{client.industry}</div>
              </div>
            ))}
          </div>
        </ScrollFade>

        {/* Bottom CTA */}
        <ScrollFade direction="up" delay={0.6}>
          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-base sm:text-lg text-gray-400 mb-6">
              Ready to join these successful partnerships?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-lime-500 text-gray-900 rounded-lg hover:bg-lime-400 transition-colors duration-300"
            >
              Let's Work Together
            </a>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
