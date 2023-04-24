import styled from "styled-components";
import { COLORS } from "../../../helpers/constants";

const RightBarSection = ({ children, title }) => {
  return (
    <Section>
      <h2>{title}</h2>
      {children}
    </Section>
  );
};

const Section = styled.section`
  border-radius: 10px;
  background-color: ${COLORS.lightgray};

  h2 {
    padding: 0 16px;
  }
`;


export default RightBarSection;
