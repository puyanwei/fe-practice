import styled from "styled-components";
import { colors, weights } from "../../styles/variables";

interface TCButtonProps {
  label: string;
  width?: string;
  bgcolor?: string;
  txtColor?: string;
  active?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface StyledButtonProps {
  width: string;
  bgcolor: string;
  txtColor: string;
  active: boolean;
}

const TCButton = ({
  label,
  width = "47%",
  bgcolor = `${colors.darkCyan}`,
  txtColor = `${colors.white}`,
  active = false,
  onClick,
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
      {label}
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
