import DefaultLayout from "@/layouts/default";
import { Image } from "@nextui-org/react";
import Grid from "@mui/material/Grid2";
import React from "react";
import { Box } from "@mui/material";
import { data } from "@/projectsdata";
import LocationOnIcon from "@mui/icons-material/LocationOn";

// Define constants for consistent image height and width
const IMAGE_HEIGHT = "h-[350px] sm:h-[450px]";
const IMAGE_WIDTH = "w-full md:w-[300px] lg:w-[350px]";

const Index = () => {
  return (
    <DefaultLayout>
      <Grid
        container
        spacing={4}
        alignItems={"center"}
        justifyContent={"space-evenly"}
      >
        {data.map((project, index) =>
          project.projectImages.length ? (
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
