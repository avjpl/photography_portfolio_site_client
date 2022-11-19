import NextImage from "next/image";
import { useState } from "react";

// http://localhost:8080 is the endpoint for imgproxy locally
const imageBase = 'http://localhost:8080';

const myLoader = ({ src }) => src;

const AssetImage = ({ src, width, height }) => {
    const imageSrc = `${imageBase}${src}`;

    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    return (
        <NextImage
            loader={myLoader}
            src={imageSrc}
            alt=""
            width={width}
            height={height}
            layout="responsive"
            priority
            objectFit="cover"
            unoptimized={true}
        />
    );
};

export default AssetImage;
