import { FC } from "react";
import Image from "next/image";
import { styled } from "styled-components";

interface TProps {
  src: string;
  alt: string;
}

const CustomImage: FC<TProps> = ({ src, alt }) => {
  return (
    <ImageWrapper>
      <Image src={src} alt={alt} fill objectFit="cover" />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  position: relative;
  height: 130px;
  aspect-ratio: 4/3;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: auto;
    aspect-ratio: 16/5;
    margin-bottom: 10px;
  }
`;

export default CustomImage;
