import styled from "styled-components";
import { colors, weights, size } from "../../styles/variables";

interface TCButtonProps {
  label: string;
  width: string;
  lgWidth?: string;
  bgcolor?: string;
  txtColor?: string;
  active?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface StyledButtonProps {
  width: string;
  lgWidth?: string;
  bgcolor: string;
  txtColor: string;
  active: boolean;
}

const TCButton = ({
  label,
  width,
  lgWidth = "",
  bgcolor = `${colors.darkCyan}`,
  txtColor = `${colors.white}`,
  active = false,
  onClick,
}: TCButtonProps) => {
  return (
    <TipButton
      width={width}
      lgWidth={lgWidth}
      type="button"
      bgcolor={bgcolor}
      txtColor={txtColor}
      active={active}
      onClick={onClick}
    >
      {label}
    </TipButton>
  );
};

const TipButton = styled.button<StyledButtonProps>`
  width: ${({ width }): string => width};
  height: 2rem;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 7px;
  border: none;
  background-color: ${({ bgcolor, active }): string =>
    active ? colors.lightCyan : bgcolor};
  color: ${({ txtColor, active }): string =>
    active ? colors.darkCyan : txtColor};
  font-family: "Space Mono", monospace;
  font-size: 22px;
  font-weight: ${weights.bold};
  line-height: 0;

  @media (min-width: ${size.tablet}) and (max-width: ${size.desktop}) {
    width: ${({ lgWidth, width }): string => (lgWidth ? lgWidth : width)};
  }
`;

export default TCButton;
