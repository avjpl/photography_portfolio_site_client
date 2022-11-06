import {useEffect} from "react";
import { useLazyQuery } from '@apollo/client';

import CustomImage from  '../../components/image/customImage';
import { GET_IMAGE_BY_CATEGORY } from '../../apollo/queries/assets';

import css from "../../../static/styles/gallery.module.css";

const Gallery = ({ gallery }) => {
  const [getImageByCategory, { loading, error, data }] = useLazyQuery(GET_IMAGE_BY_CATEGORY);

  useEffect(() => {
    (async () => {
      await getImageByCategory({ variables: { category: gallery?.toUpperCase(), width: 828 } });
    })();
  }, [gallery, getImageByCategory]);

  if (error) {
    console.error(error);
  }

  return (
    <div className={css.gallery}>
      {!loading && data?.images.map(({ filename, variants, exif }) => {
        return (
          <CustomImage key={filename} src={variants[0].src} />
        );
      })}
    </div>
  );
};

export default Gallery;
