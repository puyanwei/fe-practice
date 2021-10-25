import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <Layout>
      <h1 className="center">Frontend Practice</h1>
      <p>
        Practice website projects mainly from
        <a href="https://www.frontendmentor.io/">Frontend Mentor</a>. All pages
        using React with Typescript
      </p>
      <Link to="/tip-calculator">Tip Calculator</Link> - from&nbsp;
      <a href="https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX">
        this
      </a>
      &nbsp;challenge. Uses
      <a href="https://styled-components.com/">Styled Components</a> for css.
      <br />
      <Link to="/furniture-shop">Furniture Shop</Link> - from&nbsp;
      <a href="https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq">
        this
      </a>
      &nbsp;challenge. Uses{' '}
      <a href="https://tailwindcss.com/">Tailwind for css</a>
    </Layout>
  );
};

const Layout = styled.div`
  font-family: 'Roboto', sans-serif;
  max-width: 40rem;
  margin: 1rem auto;
  padding: 0 1rem;
`;

export default HomePage;
