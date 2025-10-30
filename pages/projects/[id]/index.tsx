import DefaultLayout from "@/layouts/default";
import React, { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { data } from "@/projectsdata";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Image } from "@nextui-org/react";
import { FaMapMarkerAlt, FaRuler } from "react-icons/fa";

const Lightbox = dynamic(() => import("@/components/Lightbox"));

const Index = () => {
  const router = useRouter();
  const projectId = router.query.id;
  const project = data.filter((elm) => elm.id === Number(projectId));

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [galleryRef, galleryInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const openLightbox = useCallback((event: number) => {
    setCurrentImage(event);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setViewerIsOpen(false);
  };

  if (!project[0]) {
    return (
      <DefaultLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
            <p className="text-gray-600">The project you're looking for doesn't exist.</p>
          </div>
        </div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <motion.div
          ref={heroRef}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={heroInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={project[0]?.projectImages[0]?.src ?? ""}
            alt={project[0]?.name}
            className="w-full h-full object-cover"
            radius="none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </motion.div>

        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-white"
            >
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                {project[0]?.name}
              </h1>
              <div className="flex items-center gap-6 text-lg">
                <div className="flex items-center gap-2">
                  {React.createElement(FaMapMarkerAlt as React.ComponentType<{className?: string}>, { className: "text-red-400" })}
                  <span>{project[0]?.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  {React.createElement(FaRuler as React.ComponentType<{className?: string}>, { className: "text-red-400" })}
                  <span>{project[0]?.category}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Project <span className="gradient-text">Overview</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {project[0]?.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            ref={galleryRef}
            initial={{ opacity: 0, y: 30 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Project <span className="gradient-text">Gallery</span>
            </h2>
            <p className="text-xl text-gray-600">
              Explore the architectural details and design elements
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={galleryInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {project[0]?.projectImages?.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={image.src}
                    alt={`${project[0]?.name} - Image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    radius="none"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mb-2 mx-auto">
                        <span className="text-xl">+</span>
                      </div>
                      <p className="text-sm font-medium">View Full Size</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {viewerIsOpen && (
        <Lightbox
          open={viewerIsOpen}
          close={closeLightbox}
          slides={project[0]?.projectImages || []}
          index={currentImage}
        />
      )}
    </DefaultLayout>
  );
};

export default Index;
