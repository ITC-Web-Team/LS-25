import React, { useState } from 'react';
import './BMICalculator.css';

function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState('');

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!h || !w || h <= 0 || w <= 0) {
      setResult('Please enter valid height and weight!');
      return;
    }

    const heightInMeters = h / 100;
    const bmi = w / (heightInMeters ** 2);
    const roundedBMI = bmi.toFixed(1);

    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 24.9) category = 'Normal weight';
    else if (bmi < 29.9) category = 'Overweight';
    else category = 'Obese';

    setResult(`Your BMI is ${roundedBMI} (${category})`);
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>

      <div className="input-group">
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="e.g. 170"
        />
      </div>

      <div className="input-group">
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="e.g. 65"
        />
      </div>

      <button onClick={calculateBMI}>Calculate BMI</button>

      <div id="result">{result}</div>
    </div>
  );
}

export default BMICalculator;
