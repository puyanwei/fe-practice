import { ChangeEvent, MouseEvent, useState } from "react";
import styled from "styled-components";
import TCButton from "../components/tip-calculator/TCButton";
import { size, colours } from "../styles/variables";

const TipCalculatorPage = () => {
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState(0);
  const [isCustomTip, setIsCustomTip] = useState(false);
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);

  const handleTip = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const number = parseInt(target.innerText.slice(0, -1));
    setIsCustomTip(false);
    setTip(number);
  };

  const handleCustomTip = (e: ChangeEvent<HTMLInputElement>) => {
    setCustomTip(parseInt(e.target.value));
    setIsCustomTip(true);
  };

  const checkValidNumber = (number: number) =>
    isNaN(number) || number === Infinity ? 0 : number;

  const finalTip = isCustomTip ? customTip : tip;
  const tipAmountCalc = (((finalTip / 100) * bill) / people).toFixed(2);
  const totalCalc = (parseInt(tipAmountCalc) + bill / people).toFixed(2);
  const tipAmount = checkValidNumber(parseInt(tipAmountCalc));
  const total = checkValidNumber(parseInt(totalCalc));

  const resetCalculator = () => {
    setBill(0);
    setCustomTip(0);
    setPeople(0);
  };

  return (
    <Layout>
      <h1>SPLITTER</h1>
      <Card>
        <h2>Bill</h2>
        <input
          type="number"
          name="bill"
          value={bill}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setBill(parseInt(e.target.value))
          }
        />
        <div className="tip-container">
          <h2>Select Tip %</h2>
          <TCButton onClick={handleTip}>5%</TCButton>
          <TCButton onClick={handleTip}>15%</TCButton>
          <TCButton onClick={handleTip}>25%</TCButton>
          <TCButton onClick={handleTip}>50%</TCButton>
          <input
            type="number"
            placeholder="Custom"
            value={customTip}
            onChange={handleCustomTip}
          />
        </div>
        <h2>Number of People</h2>
        <input
          type="number"
          name="people"
          value={people}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPeople(parseInt(e.target.value))
          }
        />
        <div className="tip-summary-card">
          <div className="tip-summary-line">
            <span>Tip Amount</span>
            <span>/ person</span>
            <span>{tipAmount}</span>
          </div>
          <div className="tip-summary-line">
            <span>Total</span>
            <span>/ person</span>
            <span>{total}</span>
          </div>
          <button className="reset" onClick={resetCalculator}>
            RESET
          </button>
        </div>
      </Card>
    </Layout>
  );
};

const Layout = styled.div`
  height: 100vh;
  @media (min-width: 0px) and (max-width: ${size.mobileL}) {
    background-color: ${colours.cyan};
  }
  @media (min-width: ${size.tablet}) and (max-width: ${size.desktop}) {
    background-color: red;
  }
`;

const Card = styled.main`
  background: white;
  border-radius: 25px;
`;

export default TipCalculatorPage;
