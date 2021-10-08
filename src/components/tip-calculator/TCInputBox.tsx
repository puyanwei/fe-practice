import { ChangeEvent } from "react";
import styled from "styled-components";
import { colors } from "../../styles/variables";

interface TCInputBoxProps {
  name: string;
  label: string;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TCInputBox = ({ name, value, label, onChange }: TCInputBoxProps) => (
  <Layout>
    <label className="tc-label">{label}</label>
    <input type="number" name={name} value={value} onChange={onChange} />
  </Layout>
);

const Layout = styled.div`
  margin: 1rem 0;
  > input {
    margin: 0.5rem 0;
    width: 100%;
    height: 1.8rem;
    padding: 0.5rem;
    border: none;
    border-radius: 7px;
    font-size: 27px;
    color: ${colors.grey};
    background-color: ${colors.cyan};
    font-family: "Space Mono", monospace;
  }
`;

export default TCInputBox;
