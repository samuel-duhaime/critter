import { useParams } from "react-router-dom";
import useFetchFollowUsers from "../../hooks/useFetchFollowUsers";
import Loading from "../Global/Loading";
import FollowCard from "./FollowCard";

const Following = () => {
  const { profileId } = useParams();

  // Get all the followings users
  const { listUsers, refetchListUsers } = useFetchFollowUsers({
    apiUrl: `/api/${profileId}/following`,
  });

  return (
    <>
      {listUsers ? (
        listUsers?.following?.map((user) => {
          return (
            <FollowCard
              key={user.handle}
              user={user}
              refetchListUsers={refetchListUsers}
            />
          );
        })
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Following;
