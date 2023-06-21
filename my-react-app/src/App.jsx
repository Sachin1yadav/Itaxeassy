import React from "react";
import HraCalculator from "./Pages/HraCalculator";
import AdvanceTaxCalculator from "./Pages/AdvanceTaxCalculator";
 

function App() {
  return (
    <div>
      <div>
        <AdvanceTaxCalculator/>
      </div>
      <div>
        <HraCalculator/>
      </div>
    </div>
  );
}

export default App;
