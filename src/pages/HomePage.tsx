import { Link } from "react-router-dom";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Layout>
      <h1>Frontend Practice</h1>

      <Link to="/tip-calculator">Tip Calculator</Link>
    </Layout>
  );
};

const Layout = styled.div`
  text-align: center;
`;

export default HomePage;
