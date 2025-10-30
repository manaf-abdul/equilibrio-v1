import DefaultLayout from "@/layouts/default";
import { Image } from "@nextui-org/react";
import Grid from "@mui/material/Grid2";
import React, { useState } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { data } from "@/projectsdata";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const categoryList = [
  "All",
  "commercial",
  "institutional",
  "hospitality",
  "residential",
  "interiors",
];
const Index = () => {
  const [category, setCategory] = useState("");
  const [projects, setProjects] = useState(data);
  
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleCategoryChange = (name: string) => {
    if (name === "All") {
      setProjects(data);
    } else {
      const filteredProducts = data.filter((elm) => elm.category === name);
      setProjects(filteredProducts);
    }
    setCategory(name);
  };

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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16">
        {/* Header Section */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-6 lg:px-8 mb-16"
        >
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our architectural masterpieces that blend innovation with timeless design
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center items-center">
            <div className="sm:hidden w-full max-w-xs">
              <select
                id="Tab"
                className="w-full rounded-xl border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 capitalize font-medium"
                value={category}
                onChange={(e) => handleCategoryChange(e.target.value)}
              >
                {categoryList.map((elm) => (
                  <option value={elm} key={elm} className="capitalize">
                    {elm}
                  </option>
                ))}
              </select>
            </div>

            <div className="hidden sm:block">
              <nav className="flex bg-white rounded-2xl p-2 shadow-lg border border-gray-200" aria-label="Tabs">
                {categoryList.map((elm) => (
                  <motion.button
                    key={elm}
                    onClick={() => handleCategoryChange(elm)}
                    className={`px-6 py-3 rounded-xl text-sm font-semibold capitalize transition-all duration-300 ${
                      category === elm
                        ? "bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {elm}
                  </motion.button>
                ))}
              </nav>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-6 lg:px-8"
        >
          <Grid container spacing={4} alignItems="stretch" justifyContent="center">
            {projects.map((project, index) =>
              project.projectImages.length && project.projectImages[0].src ? (
                <Grid
                  size={{ xs: 12, sm: 6, lg: 4 }}
                  key={`${project.id}-${category}`}
                  component="div"
                >
                  <motion.div
                    variants={itemVariants}
                    className="h-full"
                  >
                    <motion.a
                      href={`/projects/${project.id}`}
                      className="group block h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="relative overflow-hidden">
                        <motion.div
                          className="aspect-[4/3] overflow-hidden"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                          <Image
                            src={project.projectImages[0].src}
                            alt={project.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            radius="none"
                          />
                        </motion.div>
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Hover Content */}
                        <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="text-white">
                            <h3 className="text-lg font-semibold mb-1">{project.name}</h3>
                            <p className="text-sm text-gray-200 line-clamp-2">{project.description}</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="text-xl font-serif font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300 mb-2">
                              {project.name}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                              {project.description}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-gray-500 text-sm">
                          <LocationOnIcon sx={{ fontSize: "1rem", marginRight: 0.5 }} />
                          <span>{project.location}</span>
                        </div>
                      </div>
                    </motion.a>
                  </motion.div>
                </Grid>
              ) : null
            )}
          </Grid>
        </motion.div>
      </div>
    </DefaultLayout>
  );
};

export default Index;
