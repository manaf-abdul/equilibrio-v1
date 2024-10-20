import DefaultLayout from "@/layouts/default";
import { Image } from "@nextui-org/react";
import Grid from "@mui/material/Grid2";
import React, { useState } from "react";
import { Box } from "@mui/material";
import { data } from "@/projectsdata";
import LocationOnIcon from "@mui/icons-material/LocationOn";

// Define constants for consistent image height and width
// const IMAGE_HEIGHT = "h-[350px] sm:h-[450px]";
// const IMAGE_WIDTH = "w-full md:w-[300px] lg:w-[350px]";
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

  const handleCategoryChange = (name: string) => {
    if (name === "All") {
      setProjects(data);
    } else {
      const filteredProducts = data.filter((elm) => elm.category === name);
      setProjects(filteredProducts);
    }
    setCategory(name);
  };

  return (
    <DefaultLayout>
      <Grid
        container
        spacing={4}
        alignItems={"center"}
        justifyContent={"space-evenly"}
      >
        <div className="w-full flex flex-row justify-center items-center pt-4">
          <div className="sm:hidden">
            <label htmlFor="Tab" className="sr-only">
              Tab
            </label>

            <select
              id="Tab"
              className="w-full rounded-md border-gray-200 capitalize"
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
            <nav className="flex" aria-label="Tabs">
              {categoryList.map((elm) => (
                <button
                  key={elm}
                  onClick={(e) => handleCategoryChange(elm)}
                  className={`shrink-0 rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 ${category === elm ? "font-bold  text-gray-600" : ""}`}
                >
                  {elm}
                </button>
              ))}
              {/* <a
                href="#"
                className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              >
                Settings
              </a> */}
            </nav>
          </div>
        </div>
        {projects.map((project, index) =>
          project.projectImages.length && project.projectImages[0].src ? (
            <Grid
              alignItems={"center"}
              justifyContent={"center"}
              padding={1}
              size={{ xs: 12, sm: 12, md: 6 }}
              key={index}
              component="a"
              href={`/projects/${project.id}`}
              className="group block"
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Image
                  src={project.projectImages[0].src}
                  alt={project.name}
                  // className={`${IMAGE_HEIGHT} ${IMAGE_WIDTH} object-cover`}
                  height={"auto"}
                  width={"auto"}
                />
                <div className="mt-3 flex justify-between text-sm w-full">
                  <div>
                    <h3 className="ml-5 text-black group-hover:underline group-hover:underline-offset-4">
                      {project.name}
                    </h3>

                    <p className="ml-5 mt-1.5 text-pretty text-xs text-gray-500">
                      {project.description}
                    </p>
                  </div>
                  <div>
                    <Box display={"flex"} alignItems={"center"}>
                      <LocationOnIcon
                        sx={{ color: "grey", fontSize: "1rem", marginRight: 1 }}
                      />
                      <p className="text-gray-500 mr-10">{project.location}</p>
                    </Box>
                  </div>
                </div>
              </Box>
            </Grid>
          ) : (
            ""
          )
        )}
      </Grid>
    </DefaultLayout>
  );
};

export default Index;
