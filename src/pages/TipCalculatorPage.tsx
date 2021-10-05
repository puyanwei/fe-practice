import { ChangeEvent, MouseEvent, useState } from "react";
import TCButton from "../components/tip-calculator/TCButton";

const TipCalculatorPage = () => {
  const [tip, setTip] = useState(0);
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);

  const handleBill = (e: ChangeEvent<HTMLInputElement>) =>
    setBill(parseInt(e.target.value));

  const handlePeople = (e: ChangeEvent<HTMLInputElement>) =>
    setPeople(parseInt(e.target.value));

  const handleTip = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const number = parseInt(target.innerText.slice(0, -1));
    setTip(number);
  };

  const checkNumber = (number: number) =>
    isNaN(number) || number === Infinity ? 0 : number;

  const tipAmountCalc = (((tip / 100) * bill) / people).toFixed(2);
  const totalCalc = (parseInt(tipAmountCalc) + bill / people).toFixed(2);

  const tipAmount = checkNumber(parseInt(tipAmountCalc));
  const total = checkNumber(parseInt(totalCalc));

  return (
    <div>
      <h1>SPLITTER</h1>
      <main>
        <h2>Bill</h2>
        <input type="number" name="bill" onChange={handleBill} />
        <div className="tip-container">
          <h2>Select Tip %</h2>
          <TCButton onClick={handleTip}>5%</TCButton>
          <TCButton onClick={handleTip}>15%</TCButton>
          <TCButton onClick={handleTip}>25%</TCButton>
          <TCButton onClick={handleTip}>50%</TCButton>
          <input type="number" placeholder="Custom" />
        </div>
        <h2>Number of People</h2>
        <input type="number" name="people" onChange={handlePeople} />
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
          <button className="reset">RESET</button>
        </div>
      </main>
    </div>
  );
};

export default TipCalculatorPage;
