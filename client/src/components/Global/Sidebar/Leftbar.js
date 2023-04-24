import { useContext, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiHome, FiUser, FiBell, FiBookmark, FiPlus } from "react-icons/fi";
import { COLORS, SIZE } from "../../../helpers/constants";
import { UserContext } from "../Context/UserContext";
import Logo from "../Logo";
import Button from "../Button/Button";

const Leftbar = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  // If user fetch have an error. Go to error page.
  useEffect(() => {
    if (user.isError === true) {
      navigate("/error"); // Go to error page
    }
  }, [user, navigate]);

  return (
    <>
      <SidebarSection>
        <LogoLink to="/">
          <Logo />
        </LogoLink>
        <SidebarLink to="/">
          <FiHome />
          <ComputerSpan>Home</ComputerSpan>
        </SidebarLink>
        <SidebarLink to={"/" + user?.handle ? user?.handle : "treasurymog"}>
          <FiUser />
          <ComputerSpan>Profile</ComputerSpan>
        </SidebarLink>
        <SidebarLink to="/notifications">
          <FiBell />
          <ComputerSpan>Notifications</ComputerSpan>
        </SidebarLink>
        <SidebarLink to="/bookmarks">
          <FiBookmark />
          <ComputerSpan>Bookmarks</ComputerSpan>
        </SidebarLink>

        {/* ComputerButton for computer or CellButton */}
        <ComputerButton>Meow</ComputerButton>
        <CellButton>
          <FiPlus />
        </CellButton>
      </SidebarSection>
    </>
  );
};

const SidebarSection = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  min-height: 100vh;
  width: 60px;
  padding: 20px 5px;
  border-right: 1px solid ${COLORS.gray};

  @media screen and (min-width: ${SIZE.computerWidth}) {
    max-width: 250px;
    width: 100%;
    padding: 20px 40px;
  }
`;

const LogoLink = styled(Link)`
  margin: 0 0 -10px -3px; // Negative margin
  width: 55px;
  height: 55px;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;

  &:is(:hover, :focus) {
    background-color: ${COLORS.lightPrimary};
  }
`;

const SidebarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 10px;
  border-radius: 50%;
  text-decoration: none;
  font-weight: 700;

  @media screen and (min-width: ${SIZE.computerWidth}) {
    border-radius: 50px;
    justify-content: unset;
  }

  &:is(:hover, :focus) {
    background-color: ${COLORS.lightPrimary};
  }

  &.active,
  :is(:hover, :focus) {
    color: ${COLORS.primary};
  }

  svg {
    font-size: 26px;
  }
`;

/* Only show with computer */
const ComputerSpan = styled.span`
  display: none;

  @media screen and (min-width: ${SIZE.computerWidth}) {
    display: unset;
  }
`;

const ComputerButton = styled(Button)`
  display: none;

  @media screen and (min-width: ${SIZE.computerWidth}) {
    display: unset;
  }
`;

const CellButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50%;
  font-weight: 700;
  border: none;
  background-color: ${COLORS.primary};
  color: white;
  cursor: pointer;

  &:is(:hover, :focus) {
    opacity: 0.8;
  }

  svg {
    font-size: 26px;
  }

  @media screen and (min-width: ${SIZE.computerWidth}) {
    display: none;
  }
`;

export default Leftbar;
