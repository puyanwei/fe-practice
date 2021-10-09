import { ChangeEvent, MouseEvent, useState } from "react";
import styled from "styled-components";
import SplitterTitle from "../components/tip-calculator/SplitterTitle";
import TCButton from "../components/tip-calculator/TCButton";
import TCInputBox from "../components/tip-calculator/TCInputBox";
import IconDollar from "../icons/IconDollar";
import IconPerson from "../icons/IconPerson";
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

  const tipPercentages = ["5%", "10%", "15%", "25%", "50%"];

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
      <SplitterTitle />
      <CalculatorLayout>
        <TCCard colour="white" maxWidth="14rem">
          <TipLayout>
            <TCInputBox
              name="bill"
              label="Bill"
              value={bill}
              icon={<IconDollar />}
              onChange={(e) => setBill(parseFloat(e.target.value))}
            />
            <label className="tc-label">Select Tip %</label>
            <div className="flex-inbetween">
              {tipPercentages.map((tipPercent) => (
                <TCButton
                  label={tipPercent}
                  onClick={handleTip}
                  key={tipPercent}
                  active={active === tipPercent}
                />
              ))}
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
              icon={<IconPerson />}
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
              <span className="tc-summary-amount">{tipAmount.toFixed(2)}</span>
            </div>
            <div className="tip-summary-line flex-inbetween margin-ver">
              <div className="line-height-sm">
                <span className="tc-summary">Total</span>
                <br />
                <span className="tc-summary-dark">/ person</span>
              </div>
              <span className="tc-summary-amount">{total.toFixed(2)}</span>
            </div>
            <TCButton
              label="RESET"
              bgcolor={colors.lightCyan}
              txtColor={colors.darkCyan}
              width="100%"
              onClick={resetCalculator}
            />
          </TCSummaryCard>
        </TCCard>
      </CalculatorLayout>
    </Layout>
  );
};

const Layout = styled.div`
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
