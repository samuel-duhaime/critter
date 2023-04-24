import styled from "styled-components";

const MinorText = ({ children }) => {
  return <MinorTextSpan>{children}</MinorTextSpan>;
};

const MinorTextSpan = styled.span`
  font-weight: 300;
  font-size: 14px;
`;

export default MinorText;
