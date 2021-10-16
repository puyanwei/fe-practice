import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="margin-sm">
      <h1 className="center">Frontend Practice</h1>
      <p>Practice website projects mainly from <a href="https://www.frontendmentor.io/">Frontend Mentor</a>. All pages using React with Typescript and styled components.</p>
      <Link to="/tip-calculator">Tip Calculator</ Link> - from <a href="https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX">this</a> challenge.
    </div>
  );
};

export default HomePage;
