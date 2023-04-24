import styled from "styled-components";
import FollowButton from "../Global/Button/FollowButton";
import AuthorImg from "../Global/Author/AuthorImg";
import ImportantText from "../Global/Text/ImportantText";
import MinorText from "../Global/Text/MinorText";
import { COLORS } from "../../helpers/constants";

const FollowCard = ({ user, refetchListUsers }) => {
  return (
    <UserSection>
      <div>
        <AuthorImg src={user?.avatarSrc} alt={user?.displayName} />
      </div>
      <div>
        <div>
          <ImportantText>{user?.displayName}</ImportantText>
        </div>
        <div>
          <MinorText>@{user?.handle}</MinorText>
        </div>
        <br />
        <div>{user?.bio}</div>
      </div>
      <ButtonContainer>
        <FollowButton
          isBeingFollowedByYou={user?.isBeingFollowedByYou}
          handle={user?.handle}
          refetch={refetchListUsers}
        >
          Following
        </FollowButton>
      </ButtonContainer>
    </UserSection>
  );
};

const UserSection = styled.section`
  display: flex;
  gap: 10px;
  padding: 20px;
  width: 100%;
  border-bottom: 1px solid ${COLORS.gray};
`;

const ButtonContainer = styled.div`
  margin-left: auto;
`;

export default FollowCard;
