import { MouseEvent, useState } from "react";
import TCButton from "../components/tip-calculator/TCButton";

const TipCalculatorPage = () => {
  const [tip, setTip] = useState(0);

  const onClick = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const number = parseInt(target.innerText.slice(0, -1));
    setTip(number);
  };

  console.log(tip);

  return (
    <div>
      <h1>SPLITTER</h1>
      <main>
        <h2>Bill</h2>
        <input type="number" />
        <div className="tip-container">
          <h2>Select Tip %</h2>
          <TCButton onClick={onClick}>5%</TCButton>
          <TCButton onClick={onClick}>15%</TCButton>
          <TCButton onClick={onClick}>25%</TCButton>
          <TCButton onClick={onClick}>50%</TCButton>
          <input type="number" placeholder="Custom" />
        </div>
        <h2>Number of People</h2>
        <input type="number" className="text" />
        <div className="tip-summary-card">
          <div className="tip-summary-line">
            <span>Tip Amount</span>
            <span>/ person</span>
            <span>$4.27</span>
          </div>
          <div className="tip-summary-line">
            <span>Tip Amount</span>
            <span>/ person</span>
            <span>$32.79</span>
          </div>
          <button className="reset">RESET</button>
        </div>
      </main>
    </div>
  );
};

export default TipCalculatorPage;
