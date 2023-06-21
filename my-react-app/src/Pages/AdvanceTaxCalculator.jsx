import React, { useState } from "react";

const AdvanceTaxCalculator = () => {
  const [netTaxableIncome, setNetTaxableIncome] = useState(0);
  const [relief, setRelief] = useState(0);
  const [tdsTcMatAmtCreditUtilized, setTdsTcMatAmtCreditUtilized] = useState(0);
  const [isSection115BAC, setIsSection115BAC] = useState(false);

  const calculateAdvanceTax = () => {
    const incomeTax = Math.floor(netTaxableIncome * 0.30);
    const surcharge = Math.floor(incomeTax * 0.15);
    const educationCess = Math.floor(incomeTax * 0.03);
    const secondaryAndHigherEducationCess = Math.floor(educationCess * 0.02);
    const totalTaxLiability = incomeTax + surcharge + educationCess + secondaryAndHigherEducationCess;
    const assessedTax = isSection115BAC ? netTaxableIncome * 0.15 : totalTaxLiability - tdsTcMatAmtCreditUtilized;

    return {
      incomeTax,
      surcharge,
      educationCess,
      secondaryAndHigherEducationCess,
      totalTaxLiability,
      assessedTax,
    };
  };

  return (
    <div>
      <h1>Advance Tax Calculator for FY 2023-24</h1>
      <form>
        <div>
          <label for="netTaxableIncome">Net Taxable Income</label>
          <input
            type="number"
            id="netTaxableIncome"
            value={netTaxableIncome}
            onChange={(e) => setNetTaxableIncome(e.target.value)}
          />
        </div>
        <div>
          <label for="relief">Relief</label>
          <input
            type="number"
            id="relief"
            value={relief}
            onChange={(e) => setRelief(e.target.value)}
          />
        </div>
        <div>
          <label for="tdsTcMatAmtCreditUtilized">TDS/TCS/MAT (AMT) Credit Utilized</label>
          <input
            type="number"
            id="tdsTcMatAmtCreditUtilized"
            value={tdsTcMatAmtCreditUtilized}
            onChange={(e) => setTdsTcMatAmtCreditUtilized(e.target.value)}
          />
        </div>
        <div>
          <label for="isSection115BAC">Opting for taxation under Section 115BAC?</label>
          <input
            type="checkbox"
            id="isSection115BAC"
            checked={isSection115BAC}
            onChange={(e) => setIsSection115BAC(e.target.checked)}
          />
        </div>
        <button onClick={calculateAdvanceTax}>Calculate Advance Tax</button>
      </form>
      <p>
        The advance tax calculated is as follows:
      </p>
      <pre>
        {JSON.stringify(calculateAdvanceTax(), null, 2)}
      </pre>
    </div>
  );
};

export default AdvanceTaxCalculator;
