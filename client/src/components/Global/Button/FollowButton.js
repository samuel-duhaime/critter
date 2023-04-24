import { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../../helpers/constants";
import fetchApiFollowButton from "../../../helpers/fetchApiFollowButton";
import Button from "./Button";

const FollowButton = ({ isBeingFollowedByYou, handle, refetch }) => {
  const [text, setText] = useState(
    isBeingFollowedByYou ? "Following" : "Follow"
  );

  const handleClick = (event) => {
    event.preventDefault();

    if (isBeingFollowedByYou) {
      fetchApiFollowButton({ apiUrl: `/api/${handle}/unfollow` }); // Fetch Api for Unfollow button
      refetch(); // Refetch list users
      setText("Follow");
    } else if (!isBeingFollowedByYou) {
      fetchApiFollowButton({ apiUrl: `/api/${handle}/follow` }); // Fetch Api for Follow button
      refetch(); // Refetch list users
      setText("Following");
    }
  };

  const handleMouseOver = (event) => {
    event.preventDefault();

    setText(isBeingFollowedByYou ? "Unfollow" : "Follow");
  };

  const handleMouseOut = (event) => {
    event.preventDefault();

    setText(isBeingFollowedByYou ? "Following" : "Follow");
  };

  return (
    <SpecialButton
      isBeingFollowedByYou={isBeingFollowedByYou}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      text={text}
    />
  );
};

const SpecialButton = styled(Button)`
  ${({ isBeingFollowedByYou }) =>
    isBeingFollowedByYou
      ? `background-color: white; color: black; border: 1px solid ${COLORS.gray}; :hover {color: ${COLORS.red}; background-color: ${COLORS.lightRed};}`
      : "background-color: black; color: white;"};
`;

export default FollowButton;
