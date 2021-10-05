import { ReactNode } from "react";

interface TCButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

const TCButton = ({ onClick, children }: TCButtonProps) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default TCButton;
