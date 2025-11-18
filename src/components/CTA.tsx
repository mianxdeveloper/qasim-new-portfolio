import React from "react";
import { AnimatedButton } from "./AnimatedButton";
import { ScrollFade } from "./ScrollFade";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-lime-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollFade direction="up">
          <div className="mb-6 sm:mb-8">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-lime-500/20 border border-lime-500/30 rounded-full text-lime-300 text-xs sm:text-sm mb-4 sm:mb-6">
              Ready to Start?
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 px-4">
              Bring Your Idea to Life
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Whether you need a landing page, dashboard, or complete digital
              product—let's create something that works.
            </p>
          </div>
        </ScrollFade>

        <ScrollFade direction="up" delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <AnimatedButton
              text1="Let's Collaborate"
              text2="Work Together"
              to="/contact"
              icon1={ArrowRight}
              icon2={Sparkles}
              variant="secondary"
              className="min-w-[200px]"
            />
          </div>
        </ScrollFade>

        <ScrollFade direction="up" delay={0.4}>
          <div className="mt-8 sm:mt-10 md:mt-12 pt-8 sm:pt-10 md:pt-12 border-t border-gray-700">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center px-4">
              <div>
                <div className="text-2xl sm:text-3xl mb-2">Fast</div>
                <div className="text-sm sm:text-base text-gray-400">
                  Quick turnaround times
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl mb-2">Reliable</div>
                <div className="text-sm sm:text-base text-gray-400">
                  Clear communication
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl mb-2">Quality</div>
                <div className="text-sm sm:text-base text-gray-400">
                  Attention to detail
                </div>
              </div>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
