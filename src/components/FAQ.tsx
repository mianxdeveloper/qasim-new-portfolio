import { useState } from 'react';
import { ScrollFade } from './ScrollFade';
import { Plus, X } from 'lucide-react';

const faqs = [
  {
    id: '01',
    question: 'How do we kick off a project?',
    answer:
      'We start with a short call to understand your goals. After that, I send a clear proposal with scope, timeline, and deliverables.',
  },
  {
    id: '02',
    question: 'How do you price your services?',
    answer:
      'I use flat-rate packages per project type. You will know the total cost upfront—no surprises or hourly guessing.',
  },
  {
    id: '03',
    question: 'I do not have a full brief yet. Is that okay?',
    answer:
      'Absolutely. We refine the brief together during our discovery session. You do not need all the details upfront.',
  },
  {
    id: '04',
    question: 'Will I be able to update the website myself?',
    answer:
      'Yes. All sites are built in Framer, so you can edit text, swap images, or publish changes easily without coding.',
  },
  {
    id: '05',
    question: 'Do you offer both design and development?',
    answer:
      'Yes. I handle UI/UX design, visual direction, and full Framer development—no separate teams required.',
  },
  {
    id: '06',
    question: 'Do you take international clients?',
    answer:
      'Yes. I have collaborated with clients across multiple countries. Time zones and async communication are not an issue.',
  },
  {
    id: '07',
    question: 'What sets your work apart?',
    answer:
      'I focus on strategy, structure, and clarity. Every layout, interaction, and font choice is intentional and growth-driven.',
  },
  {
    id: '08',
    question: 'What do you need to get started?',
    answer:
      'Basic brand info, a short call, and any materials you have. I will guide the rest of the process.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-900 text-white py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollFade direction="up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-10 sm:mb-12 md:mb-14">
            FAQ's That Actually Help.
          </h2>
        </ScrollFade>

        {/* FAQ List */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <ScrollFade key={faq.id} direction="up" delay={index * 0.05}>
              <div className="border-b border-gray-800">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 sm:py-6 flex items-start justify-between gap-4 text-left hover:opacity-80 transition-opacity"
                >
                  <div className="flex items-start gap-3 sm:gap-5 flex-1">
                    <span className="text-xs sm:text-sm text-gray-500 flex-shrink-0 mt-1">
                      {faq.id}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg md:text-xl mb-2">
                        {faq.question}
                      </h3>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openIndex === index
                            ? 'max-h-96 opacity-100 mt-3'
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 mt-1">
                    {openIndex === index ? (
                      <X size={20} className="text-gray-400" />
                    ) : (
                      <Plus size={20} className="text-gray-400" />
                    )}
                  </div>
                </button>
              </div>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  );
}
