import { createPortal } from "react-dom";
import Image from "next/image";

import css from "./lightbox.module.css";

const LightBox = ({ src, lightboxHandler }) => {
  const el = document.getElementById("lightbox");

  const handleClose = () => {
    lightboxHandler(false);
  };

  return createPortal(
    <div className={css.lightbox}>
      <div className={css.lightbox__content}>
        <div className={css.lightbox__close} onClick={handleClose}>
          Close
        </div>
        <Image className={css.lightbox__image} src={src} layout={"fill"} />
      </div>
    </div>,
    el
  );
};

export default LightBox;
