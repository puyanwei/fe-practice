import React from "react";

const TipCalculatorPage = () => {
  return (
    <div>
      <h1>SPLITTER</h1>
      <main>
        <h2>Bill</h2>
        <input type="number" />
        <div className="tip-container">
          <h2>Select Tip %</h2>
          <button>5%</button>
          <button>10%</button>
          <button>15%</button>
          <button>25%</button>
          <button>50%</button>
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
