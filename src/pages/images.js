import { useQuery } from "@apollo/client";

import Image from '../components/image/customImage';

import { GET_FILES_BY_SIZE } from "../apollo/queries/assets";

const Gallery = () => {
    const { data, loading } = useQuery(GET_FILES_BY_SIZE, {
        // variables: { width: 600 },
    });

    console.log({data});

  return (
    <div>
        {data?.small?.map((image) => {
            return (
                <div key={image.filename}>
                    <Image alt="" {...image} />
                </div>
            );
        })}
    </div>
  );
};

export default Gallery;
