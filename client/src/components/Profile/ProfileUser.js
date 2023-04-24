import styled from "styled-components";
import { GrLocation } from "react-icons/gr";
import { FiCalendar } from "react-icons/fi";
import { COLORS } from "../../helpers/constants";
import FollowButton from "../Global/Button/FollowButton";
import Moment from "../Global/Library/Moment";
import ImportantText from "../Global/Text/ImportantText";
import MinorText from "../Global/Text/MinorText";
import { Link } from "react-router-dom";
import PageTitle from "../Global/PageTitle";

const ProfileUser = ({ profileUser, refetchUser }) => {
  const firstLocation = profileUser?.location?.split(",")[0]; // Get only the first Location

  return (
    <>
      <PageTitle backButton={true}>{profileUser?.displayName}</PageTitle>
      <BannerImg src={profileUser?.bannerSrc} alt={profileUser?.displayName} />
      <ProfileSection>
        <ProfileImgContainer>
          <div>
            <ProfileImg
              src={profileUser?.avatarSrc}
              alt={profileUser?.displayName}
            />
          </div>
          <div>
            <FollowButton
              isBeingFollowedByYou={profileUser?.isBeingFollowedByYou}
              handle={profileUser?.handle}
              refetch={refetchUser}
            />
          </div>
        </ProfileImgContainer>
        <div>
          <div>
            <ImportantText>{profileUser?.displayName}</ImportantText>
          </div>
          <div>
            <MinorText>
              @{profileUser?.handle}{" "}
              {profileUser?.isFollowingYou && <GraySpan>Follows you</GraySpan>}
            </MinorText>
          </div>
        </div>
        <div>{profileUser?.bio}</div>
        <FlexDiv>
          {firstLocation && (
            <div>
              <MinorText>
                <GrLocation /> {firstLocation}
              </MinorText>
            </div>
          )}
          <div>
            <MinorText>
              <FiCalendar /> Joined{" "}
              <Moment date={profileUser?.joined} format="MMMM YYYY" />
            </MinorText>
          </div>
        </FlexDiv>
        <FlexDiv>
          <div>
            <FollowLink to={`/${profileUser.handle}/following`}>
              <ImportantText>{profileUser?.numFollowing}</ImportantText>{" "}
              Following
            </FollowLink>
          </div>
          <div>
            <FollowLink to={`/${profileUser.handle}/followers`}>
              <ImportantText>{profileUser?.numFollowers}</ImportantText>{" "}
              Followers
            </FollowLink>
          </div>
        </FlexDiv>
      </ProfileSection>
    </>
  );
};

const BannerImg = styled.img`
  width: 100%;
`;

const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;

const ProfileImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  margin-top: -80px; // Image on top of the cover img
  border-radius: 50%;
  border: 2px solid white;
`;

const GraySpan = styled.span`
  background-color: ${COLORS.gray};
  padding: 0 5px;
  border-radius: 3px;
`;

const FlexDiv = styled.div`
  display: flex;
  gap: 10px;

  div {
    display: flex;
    gap: 5px;
  }
`;

const FollowLink = styled(Link)`
  color: black;
  text-decoration: none;

  &:is(:hover, :focus) {
    text-decoration: underline;
  }
`;

export default ProfileUser;
