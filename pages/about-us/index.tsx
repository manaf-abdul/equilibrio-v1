import DefaultLayout from "@/layouts/default";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaPhoneVolume,
  FaEnvelopeOpenText,
  FaLocationArrow,
  FaWhatsapp,
} from "react-icons/fa";
import { IconType } from "react-icons";

const Index = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [storyRef, storyInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Define contact items
  const contactItems = [
    {
      IconComponent: FaLocationArrow,
      title: "Address",
      content: ["Equilibrio Designs LLP", "Door No. 7/465, Second Floor", "Royal Plaza, Ottapalam- 679101"],
    },
    {
      IconComponent: FaPhoneVolume,
      title: "Phone",
      content: ["+91 80894 58973"],
      link: "tel:+9180894589733",
    },
    {
      IconComponent: FaEnvelopeOpenText,
      title: "Email",
      content: ["arch.equilibrio@gmail.com"],
      link: "mailto:arch.equilibrio@gmail.com",
    },
    {
      IconComponent: FaWhatsapp,
      title: "WhatsApp",
      content: ["+91 80894 58973"],
      link: "https://wa.me/9180894589733",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
        
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        >
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              Equilibrio
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Where architectural excellence meets innovative design
          </p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            ref={storyRef}
            variants={containerVariants}
            initial="hidden"
            animate={storyInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-red-600">Equilibrio Designs</strong> is a professional architecture and design studio 
                  dedicated to creating spaces that inspire and endure. Founded on the principles of balance, innovation, 
                  and excellence, we transform visions into architectural masterpieces.
                </p>
                <p>
                  Our commitment to architectural excellence drives us to blend cutting-edge design with timeless aesthetics. 
                  We specialize in residential, commercial, institutional, and hospitality projects, each crafted with 
                  meticulous attention to detail and sustainability.
                </p>
                <p>
                  From concept to completion, we collaborate closely with our clients to ensure every project reflects 
                  their unique vision while meeting the highest standards of functionality and beauty.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Equilibrio Designs Architecture"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl opacity-20" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every project we undertake
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Innovation",
                description: "Embracing cutting-edge design technologies and sustainable practices",
                icon: "🚀",
              },
              {
                title: "Excellence",
                description: "Delivering architectural solutions that exceed expectations",
                icon: "⭐",
              },
              {
                title: "Collaboration",
                description: "Working closely with clients to bring their visions to life",
                icon: "🤝",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            ref={contactRef}
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your architectural journey? We'd love to hear from you.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {contactItems.map((contact, index) => {
              const IconComponent = contact.IconComponent as React.ComponentType<{className?: string}>;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-slate-800 p-6 rounded-2xl hover:bg-slate-700 transition-colors duration-300"
                >
                  <div className="text-red-400 text-2xl mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                <h3 className="font-semibold text-lg mb-3">{contact.title}</h3>
                <div className="text-gray-300 space-y-1">
                  {contact.content.map((line, i) => (
                    <div key={i}>
                      {contact.link && i === 0 ? (
                        <a
                          href={contact.link}
                          className="hover:text-red-400 transition-colors duration-300"
                        >
                          {line}
                        </a>
                      ) : (
                        line
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-xl text-gray-300 mb-4">
              We will revert to you as soon as possible!
            </p>
            <p className="text-gray-400">
              Thank you for considering Equilibrio Designs. <br />
              <strong>Have a great day!</strong>
            </p>
          </motion.div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Index;
