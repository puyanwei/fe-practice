import styled from "styled-components";
import { ChangeEvent } from "react";
import { colors } from "../../styles/variables";
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
  margin: 1rem 0;
  > input {
    margin: 0.5rem 0;
    width: 100%;
    height: 1.8rem;
    border: none;
    border-radius: 7px;
    color: ${colors.grey};
    background-color: ${colors.cyan};
    font-family: "Space Mono", monospace;
    font-size: 27px;
    text-align: right;
    background-image: url("../../icons/icon-dollar.svg");
  }
`;

const IconPosition = styled.span`
  position: relative;
  bottom: 2.2rem;
  left: 0.6rem;
`;

export default TCInputBox;
