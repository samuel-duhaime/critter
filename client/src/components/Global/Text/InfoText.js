import styled from "styled-components";
import { FaBomb } from "react-icons/fa";
import { FiBell, FiBookmark } from "react-icons/fi";

// Error page
const InfoText = ({ title, text, icon }) => {
  let IconComponent;

  // Pick the good icon
  switch (icon) {
    case "bomb":
      IconComponent = <FaBomb />;
      break;
    case "bell":
      IconComponent = <FiBell />;
      break;
    case "bookmark":
      IconComponent = <FiBookmark />;
      break;
    default:
      IconComponent = <FaBomb />;
  }

  return (
    <InfoSection>
      <Icon>{IconComponent}</Icon>
      <h2>{title}</h2>
      <p>{text}</p>
    </InfoSection>
  );
};

const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 420px;
  padding: 60px 20px;
  margin: auto;
  text-align: center;

  p {
    text-align: left;
  }
`;

const Icon = styled.div`
  font-size: 60px;
`;

export default InfoText;
