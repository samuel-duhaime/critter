import { useParams, Outlet } from "react-router-dom";
import useFetchUser from "../../hooks/useFetchUser";
import PageTitle from "../Global/PageTitle";
import MinorText from "../Global/Text/MinorText";
import Sections from "../Profile/Sections";

const Following = () => {
  const { profileId } = useParams(); // Get profileId
  const { profileUser } = useFetchUser({ profileId });

  // We use this for Sections component
  const sections = [
    { id: 0, name: "Followers", path: `/${profileId}/followers` },
    { id: 1, name: "Following", path: `/${profileId}/Following` },
  ];

  return (
    <>
      <PageTitle backButton={true}>
        <>
          <div>{profileUser?.displayName}</div>
          <div>
            <MinorText>@{profileId}</MinorText>
          </div>
        </>
      </PageTitle>
      <Sections sections={sections} />
      <Outlet />
    </>
  );
};

export default Following;
