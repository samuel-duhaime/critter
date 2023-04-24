import { Link } from "react-router-dom";
import styled from "styled-components";
import AuthorImg from "./AuthorImg";
import FollowButton from "../Button/FollowButton";
import ImportantText from "../Text/ImportantText";
import MinorText from "../Text/MinorText";

const AuthorDisplay = ({ author, refetch }) => {
  return (
    <AuthorDisplaySection to={`/${author?.handle}`}>
      <AuthorImgContainer>
        <AuthorImg src={author?.avatarSrc} alt={author?.displayName} />
        <FollowButton
          isBeingFollowedByYou={author?.isBeingFollowedByYou}
          handle={author?.handle}
          refetch={refetch}
        />
      </AuthorImgContainer>
      <div>
        <div>
          <ImportantText>{author?.displayName}</ImportantText>
        </div>
        <div>
          <MinorText>@{author?.handle}</MinorText>
        </div>
      </div>
      <div>{author?.bio}</div>
      <FollowDiv>
        <div>
          <ImportantText>{author?.numFollowing}</ImportantText>{" "}
          <MinorText>following</MinorText>
        </div>
        <div>
          <ImportantText>{author?.numFollowers}</ImportantText>{" "}
          <MinorText>follower(s)</MinorText>
        </div>
      </FollowDiv>
    </AuthorDisplaySection>
  );
};

const AuthorDisplaySection = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 260px;
  text-decoration: none;
  color: black;
`;

const AuthorImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FollowDiv = styled.div`
  display: flex;
  gap: 20px;
`;

export default AuthorDisplay;
