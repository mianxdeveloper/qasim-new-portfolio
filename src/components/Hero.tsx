import { useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      // Add smooth entrance
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.8,
      },
    },
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      {/* Accent shapes */}
      <motion.div 
        className="absolute top-20 right-10 w-72 h-72 bg-lime-500/5 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />
      <motion.div 
        className="absolute bottom-32 left-10 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
      />

      <motion.div 
        className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-full mb-8"
            >
              <div className="w-2 h-2 bg-lime-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-white">Available for Select Projects</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-gray-900 mb-4 leading-[0.95]">
                Designing
                <br />
                <span className="text-gray-400">Digital</span>
                <br />
                <span className="relative inline-block">
                  Experiences
                  <motion.span 
                    className="absolute -bottom-2 left-0 w-full h-3 bg-lime-500/20"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  />
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl"
            >
              UI/UX Designer specializing in creating clean, structured, and high-performing 
              digital products that balance aesthetics with functionality.
            </motion.p>

            {/* Key Points */}
            <motion.div variants={itemVariants} className="space-y-3 mb-10">
              {[
                'Strategic design approach',
                'User-centered solutions',
                'Pixel-perfect execution',
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-lime-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/projects"
                className="group relative inline-flex items-center justify-center h-[52px] px-8 min-w-[180px] bg-[#1f2a38] text-white rounded-full overflow-hidden transition-all"
                style={{ boxShadow: '0 15px 30px rgba(31, 42, 56, 0.5)' }}
              >
                <span className="btn-text-one absolute w-full left-0 flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-wider transition-[top] duration-500 ease-in-out top-1/2 -translate-y-1/2">
                  View Work
                  <ArrowRight size={18} className="animate-icon-pulse" />
                </span>
                <span className="btn-text-two absolute w-full left-0 flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-wider transition-[top] duration-500 ease-in-out top-[150%] -translate-y-1/2">
                  <ArrowRight size={18} className="animate-icon-pulse" />
                  See Projects
                </span>
              </Link>
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center h-[52px] px-8 min-w-[180px] border-2 border-gray-900 text-gray-900 rounded-full overflow-hidden transition-all"
              >
                <span className="btn-text-one absolute w-full left-0 flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-wider transition-[top] duration-500 ease-in-out top-1/2 -translate-y-1/2">
                  Get in Touch
                  <ArrowRight size={18} className="animate-icon-pulse" />
                </span>
                <span className="btn-text-two absolute w-full left-0 flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-wider transition-[top] duration-500 ease-in-out top-[150%] -translate-y-1/2">
                  <ArrowRight size={18} className="animate-icon-pulse" />
                  Contact Me
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Stats & Info */}
          <div className="lg:col-span-5">
            <motion.div 
              variants={fadeInVariant}
              className="space-y-6"
            >
              {/* Main Stat Card */}
              <div className="bg-gray-900 text-white rounded-2xl p-8 border border-gray-800">
                <div className="space-y-6">
                  <div>
                    <div className="text-5xl mb-2">6+</div>
                    <div className="text-gray-400">Projects Delivered</div>
                  </div>
                  <div className="h-px bg-gray-800"></div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-2xl mb-1">5</div>
                      <div className="text-sm text-gray-400">Industries</div>
                    </div>
                    <div>
                      <div className="text-2xl mb-1">100%</div>
                      <div className="text-sm text-gray-400">On Time</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specializations */}
              <div className="bg-lime-50 rounded-2xl p-6 border border-lime-200">
                <div className="text-sm text-gray-600 mb-3">Specializing in</div>
                <div className="flex flex-wrap gap-2">
                  {['Web Design', 'Mobile Apps', 'Dashboards', 'SaaS'].map((item) => (
                    <span 
                      key={item}
                      className="px-3 py-1.5 bg-white border border-lime-300 rounded-full text-sm text-gray-900"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center justify-between px-6 py-4 bg-white border border-gray-200 rounded-2xl">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Based in</div>
                  <div className="text-gray-900">Pakistan</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500 mb-1">Working with</div>
                  <div className="text-gray-900">Global Clients</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
