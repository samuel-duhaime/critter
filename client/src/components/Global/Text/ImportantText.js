import styled from "styled-components";

const ImportantText = ({ children }) => {
  return <ImportantTextSpan>{children}</ImportantTextSpan>;
};

const ImportantTextSpan = styled.span`
  font-weight: 700;
`;

export default ImportantText;
