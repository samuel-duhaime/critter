import styled from "styled-components";

const AuthorImg = ({ src, alt }) => {
  return <AuthorImgComponent src={src} alt={alt} />;
};

const AuthorImgComponent = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export default AuthorImg;
