import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Monitor,
  Smartphone,
  Tablet,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { ScrollFade } from "./ScrollFade";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { prototypes } from "../data/prototypes";

type DeviceType = "desktop" | "tablet" | "mobile";

export function PrototypeShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [device, setDevice] = useState<DeviceType>("desktop");

  const currentPrototype = prototypes[currentIndex];

  // Get the appropriate image based on device type
  const getCurrentImage = () => {
    switch (device) {
      case "mobile":
        return currentPrototype.mobileImage;
      case "tablet":
        return currentPrototype.tabletImage;
      case "desktop":
      default:
        return currentPrototype.desktopImage;
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % prototypes.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + prototypes.length) % prototypes.length
    );
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFade direction="up">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 text-white">
              Interactive Prototypes
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Explore design process across different devices
            </p>
          </div>
        </ScrollFade>

        {/* Device Selector */}
        <ScrollFade direction="up" delay={0.1}>
          <div className="flex justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10">
            <button
              onClick={() => setDevice("desktop")}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full transition-all text-xs sm:text-sm ${
                device === "desktop"
                  ? "bg-lime-500 text-gray-900 shadow-lg scale-105"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              <Monitor size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span>Desktop</span>
            </button>
            {/* <button
              onClick={() => setDevice("tablet")}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full transition-all text-xs sm:text-sm ${
                device === "tablet"
                  ? "bg-lime-500 text-gray-900 shadow-lg scale-105"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              <Tablet size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span>Tablet</span>
            </button>
            <button
              onClick={() => setDevice("mobile")}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full transition-all text-xs sm:text-sm ${
                device === "mobile"
                  ? "bg-lime-500 text-gray-900 shadow-lg scale-105"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              <Smartphone size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span>Mobile</span>
            </button> */}
          </div>
        </ScrollFade>

        {/* Prototype Display */}
        <ScrollFade direction="up" delay={0.2}>
          <div className="relative max-w-5xl mx-auto">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all hover:scale-110"
              aria-label="Previous"
            >
              <ChevronLeft className="text-gray-900" size={18} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all hover:scale-110"
              aria-label="Next"
            >
              <ChevronRight className="text-gray-900" size={18} />
            </button>

            {/* Device Frame Container */}
            <div className="px-12 sm:px-16 lg:px-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentIndex}-${device}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  {/* Desktop View */}
                  {device === "desktop" && (
                    <div className="bg-gray-900 rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl p-2 sm:p-3 md:p-4 border-2 sm:border-4 border-gray-900">
                      {/* Browser chrome */}
                      <div className="bg-gray-800 rounded-t-md sm:rounded-t-lg px-2 sm:px-3 py-1.5 sm:py-2 flex items-center gap-1 sm:gap-1.5 mb-1 sm:mb-2">
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-500 rounded-full"></div>
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-yellow-500 rounded-full"></div>
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full"></div>
                      </div>
                      {/* Screen */}
                      <div className="relative w-full aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-md sm:rounded-lg overflow-hidden">
                        <ImageWithFallback
                          src={getCurrentImage()}
                          alt={currentPrototype.title}
                          className="w-full h-full object-cover"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${currentPrototype.color} mix-blend-multiply opacity-10`}
                        />
                      </div>
                    </div>
                  )}

                  {/* Tablet View */}
                  {/* {device === "tablet" && (
                    <div className="max-w-xl mx-auto">
                      <div className="bg-gray-900 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl p-3 sm:p-4 md:p-5 border-4 sm:border-6 md:border-8 border-gray-900">
                        <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg sm:rounded-xl overflow-hidden">
                          <ImageWithFallback
                            src={getCurrentImage()}
                            alt={currentPrototype.title}
                            className="w-full h-full object-cover"
                          />
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${currentPrototype.color} mix-blend-multiply opacity-10`}
                          />
                        </div>
                        
                        <div className="mt-2 sm:mt-3 flex justify-center">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 sm:border-3 border-gray-700 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  )} */}

                  {/* Mobile View */}
                  {/* {device === "mobile" && (
                    <div className="max-w-xs mx-auto">
                      <div className="bg-gray-900 rounded-2xl sm:rounded-3xl md:rounded-[2rem] shadow-2xl p-2 sm:p-3 border-4 sm:border-6 border-gray-900 relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-5 sm:h-6 bg-gray-900 rounded-b-2xl z-10"></div>
                        <div className="relative w-full aspect-[9/19.5] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl sm:rounded-2xl overflow-hidden">
                          <ImageWithFallback
                            src={getCurrentImage()}
                            alt={currentPrototype.title}
                            className="w-full h-full object-cover"
                          />
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${currentPrototype.color} mix-blend-multiply opacity-10`}
                          />
                        </div>
                      </div>
                    </div>
                  )} */}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Project Info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mt-5 sm:mt-6 md:mt-8 text-center px-4"
              >
                <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-lime-500/20 text-lime-400 rounded-full text-xs sm:text-sm mb-2 sm:mb-3">
                  {currentPrototype.category}
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl mb-1.5 sm:mb-2 text-white">
                  {currentPrototype.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto">
                  {currentPrototype.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-1.5 sm:gap-2 mt-5 sm:mt-6">
              {prototypes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-lime-500 w-5 sm:w-6 md:w-8"
                      : "bg-gray-700 hover:bg-gray-600 w-1.5 sm:w-2"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
