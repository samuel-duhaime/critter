import styled from "styled-components";
import Trending from "./Trending";
import CatsToVisit from "./CatsToVisit";
import { SIZE } from "../../../helpers/constants";

const Rightbar = () => {
  return (
    <RightbarComponent>
      <Trending />
      <CatsToVisit />
    </RightbarComponent>
  );
};

const RightbarComponent = styled.section`
  display: none;

  @media screen and (min-width: ${SIZE.tabletWidth}) {
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 350px;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 20px;
  }
`;

export default Rightbar;
