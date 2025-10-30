
import DefaultLayout from "@/layouts/default";
import { Image } from "@nextui-org/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import Logo from "../assets/images/logo.png";

export default function IndexPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [secondSectionRef, secondSectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <DefaultLayout>
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Parallax Background */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: parallaxY }}
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center bg-no-repeat opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
        </motion.div>

        {/* Content */}
        <motion.div 
          ref={contentRef}
          className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 min-h-screen flex items-center justify-center"
          style={{ opacity }}
        >
          <div className="text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8 flex justify-center"
            >
              <Image 
                src={Logo.src} 
                width={240} 
                className="drop-shadow-2xl"
                alt="Equilibrio Designs Logo"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
            >
              Design Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500">
                Dreams
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mb-8"
            >
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-red-400 mb-4">
                Equilibrio Designs
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Elevating Spaces, Designing Dreams, Crafting Legacies & Building the Future
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.a
                href="/projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-full overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Explore Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>

              <motion.a
                href="/contact-us"
                className="group px-8 py-4 border-2 border-white text-white font-semibold rounded-full transition-all duration-300 hover:bg-white hover:text-slate-900 hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Second Section with Parallax */}
      <section className="relative min-h-screen overflow-hidden">
        <motion.div
          ref={secondSectionRef}
          className="relative bg-[url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center bg-no-repeat bg-fixed"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-800/95" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 min-h-screen flex items-center">
            <div className="max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={secondSectionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Crafting Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-500">
                  Forever Home
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={secondSectionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-xl text-gray-300 mb-8 leading-relaxed"
              >
                Where innovation meets elegance, and every space tells a story. Our architectural expertise transforms visions into extraordinary realities.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={secondSectionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <motion.a
                  href="/projects"
                  className="group px-8 py-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Portfolio
                </motion.a>

                <motion.a
                  href="/contact-us"
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full transition-all duration-300 hover:bg-white hover:text-slate-900 hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </DefaultLayout>
  );
}
