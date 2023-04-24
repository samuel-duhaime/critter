import { useContext } from "react";
import useFetchFeed from "../../hooks/useFetchFeed";
import { UserContext } from "../Global/Context/UserContext";
import PageTitle from "../Global/PageTitle";
import Loading from "../Global/Loading";
import CreateTweet from "./CreateTweet";
import Feed from "../Global/Feed";

const HomeFeed = () => {
  const { user } = useContext(UserContext);

  /* Fetch home feed */
  const { feed, setFeed, refetchFeed, setRefetchFeed } = useFetchFeed({
    apiUrl: "/api/me/home-feed",
  });

  return (
    <>
      <PageTitle>Home</PageTitle>
      {user.status !== "loading" ? (
        <>
          <CreateTweet
            refetchFeed={refetchFeed}
            setRefetchFeed={setRefetchFeed}
          />
          <Feed feed={feed} setFeed={setFeed} />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default HomeFeed;
