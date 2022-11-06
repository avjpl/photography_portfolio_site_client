import NextImage from "next/image";

const myLoader = ({ src }) => {
    return `http://localhost:8080${src}`; // http://localhost:8080 is the endpoint for imgproxy locally
};

const Image = ({ src }) => {
    return (
        <NextImage
            loader={myLoader}
            src={src}
            alt=""
            width={0}
            height={0}
            layout="responsive"
            priority
            objectFit="contain"
            objectPosition="100% 40%"
        />
    );
};

export default Image;
