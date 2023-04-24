import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsArrowLeftRight } from "react-icons/bs";
import { COLORS } from "../../helpers/constants";
import AuthorImg from "../Global/Author/AuthorImg";
import TweetActions from "./TweetActions";
import AuthorLink from "./AuthorLink";
import ImportantText from "../Global/Text/ImportantText";
import MinorText from "../Global/Text/MinorText";
import Moment from "../Global/Library/Moment";
import Tippy from "../Global/Library/Tippy";
import AuthorDisplay from "../Global/Author/AuthorDisplay";

const SmallTweet = ({ tweet }) => {
  const [tweetData, setTweetData] = useState(tweet);

  /* Deconstruct the tweet */
  const {
    id,
    timestamp,
    status,
    media,
    retweetFrom,
    author,
    // isLiked,
    // isRetweeted,
    // numLikes,
    // numRetweets,
  } = tweetData;

  return (
    <TweetSection to={`/tweet/${id}`}>
      {/* Show retweet if possible */}
      {retweetFrom?.displayName && (
        <Retweet>
          <Tippy content={<AuthorDisplay author={retweetFrom} />}>
            <AuthorLink to={"/" + retweetFrom?.handle}>
              <MinorText>
                <BsArrowLeftRight /> {retweetFrom?.displayName} Remeowed
              </MinorText>
            </AuthorLink>
          </Tippy>
        </Retweet>
      )}

      <TweetContainer>
        {/* Author img */}
        <Tippy content={<AuthorDisplay author={author} />}>
          <AuthorLink to={"/" + author?.handle}>
            <AuthorImg src={author?.avatarSrc} alt={author?.displayName} />
          </AuthorLink>
        </Tippy>

        <InfoContainer>
          {/* Author info */}
          <div>
            {/* Author display name */}
            <Tippy content={<AuthorDisplay author={author} />}>
              <AuthorLink to={"/" + author.handle}>
                <ImportantText>{author?.displayName}</ImportantText>
              </AuthorLink>
            </Tippy>{" "}
            {/* Author handle name */}
            <Tippy content={<AuthorDisplay author={author} />}>
              <AuthorLink to={"/" + author.handle}>
                <MinorText>@{author?.handle}</MinorText>
              </AuthorLink>
            </Tippy>{" "}
            -{" "}
            <MinorText>
              <Moment date={timestamp} format="MMM DD" />
            </MinorText>
          </div>

          {/* Tweet status */}
          <div>{status}</div>
          {/* Tweet image */}
          {media[0]?.url && (
            <div>
              <TweetImg src={media[0]?.url} alt={status} />
            </div>
          )}

          {/* Tweet Actions */}
          <TweetActions tweet={tweetData} setTweet={setTweetData} />
        </InfoContainer>
      </TweetContainer>
    </TweetSection>
  );
};

const TweetSection = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border-bottom: 1px solid ${COLORS.gray};
  color: black;
  text-decoration: none;
  cursor: pointer;

  &:is(:hover, :focus) {
    background-color: ${COLORS.gray};
  }
`;

const Retweet = styled.div`
  margin-left: 30px;
`;

const TweetContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const TweetImg = styled.img`
  width: 100%;
  border-radius: 16px;
`;

export default SmallTweet;
