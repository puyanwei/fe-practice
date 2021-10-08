import { ReactNode } from "react";
import styled from "styled-components";
import { colors, weights } from "../../styles/variables";

interface TCButtonProps {
  width?: string;
  bgcolor?: string;
  txtColor?: string;
  active?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

interface StyledButtonProps {
  width: string;
  bgcolor: string;
  txtColor: string;
  active: boolean;
}

const TCButton = ({
  width = "47%",
  bgcolor = `${colors.darkCyan}`,
  txtColor = `${colors.white}`,
  active = false,
  onClick,
  children,
}: TCButtonProps) => {
  return (
    <Button
      type="button"
      width={width}
      bgcolor={bgcolor}
      txtColor={txtColor}
      active={active}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

const Button = styled.button<StyledButtonProps>`
  width: ${({ width }): string => width};
  height: 2rem;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 7px;
  border: none;
  background-color: ${({ bgcolor, active }): string =>
    active ? colors.lightCyan : bgcolor};
  color: ${({ txtColor }): string => txtColor};
  font-family: "Space Mono", monospace;
  font-size: 25px;
  font-weight: ${weights.bold};
  line-height: 0;
`;

export default TCButton;
