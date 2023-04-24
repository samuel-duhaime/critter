import { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../Global/Context/UserContext";
import AuthorImg from "../Global/Author/AuthorImg";
import Button from "../Global/Button/Button";
import fetchApiPostFeed from "../../helpers/fetchApiPostTweet";
import { COLORS } from "../../helpers/constants";

// Create a new tweet
const CreateTweet = ({ refetchFeed, setRefetchFeed }) => {
  const { user } = useContext(UserContext);
  const [leftCharacters, setLeftCharacters] = useState(280); // Numbers of characters left for a new tweet
  const [status, setStatus] = useState("");
  const testAreaRef = useRef(null);

  const handleChange = (event) => {
    const statusValue = event.target.value;
    const tweetLength = statusValue.length;

    setLeftCharacters(280 - tweetLength);
    setStatus(statusValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Posting a new tweet POST if less than 280 characters and more than 0
    if (leftCharacters < 280 && leftCharacters >= 0 && status) {
      fetchApiPostFeed({ body: { status } }); // Fetch Api to POST a new tweet
      setRefetchFeed(!refetchFeed); // Refetching after tweeting
      setLeftCharacters(280); // Reset leftCharacters
      testAreaRef.current.value = ""; // Reset testArea
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
      <AuthorImg src={user?.avatarSrc} alt={user?.displayName} />
      <BigDiv>
        <TextArea
          placeholder="What's happening?"
          rows={5}
          onChange={handleChange}
          ref={testAreaRef}
        />
        <Action>
          <LeftCharacters leftCharacters={leftCharacters}>
            {leftCharacters}
          </LeftCharacters>
          <Button
            disabled={
              leftCharacters === 280 ? true : leftCharacters >= 0 ? false : true
            }
            type="submit"
          >
            Meow
          </Button>
        </Action>
      </BigDiv>
    </Container>
  );
};

const Container = styled.form`
  display: flex;
  gap: 10px;
  padding: 20px;
  border-bottom: 3px solid ${COLORS.gray};
`;

const BigDiv = styled.div`
  width: 100%;
`;

const TextArea = styled.textarea`
  border: none;
  padding: 20px 0;
  font-size: 20px;
  width: 100%;
  resize: none; // Hide the resize

  &:focus {
    outline: none;
  }

  /* TODO: Custom Scrollbar */
  &::-webkit-scrollbar {
  }
`;

const Action = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
`;

const LeftCharacters = styled.div`
  color: ${({ leftCharacters }) =>
    leftCharacters > 55 ? "green" : leftCharacters > 0 ? "yellow" : "red"};
  opacity: ${({ leftCharacters }) => (leftCharacters > 0 ? 0.5 : 1)};
`;

export default CreateTweet;
