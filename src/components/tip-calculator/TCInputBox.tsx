import styled from "styled-components";
import { ChangeEvent } from "react";
import { colors, weights } from "../../styles/variables";
interface TCInputBoxProps {
  name: string;
  label: string;
  value: number;
  icon?: JSX.Element;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TCInputBox = ({
  name,
  value,
  label,
  icon,
  onChange,
}: TCInputBoxProps) => (
  <Layout>
    <label className="tc-label">{label}</label>
    <input type="number" name={name} value={value} onChange={onChange} />
    {icon && <IconPosition>{icon}</IconPosition>}
  </Layout>
);

const Layout = styled.div`
  margin-top: 0.5rem;
  > input {
    margin: 0.5rem 0;
    padding-right: 1rem;
    width: 100%;
    height: 1.8rem;
    border: none;
    border-radius: 7px;
    color: ${colors.darkCyan};
    background-color: ${colors.cyan};
    font-family: "Space Mono", monospace;
    font-size: 27px;
    font-weight: ${weights.bold};
    text-align: right;
  }
`;

const IconPosition = styled.span`
  position: relative;
  bottom: 2.2rem;
  left: 0.6rem;
`;

export default TCInputBox;
