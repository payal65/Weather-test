import React, { useRef } from "react";
import "./App.css";

const Cities = [
  { name: "None", defaultTemp: null, zipcode: 0 },
  { name: "Delhi", defaultTemp: 20, zipcode: 110001 },
  { name: "Mumbai", defaultTemp: 26, zipcode: 400001 },
  { name: "Chennai", defaultTemp: 28, zipcode: 600001 },
  { name: "Kolkata", defaultTemp: 23, zipcode: 700001 },
];
function App() {
  const citydropRef = useRef(null);
  const zipcodeRef = useRef(null);
  const tempRef = useRef(null);

  const handleCityChange = () => {
    const selectedCity = citydropRef.current.value;
    const selectedCityData = Cities.find((city) => city.name === selectedCity);
    tempRef.current = selectedCityData.defaultTemp;
  };

  return (
    <div class="App">
      <div class="DropdownDiv">
        <label class="LabelText">Dropdown Box</label>
        <select
          class="DropdownMenu"
          id="cityDropdown"
          ref={citydropRef}
          onChange={handleCityChange}
        >
          {Cities.map((city) => (
            <option key={city} value={city}>
              {city.name}
            </option>
          ))}
        </select>
      </div>

      <div class="InputText">
        <label class="LabelText">Zipcode Input</label>
        <input class="InputField" />
      </div>

      <div class="Functionality">
        <button class="SearchButton">Search</button>
        <button class="ResetButton">Reset</button>
      </div>

      <div class="OutputBox">
        <div class="Tempdisplay">
          {tempRef.current !== null && (
            <div>Temperature: {tempRef.current}°C</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
