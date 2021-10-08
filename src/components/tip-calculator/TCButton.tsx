import { ReactNode } from "react";
import styled from "styled-components";
import { colors, weights } from "../../styles/variables";

interface TCButtonProps {
  width?: string;
  bgcolor?: string;
  txtColor?: string;
  bold?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

interface StyledButtonProps {
  width: string;
  bgcolor: string;
  txtColor: string;
  bold: boolean;
}

const TCButton = ({
  width = "7rem",
  bgcolor = `${colors.darkCyan}`,
  txtColor = `${colors.white}`,
  bold = false,
  onClick,
  children,
}: TCButtonProps) => {
  return (
    <Button
      type="button"
      width={width}
      bgcolor={bgcolor}
      txtColor={txtColor}
      bold={bold}
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
  background-color: ${({ bgcolor }): string => bgcolor};
  color: ${({ txtColor }): string => txtColor};
  font-size: 25px;
  font-weight: ${({ bold }): number => (bold ? weights.bold : weights.normal)};
`;

export default TCButton;
