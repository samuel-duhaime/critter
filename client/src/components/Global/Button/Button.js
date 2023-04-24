import styled from "styled-components";
import { COLORS } from "../../../helpers/constants";

const Button = ({
  text,
  children,
  className,
  disabled = false,
  type = "button",
  onClick,
  onMouseOver,
  onMouseOut,
}) => {
  return (
    <ButtonComponent
      type={type}
      disabled={disabled}
      className={className}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {text ? text : children}
    </ButtonComponent>
  );
};

const ButtonComponent = styled.button`
  background-color: ${COLORS.primary};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 700;
  max-height: 34px;
  cursor: pointer;

  &:is(:hover, :focus) {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.4;
    cursor: unset;
  }
`;

export default Button;
