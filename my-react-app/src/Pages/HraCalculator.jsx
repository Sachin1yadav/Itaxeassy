import React, { useState } from "react";

function HraCalculator() {
  const [rentPaid, setRentPaid] = useState("");
  const [basicSalary, setBasicSalary] = useState("");
  const [da, setDA] = useState("");
  const [commission, setCommission] = useState("");
  const [hraReceived, setHraReceived] = useState("");
  const [hraExemption, setHraExemption] = useState("");
  const [hraTaxable, setHraTaxable] = useState("");
  const [isMetroCity, setIsMetroCity] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const formatAmount = (value) => {
    return value.toLocaleString("en-IN");
  };

  const validateInputs = () => {
    if (
      rentPaid === "" ||
      basicSalary === "" ||
      da === "" ||
      commission === "" ||
      hraReceived === ""
    ) {
      setErrorMessage("Please fill in all input fields ⚠️.");
      return false;
    }

    // Additional validation logic if needed

    return true;
  };

  const calculateHraExemption = () => {
    if (!validateInputs()) {
      return;
    }

    const actualHraReceived = Math.min(hraReceived, 0.5 * basicSalary);
    const excessRent = rentPaid - 0.1 * basicSalary;
    const hraExempt = Math.min(
      actualHraReceived,
      isMetroCity ? 0.5 * basicSalary : 0.4 * basicSalary,
      excessRent
    );

    const hraTaxable = hraReceived - hraExempt;

    setHraExemption(hraExempt);
    setHraTaxable(hraTaxable);
    setErrorMessage("");
  };

  const handleRentPaidChange = (e) => {
    const value = Number(e.target.value.replace(/,/g, ""));
    setRentPaid(value);
  };

  const handleBasicSalaryChange = (e) => {
    const value = Number(e.target.value.replace(/,/g, ""));
    setBasicSalary(value);
  };

  const handleDAChange = (e) => {
    const value = Number(e.target.value.replace(/,/g, ""));
    setDA(value);
  };

  const handleCommissionChange = (e) => {
    const value = Number(e.target.value.replace(/,/g, ""));
    setCommission(value);
  };

  const handleHraReceivedChange = (e) => {
    const value = Number(e.target.value.replace(/,/g, ""));
    setHraReceived(value);
  };

  const resetForm = () => {
    setRentPaid("");
    setBasicSalary("");
    setDA("");
    setCommission("");
    setHraReceived("");
    setHraExemption("");
    setHraTaxable("");
    setIsMetroCity(false);
    setErrorMessage("");
  };

  return (
    <div className="hra-calculator">
      <h1 className="title">HRA Calculator</h1>
      <div className="input-group">
        <label>Rent Paid:</label>
        <input
          type="text"
          value={formatAmount(rentPaid)}
          onChange={handleRentPaidChange}
        />
      </div>
      <div className="input-group">
        <label>Basic Salary:</label>
        <input
          type="text"
          value={formatAmount(basicSalary)}
          onChange={handleBasicSalaryChange}
        />
      </div>
      <div className="input-group">
        <label>DA:</label>
        <input type="text" value={formatAmount(da)} onChange={handleDAChange} />
      </div>
      <div className="input-group">
        <label>Commission (% of turnover):</label>
        <input
          type="text"
          value={formatAmount(commission)}
          onChange={handleCommissionChange}
        />
      </div>
      <div className="input-group">
        <label>HRA Received:</label>
        <input
          type="text"
          value={formatAmount(hraReceived)}
          onChange={handleHraReceivedChange}
        />
      </div>
      <div className="input-group">
        <label>Metro City:</label>
        <input
          type="checkbox"
          checked={isMetroCity}
          onChange={(e) => setIsMetroCity(e.target.checked)}
        />
      </div>
      {hraExemption !== "" && (
        <div className="input-group">
          <label>Exempted HRA:</label>
          <span>{formatAmount(hraExemption)}</span>
        </div>
      )}
      {hraTaxable !== "" && (
        <div className="input-group">
          <label>Taxable HRA:</label>
          <span>{formatAmount(hraTaxable)}</span>
        </div>
      )}
      <div className="ButtonDiv">
        <button onClick={calculateHraExemption}>Calculate</button>
        <button style={{ background: "blue" }} onClick={resetForm}>
          Reset
        </button>
      </div>

      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
}

export default HraCalculator;

// import React, { useState } from 'react';

// function HraCalculator() {
//   const [rentPaid, setRentPaid] = useState(0);
//   const [basicSalary, setBasicSalary] = useState(0);
//   const [da, setDA] = useState(0);
//   const [commission, setCommission] = useState(0);
//   const [hraReceived, setHraReceived] = useState(0);
//   const [hraExemption, setHraExemption] = useState(0);
//   const [hraTaxable, setHraTaxable] = useState(0);
//   const [isMetroCity, setIsMetroCity] = useState(false);

//   const formatAmount = (value) => {
//     return value.toLocaleString('en-IN');
//   };

//   const calculateHraExemption = () => {
//     const actualHraReceived = Math.min(hraReceived, 0.1 * (basicSalary + da));
//     let hraExempt;

//     if (isMetroCity) {
//       hraExempt = 0.5 * (basicSalary + da);
//     } else {
//       hraExempt = 0.4 * (basicSalary + da);
//     }

//     const hraExemption = Math.min(actualHraReceived, hraExempt);
//     const hraTaxable = hraReceived - hraExemption;

//     setHraExemption(hraExemption);
//     setHraTaxable(hraTaxable);
//   };

//   return (
//     <div className="hra-calculator">
//       <h1 className="title">HRA Calculator</h1>
//       <div className="input-group">
//         <label>Rent Paid:</label>
//         <input
//           type="number"
//           value={rentPaid}
//           onChange={(e) => setRentPaid(Number(e.target.value))}
//         />
//       </div>
//       <div className="input-group">
//         <label>Basic Salary:</label>
//         <input
//           type="number"
//           value={basicSalary}
//           onChange={(e) => setBasicSalary(Number(e.target.value))}
//         />
//       </div>
//       <div className="input-group">
//         <label>DA:</label>
//         <input
//           type="number"
//           value={da}
//           onChange={(e) => setDA(Number(e.target.value))}
//         />
//       </div>
//       <div className="input-group">
//         <label>Commission (% of turnover):</label>
//         <input
//           type="number"
//           value={commission}
//           onChange={(e) => setCommission(Number(e.target.value))}
//         />
//       </div>
//       <div className="input-group">
//         <label>HRA Received:</label>
//         <input
//           type="number"
//           value={hraReceived}
//           onChange={(e) => setHraReceived(Number(e.target.value))}
//         />
//       </div>
//       <div className="input-group">
//         <label>Metro City:</label>
//         <input
//           type="checkbox"
//           checked={isMetroCity}
//           onChange={(e) => setIsMetroCity(e.target.checked)}
//         />
//       </div>
//       <button onClick={calculateHraExemption}>Calculate HRA Exemption</button>
//       <div>
//         <label>Exempted HRA:</label>
//         <span>{formatAmount(hraExemption)}</span>
//       </div>
//       <div>
//         <label>Taxable HRA:</label>
//         <span>{formatAmount(hraTaxable)}</span>
//         </div>
//     </div>
//   );
// }

// export default HraCalculator;
