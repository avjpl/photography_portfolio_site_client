import NextImage from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `http://localhost:8080${src}`; // http://localhost:8080 is the endpoint for imgproxy locally
  //   return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

const Image = ({ src }) => {
  return (
    <NextImage
      loader={myLoader}
      src={src}
      alt="Picture of the author"
      width={0}
      height={0}
      layout="responsive"
      priority
      objectFit="cover"
      objectPosition="100% 40%"
    />
  );
};

export default Image;
