import {useEffect} from "react";
import { useLazyQuery } from '@apollo/client';

import CustomImage from  '../../components/image/customImage';
import { GET_IMAGE_BY_CATEGORY } from '../../apollo/queries/assets';

import css from "../../../static/styles/gallery.module.css";

const Gallery = ({ gallery }) => {
  const [getImageByCategory, { loading, error, data }] = useLazyQuery(GET_IMAGE_BY_CATEGORY);

  useEffect(() => {
    (async () => {
      await getImageByCategory({ variables: { category: gallery?.toUpperCase(), width: 1080 } });
    })();
  }, [gallery, getImageByCategory]);

  if (error) {
    console.error(error);
  }

  return (
    <section className={css.gallery}>
      <div>
        {!loading && data?.images.map(({ filename, variants, exif }) => {
          // console.log(JSON.parse(exif));

          return (
              <CustomImage key={filename} {...variants[0]} />
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
