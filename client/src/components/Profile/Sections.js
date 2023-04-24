import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { COLORS, SIZE } from "../../helpers/constants";

const Sections = ({ sections }) => {
  return (
    <>
      <SectionsNav sectionsLength={sections.length}>
        {sections.map((section) => {
          return (
            <SectionLink
              key={section?.id}
              to={section.path}
              end // So active work nicely
            >
              {section?.name}
            </SectionLink>
          );
        })}
      </SectionsNav>
    </>
  );
};

const SectionsNav = styled.nav`
  display: grid;
  position: sticky;
  top: ${SIZE.pageTitleHeight};
  background-color: white;
  opacity: 0.9;

  /*  Repeat the columns the number of sectionsLength */
  grid-template-columns: ${({ sectionsLength }) =>
    `repeat(${sectionsLength}, 1fr);`};
`;

const SectionLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-weight: 700;
  text-decoration: none;
  color: black;
  cursor: pointer;
  border-bottom: 1px solid ${COLORS.gray};

  /* For active NavLink */
  &.active {
    color: ${COLORS.primary};
    border-bottom: 3px solid ${COLORS.primary};
  }

  &:hover {
    background-color: ${COLORS.gray};
  }
`;

export default Sections;
