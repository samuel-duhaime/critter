import { useParams, Outlet } from "react-router-dom";
import useFetchUser from "../../hooks/useFetchUser";
import ProfileUser from "./ProfileUser";
import Loading from "../Global/Loading";
import Sections from "./Sections";

const Profile = () => {
  const { profileId } = useParams(); // Get profileId
  const { profileUser, refetchUser } = useFetchUser({ profileId });

  // We use this for Sections component
  const sections = [
    { id: 0, name: "Tweets", path: `/${profileId}` },
    { id: 1, name: "Media", path: `/${profileId}/media` },
    { id: 2, name: "Likes", path: `/${profileId}/likes` },
  ];

  return profileUser ? (
    <>
      <ProfileUser profileUser={profileUser} refetchUser={refetchUser} />
      <Sections sections={sections} />

      {/* Show select section with react-router-dom */}
      <Outlet />
    </>
  ) : (
    <Loading />
  );
};

export default Profile;
