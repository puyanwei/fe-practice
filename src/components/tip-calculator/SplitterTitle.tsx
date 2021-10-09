import styled from "styled-components";
import IconSplitterTitle from "../../icons/IconSplitterTitle";

const SplitterTitle = () => (
  <Layout>
    <IconSplitterTitle />
  </Layout>
);

const Layout = styled.span`
  width: 87px;
  display: block;
  margin: 0 auto;
  padding: 1.5rem 0;
`;

export default SplitterTitle;
