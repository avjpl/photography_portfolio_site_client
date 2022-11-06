import { useState } from "react";
import Image from "next/image";

import LightBox from "../lightBox/lightBox";

import css from "../../../static/styles/gallery.module.css";

const GalleryImage = ({ src, layout = "fill" }) => {
  const [toggleLightbox, setToggleLightbox] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  const handleSetImage = (src) => () => {
    if (src) {
      setImageSrc(src);
      setToggleLightbox(!toggleLightbox);
    }
  };

  return (
    <>
      <div className={css["gallery__image--wrapper"]}>
        <Image
          className={css.gallery__image}
          src={src}
          layout={layout}
          onClick={handleSetImage(src)}
        />
      </div>

      {toggleLightbox && (
        <LightBox src={imageSrc} lightboxHandler={setToggleLightbox} />
      )}
    </>
  );
};

export default GalleryImage;
