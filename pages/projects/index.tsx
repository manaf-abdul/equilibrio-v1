import DefaultLayout from "@/layouts/default";
import { Image } from "@nextui-org/react";
import Grid from "@mui/material/Grid2";
import React from "react";
import { Box } from "@mui/material";
import { data } from "@/projectsdata";

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
        {data.map((project, index) => (
          project.projectImages.length ? 
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
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
              <Image
                src={project.projectImages[0]}
                alt={project.name}
                // className={`${IMAGE_HEIGHT} ${IMAGE_WIDTH} object-cover`}
                height={"auto"}
                width={"auto"}
              />
              <div className="mt-3 flex justify-between text-sm">
                <div>
                  <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                    {project.name}
                  </h3>

                  <p className="mt-1.5 text-pretty text-xs text-gray-500">
                    {project.description}
                  </p>
                </div>

                <p className="text-gray-900">{project.location}</p>
              </div>
            </Box>
          </Grid>:""
        ))}
      </Grid>
    </DefaultLayout>
  );
};

export default Index;
