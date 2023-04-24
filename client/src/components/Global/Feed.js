import Loading from "./Loading";
import SmallTweet from "../Tweet/SmallTweet";

const Feed = ({ feed }) => {
  return feed ? (
    feed.tweetIds.map((tweet) => {
      const tweetData = feed?.tweetsById[tweet]; // Get only the tweet data of the tweetId

      return <SmallTweet key={tweet} tweet={tweetData} />;
    })
  ) : (
    <Loading />
  );
};

export default Feed;
