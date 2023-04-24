import styled from "styled-components";
import { Link } from "react-router-dom";

const AuthorLink = ({ children, to }) => {
  return <AuthorLinkComponent to={to}>{children}</AuthorLinkComponent>;
};

const AuthorLinkComponent = styled(Link)`
  text-decoration: none;
  color: black;
  height: min-content;

  &:is(:focus, :hover) {
    text-decoration: underline;
  }
`;

export default AuthorLink;
