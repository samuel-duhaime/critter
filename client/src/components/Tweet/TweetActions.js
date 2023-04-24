import styled from "styled-components";
import { FiMessageCircle } from "react-icons/fi";
import { CiExport } from "react-icons/ci";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsArrowLeftRight } from "react-icons/bs";
import { COLORS } from "../../helpers/constants";

const TweetActions = ({ tweet, setTweet }) => {
  // When user click on like
  const handleLike = (event) => {
    event.preventDefault();

    if (tweet?.isLiked === false) {
      // If user don't already like the tweet
      setTweet({ ...tweet, isLiked: true, numLikes: tweet?.numLikes + 1 });
    } else if (tweet?.isLiked === true) {
      // If user already like the tweet
      setTweet({ ...tweet, isLiked: false, numLikes: tweet?.numLikes - 1 });
    }
  };

  return (
    <Actions>
      <Action>
        <ActionButton>
          <FiMessageCircle />
        </ActionButton>
      </Action>
      <Action>
        <ActionButton>
          <BsArrowLeftRight />
        </ActionButton>
        {tweet?.numRetweets > 0 && tweet?.numRetweets}
      </Action>
      <Action>
        <ActionButton onClick={handleLike}>
          {tweet?.isLiked ? (
            <AiFillHeart className="active" />
          ) : (
            <AiOutlineHeart />
          )}
        </ActionButton>
        {tweet?.numLikes > 0 && tweet?.numLikes}
      </Action>
      <Action>
        <ActionButton>
          <CiExport />
        </ActionButton>
      </Action>
    </Actions>
  );
};

const Actions = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  padding: 0 10px;
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ActionButton = styled.button`
  display: flex;
  padding: 10px;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:is(:hover) {
    background-color: ${COLORS.lightRed};
  }

  // If active
  svg.active {
    color: ${COLORS.red};
  }
`;

export default TweetActions;
