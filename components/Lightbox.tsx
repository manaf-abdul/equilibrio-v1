import LightboxComponent from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface LightboxProps {
  open: boolean;
  close: () => void;
  slides: Array<{
    src: string;
    alt?: string;
    width?: number;
    height?: number;
  }>;
  index: number;
  [key: string]: any;
}

export default function Lightbox(props: LightboxProps) {
  return (
    <LightboxComponent
      {...props}
      controller={{
        closeOnBackdropClick: true,
        ...props.controller,
      }}
      styles={{
        container: { 
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          zIndex: 9999,
        },
        ...props.styles,
      }}
    />
  );
}
  