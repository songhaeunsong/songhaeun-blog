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

const PostItem: FC<TProps> = ({ date, title, description, img }) => {
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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin-bottom: 20px;
  border-radius: 10px;

  > div {
    padding-right: 1vw;
  }

  & :hover {
    color: ${(props) => props.theme.pointColor};
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
  }

  p {
    font-weight: 400;
    font-size: 15px;
  }

  @media screen and (max-width: 900px) {
    padding: 20px;
    flex-direction: column-reverse;
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
