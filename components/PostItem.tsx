import { FC } from "react";
import { styled } from "styled-components";
import metaData from "@/data/metaData";
import CustomImage from "./CustomImage";

interface TProps {
  date: string;
  title: string;
  description: string;
  img: string;
}

const PostItem = ({ date, title, description, img }: TProps) => {
  return (
    <StyledContainer>
      <div>
        <span>{date}</span>
        <article>{title}</article>
        <p>{description}</p>
      </div>
      <CustomImage src={img || metaData.homeImg} alt={title} />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  padding: 30px;
  display: flex;
  box-shadow: 1px 1px 10px #eceaea;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin-bottom: 20px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  > div {
    padding-right: 1vw;
    transition: transform 0.3s ease-in-out;
  }

  @media screen and (min-width: 901px) {
    &:hover > div {
      transform: translateX(10px);
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background-color: ${(props) => props.theme.pointColor};
      transform: scaleY(0);
      transform-origin: top;
      transition: transform 0.3s ease-in-out;
    }

    &:hover::before {
      transform: scaleY(1);
    }
  }

  span {
    font-size: 19px;
    font-weight: 200;
    color: gray;
  }
  article {
    margin-top: 20px;
    font-weight: 500;
    font-size: 22px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    font-weight: 400;
    font-size: 15px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media screen and (max-width: 900px) {
    padding: 20px;
    flex-direction: column-reverse;

    &:hover {
      color: ${(props) => props.theme.deepPointColor};
    }
    > div {
      width: 100%;
    }
    span {
      font-size: 15px;
    }
    article {
      margin-top: 10px;
      font-size: 18px;
    }
    p {
      font-size: 13px;
    }
  }
`;

export default PostItem;
