import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const HomePage = () => {
  return (
    <Layout>
      <h1 className="center title">Frontend Practice</h1>
      <br />
      <p className="text-sm">
        Practice website projects mainly from&nbsp;
        <a href="https://www.frontendmentor.io/">Frontend Mentor</a>. All pages
        using React with Typescript
      </p>
      <br />
      <div className="project-list">
        <Link to="/tip-calculator">Tip Calculator</Link> - from&nbsp;
        <a href="https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX">
          this
        </a>
        &nbsp;challenge. Uses&nbsp;
        <a href="https://styled-components.com/">Styled Components</a> for css.
        <br />
        <Link to="/furniture-shop">Furniture Shop</Link> - from&nbsp;
        <a href="https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq">
          this
        </a>
        &nbsp;challenge. Uses&nbsp;
        <a href="https://tailwindcss.com/">Tailwind</a>&nbsp;for css
      </div>
    </Layout>
  );
};

const Layout = styled.div`
  max-width: 20rem;
  margin: 1rem auto;
  padding: 0 1rem;
  font-family: 'Roboto', sans-serif;
  font-size: small;

  > .title {
    font-size: xx-large;
  }

  .project-list {
    font-size: small;
  }
`;

export default HomePage;
