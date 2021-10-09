import styled from "styled-components";
import { ChangeEvent } from "react";
import { colors } from "../../styles/variables";

interface TCCustomInputBoxProps {
  name: string;
  placeholder: string;
  value: number;
  icon?: JSX.Element;
  onFocus: (e: ChangeEvent<HTMLInputElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TCCustomInputBox = ({
  name,
  placeholder,
  value,
  onFocus,
  onChange,
}: TCCustomInputBoxProps) => (
  <Layout>
    <input
      type="number"
      name={name}
      placeholder={placeholder}
      value={value}
      onFocus={onFocus}
      onChange={onChange}
    />
  </Layout>
);

const Layout = styled.div`
  width: 47%;
  > input {
    width: 100%;
    height: 2rem;
    margin: 0.5rem 0;
    padding: 0.5rem 0.5rem 0.5rem 2rem;
    border-radius: 7px;
    border: none;
    font-size: 27px;
    color: hsl(172deg 14% 41%);
    background-color: ${colors.cyan};
    font-family: "Space Mono", monospace;
    text-align: center;
  }
`;

export default TCCustomInputBox;
