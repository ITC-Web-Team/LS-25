import React, { useState } from 'react';
import BMIForm from '../components/BMIForm';
import BMIResult from '../components/BMIResult';
import styles from '../styles/Home.module.css';
import BMIChart from '../components/BMIChart';

const Home = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState('');

  const calculateBMI = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);

    if (!h || !w) {
      setResult("Please enter valid height and weight.");
      return;
    }

    const bmi = w / (h * h);
    let category = '';

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";

    setResult(`Your BMI is ${bmi.toFixed(2)} (${category})`);
  };

  const resetForm = () => {
    setHeight('');
    setWeight('');
    setResult('');
  };

  return (
    <div className={styles.container}>
      <h1>BMI Calculator</h1>
      <BMIForm
        height={height}
        weight={weight}
        onHeightChange={(e) => setHeight(e.target.value)}
        onWeightChange={(e) => setWeight(e.target.value)}
        onSubmit={calculateBMI}
        onReset={resetForm}
      />
      <BMIResult result={result} />
      <BMIChart />
    </div>
  );
};

export default Home;
