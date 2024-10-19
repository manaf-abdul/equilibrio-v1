import DefaultLayout from "@/layouts/default";
import React, { useCallback, useRef, useState } from "react";
import { useRouter } from "next/router";
import { data } from "@/projectsdata";
import dynamic from "next/dynamic";
import { Box, Grid2, Typography } from "@mui/material";
import { Image } from "@nextui-org/react";

const Lightbox = dynamic(() => import("@/components/Lightbox"));

const Index = () => {
  const router = useRouter();
  const projectId = router.query.id;
  const project = data.filter((elm) => elm.id === Number(projectId));
  console.log({ project });

  const thumbnailsRef: any = useRef(null);
  const zoomRef: any = useRef(null);

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event: number) => {
    setCurrentImage(event);
    setViewerIsOpen(true);
  }, []);
  const closeLightbox = () => {
    setViewerIsOpen(false);
  };

  return (
    <DefaultLayout>
      <Lightbox
        // plugins={getPlugins()}
        thumbnails={{ ref: thumbnailsRef }}
        zoom={{ ref: zoomRef }}
        on={{
          click: () => {
            (thumbnailsRef.current?.visible
              ? thumbnailsRef.current?.hide
              : thumbnailsRef.current?.show)?.();
          },
        }}
        open={viewerIsOpen}
        close={closeLightbox}
        slides={project[0]?.projectImages}
        index={currentImage}
      />
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={1}
      >
        <Image
          src={project[0]?.projectImages[0].src}
          alt={project[0]?.name}
          // className={`${IMAGE_HEIGHT} ${IMAGE_WIDTH} object-cover`}
          height={"auto"}
          width={"auto"}
        />
        <Box sx={{ width: "100%" }} paddingX={5} border={2} borderRadius={5} paddingY={5} borderColor={"#e5e7eb"}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"space-between"}>
            <Typography variant="h4" textAlign={"left"}>
              {project[0]?.name}
            </Typography>
            <Typography variant="body1">{project[0]?.description}</Typography>
          </Box>
          <Typography variant="body2" color="grey">{project[0]?.location}</Typography>
        </Box>
        <Grid2
          container
          spacing={4}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          {project[0] && project[0].projectImages.length
            ? project[0].projectImages.map((elm, index) => (
                <Grid2
                  alignItems={"center"}
                  justifyContent={"center"}
                  padding={1}
                  size={{ xs: 12, sm: 12, md: 4 }}
                  key={index}
                  component="a"
                  onClick={() => openLightbox(index)}
                  className="group block cursor-pointer"
                >
                  <Image
                    src={elm.src}
                    alt={"name"}
                    // className={`${IMAGE_HEIGHT} ${IMAGE_WIDTH} object-cover`}
                    height={"auto"}
                    width={"auto"}
                  />
                </Grid2>
              ))
            : ""}
        </Grid2>
      </Box>
    </DefaultLayout>
  );
};

export default Index;
