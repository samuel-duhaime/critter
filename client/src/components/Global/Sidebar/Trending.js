import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../../helpers/constants";
import ImportantText from "../Text/ImportantText";
import MinorText from "../Text/MinorText";
import RightBarSection from "./RightBarSection";

const Trending = () => {
  const items = [
    {
      id: 0,
      category: "Extreme Sports · Trending",
      topic: "Cat in a speedboat",
      path: "/tweet/1215953505451638784",
      imageUrl: "/assets/EN_vOBvW4AAnbML.jpg",
    },
    {
      id: 1,
      category: "Art · Trending",
      topic: "Cat in 1881 by Lady Butler",
      path: "/tweet/1215996774806106114",
    },
    {
      id: 2,
      category: "War · Trending",
      topic: "Cats vs tank",
      path: "/tweet/1215337574526525440",
    },
  ];

  return (
    <RightBarSection title="Trending Meows">
      {items.map((item) => (
        <Item to={item.path} key={item.id}>
          <TextItem>
            <div>
              <MinorText>{item.category}</MinorText>
            </div>
            <div>
              <ImportantText>{item.topic}</ImportantText>
            </div>
          </TextItem>
          {item.imageUrl && <ImageItem src={item.imageUrl} alt={item.topic} />}
        </Item>
      ))}
    </RightBarSection>
  );
};

const Item = styled(Link)`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  color: black;
  text-decoration: none;
  cursor: pointer;

  &:is(:hover, :focus) {
    background-color: ${COLORS.gray};
  }

  &:last-child {
    border-radius: 0 0 10px 10px;
  }
`;

const TextItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ImageItem = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 10px;
`;

export default Trending;
