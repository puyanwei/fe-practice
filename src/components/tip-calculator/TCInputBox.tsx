import { ChangeEvent } from "react";
import styled from "styled-components";

interface TCInputBoxProps {
  name: string;
  value: number;
  label: string;
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
`;

export default TCInputBox;
