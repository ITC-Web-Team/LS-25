import { useState } from 'react';
import './UnitConverter.css';

export default function UnitConverter() {
  const [meters, setMeters] = useState('');
  const [inches, setInches] = useState('');

  const handleMetersChange = (e) => {
    const value = e.target.value;
    setMeters(value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      setInches((num * 39.3701).toFixed(2));
    } else {
      setInches('');
    }
  };

  const handleInchesChange = (e) => {
    const value = e.target.value;
    setInches(value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      setMeters((num / 39.3701).toFixed(4));
    } else {
      setMeters('');
    }
  };

  return (
    <div className="meter-inch-converter">
      <h2>Meter ↔ Inch Converter</h2>
      <div className="converter-fields">
        <div className="field-group">
          <label>Meters:</label>
          <input
            type="number"
            value={meters}
            onChange={handleMetersChange}
            placeholder="Enter meters"
          />
        </div>
        <div className="field-group">
          <label>Inches:</label>
          <input
            type="number"
            value={inches}
            onChange={handleInchesChange}
            placeholder="Enter inches"
          />
        </div>
      </div>
    </div>
  );
}
