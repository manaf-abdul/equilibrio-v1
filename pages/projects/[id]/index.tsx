import DefaultLayout from "@/layouts/default";
import React, { useCallback, useRef, useState } from "react";
import { useRouter } from "next/router";
import { data } from "@/projectsdata";
import dynamic from "next/dynamic";

const Lightbox = dynamic(() => import("@/components/Lightbox"));

const index = () => {
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
      <p onClick={()=>openLightbox(5)}>Post: {router.query.id}</p>
      <pre>{}</pre>
    </DefaultLayout>
  );
};

export default index;
