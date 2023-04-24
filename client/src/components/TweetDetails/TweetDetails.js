import { useParams } from "react-router-dom";
import useFetchTweet from "../../hooks/useFetchTweet";
import PageTitle from "../Global/PageTitle";
import BigTweet from "../Tweet/BigTweet";
import Loading from "../Global/Loading";

const TweetDetails = () => {
  const { tweetId } = useParams();

  const {
    tweet,
    setTweet
  } = useFetchTweet({
    apiUrl: `/api/tweet/${tweetId}`,
  });

  return tweet ? (
    <div>
      <PageTitle backButton={true}>Meow</PageTitle>
      <BigTweet tweet={tweet} setTweet={setTweet} />
    </div>
  ) : (
    <Loading />
  );
};

export default TweetDetails;
