import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../../helpers/constants";
import ImportantText from "../Text/ImportantText";
import MinorText from "../Text/MinorText";
import RightBarSection from "./RightBarSection";
import Button from "../Button/Button";

const CatsToVisit = () => {
  const items = [
    {
      id: 0,
      avatarUrl: "/assets/militarycats-avatar.jpg",
      displayName: "Giant Military Cats",
      handle: "giantcat9",
    },
    {
      id: 1,
      avatarUrl: "/assets/diplomog-avatar.jpg",
      displayName: "Palmerston",
      handle: "diplomog",
    },
    {
      id: 2,
      avatarUrl: "/assets/treasurymog-avatar.jpg",
      displayName: "Gladstone, Esq.",
      handle: "treasurymog",
    },
  ];

  return (
    <RightBarSection title="Cats to visit">
      {items.map((item) => (
        <Item to={`/${item.handle}`} key={item.id}>
          <ImageItem src={item.avatarUrl} alt={item.topic} />
          <TextItem>
            <div>
              <ImportantText>{item.displayName}</ImportantText>
            </div>
            <div>
              <MinorText>@{item.handle}</MinorText>
            </div>
          </TextItem>
          <ButtonItem>Visit</ButtonItem>
        </Item>
      ))}
    </RightBarSection>
  );
};

const Item = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
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
  border-radius: 50%;
`;

const ButtonItem = styled(Button)`
  background-color: black;
  margin-left: auto;
`;

export default CatsToVisit;
