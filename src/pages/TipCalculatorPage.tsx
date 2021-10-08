import { ChangeEvent, MouseEvent, useState } from "react";
import styled from "styled-components";
import TCButton from "../components/tip-calculator/TCButton";
import TCInputBox from "../components/tip-calculator/TCInputBox";
import { TCCard } from "../styles/styled-components/TCCard";
import { TCSummaryCard } from "../styles/styled-components/TCSummaryCard";
import { colors, size } from "../styles/variables";

const TipCalculatorPage = () => {
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState(0);
  const [isCustomTip, setIsCustomTip] = useState(false);
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [active, setActive] = useState("");

  const handleTip = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setActive(target.innerText);
    const number = parseFloat(target.innerText.slice(0, -1));
    setIsCustomTip(false);
    setTip(number);
  };

  const handleCustomTip = (e: ChangeEvent<HTMLInputElement>) => {
    setCustomTip(parseFloat(e.target.value));
    setIsCustomTip(true);
  };

  const checkValidNumber = (number: number) =>
    isNaN(number) || number === Infinity ? 0 : number;

  const finalTip = isCustomTip ? customTip : tip;
  const tipAmountCalc = (((finalTip / 100) * bill) / people).toFixed(2);
  const totalCalc = (parseFloat(tipAmountCalc) + bill / people).toFixed(2);
  const tipAmount = checkValidNumber(parseFloat(tipAmountCalc));
  const total = checkValidNumber(parseFloat(totalCalc));

  const resetCalculator = () => {
    setBill(0);
    setCustomTip(0);
    setPeople(0);
    setActive("");
  };

  return (
    <Layout>
      <h1 className="no-margin">SPLITTER</h1>
      <CalculatorLayout>
        <TCCard colour="white" maxWidth="14rem">
          <TipLayout>
            <TCInputBox
              name="bill"
              label="Bill"
              value={bill}
              onChange={(e) => setBill(parseFloat(e.target.value))}
            />
            <label className="tc-label">Select Tip %</label>
            <div className="flex-inbetween">
              <TCButton onClick={handleTip} active={active === "5%"}>
                5%
              </TCButton>
              <TCButton onClick={handleTip} active={active === "10%"}>
                10%
              </TCButton>
              <TCButton onClick={handleTip} active={active === "15%"}>
                15%
              </TCButton>
              <TCButton onClick={handleTip} active={active === "25%"}>
                25%
              </TCButton>
              <TCButton onClick={handleTip} active={active === "50%"}>
                50%
              </TCButton>
              <input
                className="tc-custom-tip"
                type="number"
                placeholder="Custom"
                value={customTip}
                onChange={handleCustomTip}
                onFocus={(e) => setActive("")}
              />
            </div>
            <TCInputBox
              name="people"
              label="Number of People"
              value={people}
              onChange={(e) => setPeople(parseFloat(e.target.value))}
            />
          </TipLayout>
          <TCSummaryCard colour={colors.darkCyan} maxWidth="15rem">
            <div className="tip-summary-line flex-inbetween">
              <div className="line-height-sm">
                <span className="tc-summary">Tip Amount</span>
                <br />
                <span className="tc-summary-dark">/ person</span>
              </div>
              <span className="tc-summary-amount">${tipAmount.toFixed(2)}</span>
            </div>
            <div className="tip-summary-line flex-inbetween margin-ver">
              <div className="line-height-sm">
                <span className="tc-summary">Total</span>
                <br />
                <span className="tc-summary-dark">/ person</span>
              </div>
              <span className="tc-summary-amount">${total.toFixed(2)}</span>
            </div>
            <TCButton
              bgcolor={colors.lightCyan}
              txtColor={colors.darkCyan}
              width="100%"
              onClick={resetCalculator}
            >
              RESET
            </TCButton>
          </TCSummaryCard>
        </TCCard>
      </CalculatorLayout>
    </Layout>
  );
};

const Layout = styled.div`
  height: 100vh;
  color: ${colors.grey};
  background-color: ${colors.cyan};
  @media (min-width: ${size.tablet}) and (max-width: ${size.desktop}) {
    margin: auto 0;
  }
`;

const CalculatorLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: ${size.tablet}) and (max-width: ${size.desktop}) {
    margin-left: 1rem;
  }
`;

const TipLayout = styled.div`
  margin: 0 auto;
  max-width: 14rem;
`;

export default TipCalculatorPage;
