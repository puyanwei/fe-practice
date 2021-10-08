import { ChangeEvent, MouseEvent, useState } from "react";
import styled from "styled-components";
import TCButton from "../components/tip-calculator/TCButton";
import TCInputBox from "../components/tip-calculator/TCInputBox";
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
      <h1 className="no-margin">SPLITTER</h1>
      <main>
        <Card colour="white">
          <TCInputBox
            name="bill"
            label="Bill"
            value={bill}
            onChange={(e) => setBill(parseInt(e.target.value))}
          />
          <div className="tip-container">
            <label className="tc-label">Select Tip %</label>
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
          <TCInputBox
            name="people"
            label="Number of People"
            value={people}
            onChange={(e) => setPeople(parseInt(e.target.value))}
          />
          <Card colour={colours.darkCyan}>
            <div className="tip-summary-line">
              <span className="tc-summary">Tip Amount</span>
              <span className="tc-summary-dark">/ person</span>
              <span>{tipAmount}</span>
            </div>
            <div className="tip-summary-line">
              <span className="tc-summary">Total</span>
              <span className="tc-summary-dark">/ person</span>
              <span>{total}</span>
            </div>
            <button className="reset" onClick={resetCalculator}>
              RESET
            </button>
          </Card>
        </Card>
      </main>
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

const Card = styled.div<{ colour: string }>`
  padding: 1rem;
  background-color: ${({ colour }) => colour};
  border-radius: 25px;
`;

export default TipCalculatorPage;
