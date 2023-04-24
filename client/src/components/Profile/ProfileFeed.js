import useFetchFeed from "../../hooks/useFetchFeed";
import Loading from "../Global/Loading";
import Feed from "../Global/Feed";
import { useParams } from "react-router-dom";

const ProfileFeed = () => {
  const { profileId } = useParams(); // Get profileId

  /* Fetch profile feed */
  const { feed } = useFetchFeed({
    apiUrl: `/api/${profileId}/feed`,
  });

  return feed ? <Feed feed={feed} /> : <Loading />;
};

export default ProfileFeed;
