import IconSplitterTitle from 'icons/tip-calculator-icons/IconSplitterTitle';
import styled from 'styled-components';

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
