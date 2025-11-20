import React from "react";
import { AnimatedButton } from "./AnimatedButton";
import { ScrollFade } from "./ScrollFade";
import { Star, ArrowRight, MessageSquare } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    id: 1,
    text: "Working with Qasim has shown me a rare blend of research skill and design intuition. He takes the time to understand the problem deeply before putting anything on a canvas. That clarity lets him translate insights into clean, meaningful designs that capture the essence of what we’re building. His work consistently elevates the project.",
    author: "Martin Dubreuil",
    role: "Founder and CEO",
    company: "MINDRA Solutions",
    image: "/assets/Martin.jpeg",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFade direction="up">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 text-white">
              What Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Feedback from clients who trusted me with their digital products.
            </p>
          </div>
        </ScrollFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12 justify-items-center">
          {testimonials.map((testimonial, index) => (
            <ScrollFade
              key={testimonial.id}
              direction="up"
              delay={index * 0.15}
            >
              <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-lime-500 hover:shadow-lg transition-all h-full max-w-xl mx-auto">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="fill-lime-500 text-lime-500"
                      size={20}
                    />
                  ))}
                </div>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role} / {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollFade>
          ))}
        </div>

        <ScrollFade direction="up" delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnimatedButton
              text1="View All"
              text2="See More"
              to="/testimonials"
              icon1={ArrowRight}
              icon2={MessageSquare}
            />
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
