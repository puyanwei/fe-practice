import { ReactNode } from "react";
import styled from "styled-components";
import { colors } from "../../styles/variables";

interface TCButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

const TCButton = ({ onClick, children }: TCButtonProps) => {
  return (
    <Button type="button" onClick={onClick}>
      {children}
    </Button>
  );
};

const Button = styled.button`
  width: 7rem;
  height: 2rem;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 7px;
  border: none;
  background-color: ${colors.darkCyan};
  color: white;
  font-size: 25px;
`;

export default TCButton;
