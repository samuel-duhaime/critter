import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";
import { COLORS, SIZE } from "../../helpers/constants";

const PageTitle = ({ children, backButton = false }) => {
  const navigate = useNavigate();

  // Will always go back to the good last page
  const HandleBack = () => {
    navigate(-1);
  };

  return (
    <TitleDiv>
      {backButton && (
        <BackButton onClick={HandleBack}>
          <FiArrowLeft />
        </BackButton>
      )}
      <H1>{children}</H1>
    </TitleDiv>
  );
};

const TitleDiv = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  height: ${SIZE.pageTitleHeight};
  gap: 16px;
  border-bottom: 1px solid ${COLORS.gray};
  padding: 16px;
  background-color: white;
  opacity: 0.9;
`;

const H1 = styled.h1`
  font-size: 20px;
  margin: 0;
`;

const BackButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    font-size: 20px;
  }

  &:is(:hover, :focus) {
    scale: 1.5;
  }
`;

export default PageTitle;
