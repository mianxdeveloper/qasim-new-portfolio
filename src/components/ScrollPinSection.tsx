import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Target, Zap, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const designPhilosophy = [
  {
    icon: Target,
    title: 'User-Centered',
    description: 'Every pixel serves a purpose',
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    side: 'left',
  },
  {
    icon: Sparkles,
    title: 'Attention to Detail',
    description: 'Micro-interactions that delight',
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
    side: 'right',
  },
  {
    icon: Zap,
    title: 'Performance First',
    description: 'Beautiful & blazing fast',
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    side: 'left',
  },
  {
    icon: Heart,
    title: 'Lasting Impact',
    description: 'Designs that resonate',
    gradient: 'from-red-500 via-pink-500 to-rose-400',
    side: 'right',
  },
];

export function ScrollPinSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const centerTextRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !centerTextRef.current) return;

    const ctx = gsap.context(() => {
      // Pin and animate the center text
      gsap.to(centerTextRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: centerTextRef.current,
          pinSpacing: false,
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            if (centerTextRef.current) {
              // Fade in from 0 to 0.15
              if (progress < 0.15) {
                const fadeInProgress = progress / 0.15;
                centerTextRef.current.style.opacity = String(fadeInProgress);
                centerTextRef.current.style.transform = `translate(-50%, -50%) scale(${0.85 + fadeInProgress * 0.15})`;
              }
              // Stay visible from 0.15 to 0.65
              else if (progress < 0.65) {
                centerTextRef.current.style.opacity = '1';
                centerTextRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
              }
              // Fade out and shrink from 0.65 to 1
              else {
                const fadeOutProgress = (progress - 0.65) / 0.35;
                centerTextRef.current.style.opacity = String(1 - fadeOutProgress * 0.85);
                centerTextRef.current.style.transform = `translate(-50%, -50%) scale(${1 - fadeOutProgress * 0.35})`;
              }
            }
          },
        },
      });

      // Animate cards sliding from sides
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const isLeft = designPhilosophy[index].side === 'left';
        const startX = isLeft ? -120 : 120;

        // Slide in animation
        gsap.fromTo(
          card,
          {
            x: startX,
            opacity: 0,
            scale: 0.92,
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'top 45%',
              scrub: 1,
            },
          }
        );

        // Slide out animation
        gsap.to(card, {
          x: isLeft ? 120 : -120,
          opacity: 0,
          scale: 0.92,
          ease: 'power2.in',
          scrollTrigger: {
            trigger: card,
            start: 'center 35%',
            end: 'bottom 15%',
            scrub: 1,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-[200vh] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-500/20 via-transparent to-cyan-500/20" />
      </div>

      {/* Center Pinned Text */}
      <div
        ref={centerTextRef}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center pointer-events-none px-4 w-full max-w-4xl"
        style={{ opacity: 0 }}
      >
        <div className="relative">
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-lime-400/20 via-cyan-400/20 to-purple-400/20" />
          
          <h2 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 leading-tight">
            <span className="block text-white">Design That</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-cyan-400 to-teal-400">
              Transforms
            </span>
          </h2>
          <p className="relative text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with purpose & precision
          </p>
        </div>
      </div>

      {/* Sliding Cards Container */}
      <div className="relative z-20 pt-[60vh]">
        {designPhilosophy.map((item, index) => {
          const Icon = item.icon;
          const isLeft = item.side === 'left';

          return (
            <div
              key={index}
              className="min-h-[55vh] flex items-center px-4 sm:px-6 lg:px-8"
            >
              <div
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className={`w-full max-w-7xl mx-auto flex ${
                  isLeft ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className="w-full sm:w-[420px] md:w-[480px] lg:w-[520px]">
                  {/* Gradient border card */}
                  <div
                    className={`relative group p-[2px] rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br ${item.gradient}`}
                  >
                    <div className="bg-gray-900 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 backdrop-blur-xl">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${item.gradient} rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg`}>
                          <Icon className="text-white" size={window.innerWidth < 640 ? 20 : 24} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl md:text-2xl text-white mb-1 sm:mb-2 leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Spacer */}
      <div className="h-[40vh]" />
    </section>
  );
}
