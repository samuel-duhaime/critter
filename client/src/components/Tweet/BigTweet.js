import styled from "styled-components";
import AuthorImg from "../Global/Author/AuthorImg";
import TweetActions from "./TweetActions";
import AuthorLink from "./AuthorLink";
import ImportantText from "../Global/Text/ImportantText";
import MinorText from "../Global/Text/MinorText";
import Moment from "../Global/Library/Moment";
import Tippy from "../Global/Library/Tippy";
import AuthorDisplay from "../Global/Author/AuthorDisplay";

const BigTweet = ({ tweet, setTweet }) => {
  /* Deconstruct the tweet */
  const {
    id,
    timestamp,
    status,
    media,
    // retweetFrom,
    author,
    // isLiked,
    // isRetweeted,
    // numLikes,
    // numRetweets,
  } = tweet;

  return (
    <TweetSection to={`/tweet/${id}`}>
      <AuthorContainer>
        <div>
          {/* Author img */}
          <Tippy content={<AuthorDisplay author={author} />}>
            <AuthorLink to={"/" + author?.handle}>
              <AuthorImg src={author?.avatarSrc} alt={author?.displayName} />
            </AuthorLink>
          </Tippy>
        </div>

        <Tippy content={<AuthorDisplay author={author} />}>
          <SmallAuthorContainer>
            {/* Author display name */}

            <AuthorLink to={"/" + author.handle}>
              <ImportantText>{author?.displayName} </ImportantText>
            </AuthorLink>

            {/* Author handle */}
            <AuthorLink to={"/" + author.handle}>
              <MinorText>{`@${author.handle}`}</MinorText>
            </AuthorLink>
          </SmallAuthorContainer>
        </Tippy>
      </AuthorContainer>

      <InfoContainer>
        {/* Tweet status */}
        <div>{status}</div>
        {/* Tweet image */}
        {media[0]?.url && (
          <div>
            <TweetImg src={media[0]?.url} alt={status} />
          </div>
        )}

        <div>
          {/* <MinorText>{timestamp} - Critter web app</MinorText> */}
          <MinorText>
            <Moment date={timestamp} format="hh:mm A · MMM D YYYY"></Moment> -
            Critter web app
          </MinorText>
        </div>

        {/* Tweet Actions */}
        <TweetActions tweet={tweet} setTweet={setTweet} />
      </InfoContainer>
    </TweetSection>
  );
};

const TweetSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  color: black;
  text-decoration: none;
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SmallAuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export default BigTweet;
