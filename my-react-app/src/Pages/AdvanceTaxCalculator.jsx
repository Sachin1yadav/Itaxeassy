import React, { useState } from "react";

function AdvanceTaxCalculator() {
  const [taxPayer, setTaxPayer] = useState("Domestic Company");
  const [isSection115BAC, setIsSection115BAC] = useState(false);
  const [netTaxableIncome, setNetTaxableIncome] = useState("");
  const [relief, setRelief] = useState("");
  const [tdsTcsMatAmtCreditUtilized, setTdsTcsMatAmtCreditUtilized] =
    useState("");
  const [incomeTax, setIncomeTax] = useState("");
  const [surcharge, setSurcharge] = useState("");
  const [educationCess, setEducationCess] = useState("");
  const [secondaryCess, setSecondaryCess] = useState("");
  const [totalTaxLiability, setTotalTaxLiability] = useState("");
  const [assessedTax, setAssessedTax] = useState("");

  const calculateAdvanceTax = () => {
    if (taxPayer === "Domestic Company") {
      const taxRate = isSection115BAC ? 0.25 : 0.3;
      const incomeTax = netTaxableIncome * taxRate;
      const surcharge = incomeTax > 10000000 ? incomeTax * 0.07 : 0;
      const educationCess = incomeTax * 0.04;
      const secondaryCess = educationCess * 0.01;
      const totalTaxLiability =
        incomeTax + surcharge + educationCess + secondaryCess;
      const assessedTax =
        totalTaxLiability - relief - tdsTcsMatAmtCreditUtilized;

      setIncomeTax(incomeTax);
      setSurcharge(surcharge);
      setEducationCess(educationCess);
      setSecondaryCess(secondaryCess);
      setTotalTaxLiability(totalTaxLiability);
      setAssessedTax(assessedTax);
    } else if (taxPayer === "Foreign Company") {
      const taxRate = isSection115BAC ? 0.4 : 0.5;
      const incomeTax = netTaxableIncome * taxRate;
      const surcharge = incomeTax > 10000000 ? incomeTax * 0.02 : 0;
      const educationCess = incomeTax * 0.04;
      const secondaryCess = educationCess * 0.01;
      const totalTaxLiability =
        incomeTax + surcharge + educationCess + secondaryCess;
      const assessedTax =
        totalTaxLiability - relief - tdsTcsMatAmtCreditUtilized;

      setIncomeTax(incomeTax);
      setSurcharge(surcharge);
      setEducationCess(educationCess);
      setSecondaryCess(secondaryCess);
      setTotalTaxLiability(totalTaxLiability);
      setAssessedTax(assessedTax);
    } else if (taxPayer === "Firms") {
      const taxRate = isSection115BAC ? 0.3 : 0.36;

      const incomeTax = netTaxableIncome * taxRate;
      const surcharge = incomeTax > 250000 ? incomeTax * 0.05 : 0;
      const educationCess = incomeTax * 0.04;
      const secondaryCess = educationCess * 0.01;
      const totalTaxLiability =
        incomeTax + surcharge + educationCess + secondaryCess;
      const assessedTax =
        totalTaxLiability - relief - tdsTcsMatAmtCreditUtilized;

      setIncomeTax(incomeTax);
      setSurcharge(surcharge);
      setEducationCess(educationCess);
      setSecondaryCess(secondaryCess);
      setTotalTaxLiability(totalTaxLiability);
      setAssessedTax(assessedTax);
    } else if (taxPayer === "LLP") {
      // const taxRate = isSection115BAC ? 0.3 : 0.36;

      const taxRate =
        netTaxableIncome <= 250000
          ? 0
          : netTaxableIncome <= 500000
          ? 0.05
          : netTaxableIncome <= 1000000
          ? 0.2
          : 0.3;
      const incomeTax = netTaxableIncome * taxRate;
      const surcharge = incomeTax > 300000 ? incomeTax * 0.05 : 0;
      const educationCess = incomeTax * 0.04;
      const secondaryCess = educationCess * 0.01;
      const totalTaxLiability =
        incomeTax + surcharge + educationCess + secondaryCess;
      const assessedTax =
        totalTaxLiability - relief - tdsTcsMatAmtCreditUtilized;

      setIncomeTax(incomeTax);
      setSurcharge(surcharge);
      setEducationCess(educationCess);
      setSecondaryCess(secondaryCess);
      setTotalTaxLiability(totalTaxLiability);
      setAssessedTax(assessedTax);
    } else if (taxPayer === "LLP") {
      const taxRate = isSection115BAC ? 0.3 : 0.36;
      const incomeTax = netTaxableIncome * taxRate;
      const surcharge = incomeTax > 10000 ? incomeTax * 0.2 : 1;
      const educationCess = incomeTax * 0.04;
      const secondaryCess = educationCess * 0.01;
      const totalTaxLiability =
        incomeTax + surcharge + educationCess + secondaryCess;
      const assessedTax =
        totalTaxLiability - relief - tdsTcsMatAmtCreditUtilized;

      setIncomeTax(incomeTax);
      setSurcharge(surcharge);
      setEducationCess(educationCess);
      setSecondaryCess(secondaryCess);
      setTotalTaxLiability(totalTaxLiability);
      setAssessedTax(assessedTax);
    } else if (taxPayer === "HUF") {
      // const taxRate = isSection115BAC ? 0.3 : 0.36;
      const taxRate = isSection115BAC
        ? netTaxableIncome <= 250000
          ? 0
          : netTaxableIncome <= 500000
          ? 0.05
          : netTaxableIncome <= 750000
          ? 0.1
          : netTaxableIncome <= 1000000
          ? 0.15
          : netTaxableIncome <= 1250000
          ? 0.2
          : netTaxableIncome <= 1500000
          ? 0.25
          : 0.3
        : netTaxableIncome <= 250000
        ? 0
        : netTaxableIncome <= 500000
        ? 0.05
        : netTaxableIncome <= 750000
        ? 0.1
        : netTaxableIncome <= 1000000
        ? 0.15
        : netTaxableIncome <= 1250000
        ? 0.2
        : netTaxableIncome <= 1500000
        ? 0.25
        : 0.3;
      const incomeTax = netTaxableIncome * taxRate;
      const surcharge = incomeTax > 250000 ? incomeTax * 0.5 : 0;
      const educationCess = incomeTax * 0.04;
      const secondaryCess = educationCess * 0.01;
      const totalTaxLiability =
        incomeTax + surcharge + educationCess + secondaryCess;
      const assessedTax =
        totalTaxLiability - relief - tdsTcsMatAmtCreditUtilized;

      setIncomeTax(incomeTax);
      setSurcharge(surcharge);
      setEducationCess(educationCess);
      setSecondaryCess(secondaryCess);
      setTotalTaxLiability(totalTaxLiability);
      setAssessedTax(assessedTax);
    } else if (taxPayer === "Co-operative Society") {
      // const taxRate = isSection115BAC ? 0.3 : 0.36;
      const taxRate =
        netTaxableIncome <= 10000
          ? 1
          : netTaxableIncome <= 20000
          ? 0.2
          : netTaxableIncome <= 1000000
          ? 0.3
          : 0.3;
      const incomeTax = netTaxableIncome * taxRate;
      const surcharge = incomeTax > 250000 ? incomeTax * 0.5 : 0;
      const educationCess = incomeTax * 0.04;
      const secondaryCess = educationCess * 0.01;
      const totalTaxLiability =
        incomeTax + surcharge + educationCess + secondaryCess;
      const assessedTax =
        totalTaxLiability - relief - tdsTcsMatAmtCreditUtilized;

      setIncomeTax(incomeTax);
      setSurcharge(surcharge);
      setEducationCess(educationCess);
      setSecondaryCess(secondaryCess);
      setTotalTaxLiability(totalTaxLiability);
      setAssessedTax(assessedTax);
    }
    // Add logic for other tax payer types if needed
  };

  const handleTaxPayerChange = (e) => {
    setTaxPayer(e.target.value);
  };

  const handleIsSection115BACChange = (e) => {
    setIsSection115BAC(e.target.checked);
  };

  const handleNetTaxableIncomeChange = (e) => {
    setNetTaxableIncome(Number(e.target.value));
  };

  const handleReliefChange = (e) => {
    setRelief(Number(e.target.value));
  };

  const handleTdsTcsMatAmtCreditUtilizedChange = (e) => {
    setTdsTcsMatAmtCreditUtilized(Number(e.target.value));
  };
  const resetForm = () => {
    setTaxPayer("Domestic Company");
    setIsSection115BAC(false);
    setNetTaxableIncome(0);
    setRelief(0);
    setTdsTcsMatAmtCreditUtilized(0);
    setIncomeTax(0);
    setSurcharge(0);
    setEducationCess(0);
    setSecondaryCess(0);
    setTotalTaxLiability(0);
    setAssessedTax(0);
  };

  if (taxPayer === "Individual") {
    alert("Its under the procces, till then try others thing");
    setTaxPayer("Domestic Company");
  }

  return (
    <div className="advance-tax-calculator">
      <h1 className="title">Advance Tax Calculator</h1>
      <div className="input-group">
        <label>Tax Payer:</label>
        <select value={taxPayer} onChange={handleTaxPayerChange}>
          <option value="HUF">HUF</option>

          <option value="Individual">Individual</option>
          <option value="Domestic Company">Domestic Company</option>
          <option value="Foreign Company">Foreign Company</option>
          <option value="Firms">Firms</option>
          <option value="LLP">LLP</option>
          <option value="Co-operative Society">Co-operative Society</option>
        </select>
      </div>

      <div className="input-group">
        <label>Opting for Taxation under Section 115BAC:</label>
        <input
          type="checkbox"
          checked={isSection115BAC}
          onChange={handleIsSection115BACChange}
        />
      </div>

      <div className="input-group">
        <label>Net Taxable Income:</label>
        <input
          type="number"
          value={netTaxableIncome}
          onChange={handleNetTaxableIncomeChange}
        />
      </div>

      <div className="input-group">
        <label>Relief:</label>
        <input type="number" value={relief} onChange={handleReliefChange} />
      </div>

      <div className="input-group">
        <label>TDS/TCS/MAT (AMT) Credit Utilized:</label>
        <input
          type="number"
          value={tdsTcsMatAmtCreditUtilized}
          onChange={handleTdsTcsMatAmtCreditUtilizedChange}
        />
      </div>
      <div>
        <h2>Tax Details</h2>
        <div className="input-group">
          <label>Income Tax:</label>
          <span>{incomeTax}</span>
        </div>
        <div className="input-group">
          <label>Surcharge:</label>
          <span>{surcharge}</span>
        </div>
        <div className="input-group">
          <label>Education Cess:</label>
          <span>{educationCess}</span>
        </div>
        <div className="input-group">
          <label>Secondary and Higher Education Cess:</label>
          <span>{secondaryCess}</span>
        </div>
        <div className="input-group">
          <label>Total Tax Liability:</label>
          <span>{totalTaxLiability}</span>
        </div>
        <div className="input-group">
          <label>Assessed Tax:</label>
          <span>{assessedTax}</span>
        </div>
      </div>

      <div className="ButtonDiv">
        <button onClick={calculateAdvanceTax}>Calculate</button>
        <button style={{ background: "blue" }} onClick={resetForm}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default AdvanceTaxCalculator;
