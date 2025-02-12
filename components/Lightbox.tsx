import LightboxComponent, {
  } from "yet-another-react-lightbox";
  
  import "yet-another-react-lightbox/styles.css";
  
  /**
   * The purpose of this intermediate component is to load the Lightbox and
   * its CSS dynamically only when the lightbox becomes interactive
   */
  export default function Lightbox(
    props: any
  ) {
    return (
      <LightboxComponent
        // add plugins here
        // plugins={[]}
        {...props}
      />
    );
  }
  