import { FC } from "react";
import Image from "next/image";

interface TProps {
  src: string;
  alt: string;
}

const CustomImage: FC<TProps> = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={250}
      height={130}
      style={{
        objectFit: "cover",
      }}
    />
  );
};

export default CustomImage;
