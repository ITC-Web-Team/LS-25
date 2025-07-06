import React from 'react';
import styles from '../styles/Home.module.css';
const BMIForm = ({ height, weight, onHeightChange, onWeightChange, onSubmit, onReset }) => {
  return (
    <>
      <label>
        Height (cm):
        <input type="number" min="50" max="250" value={height} onChange={onHeightChange} />
      </label>

      <label>
        Weight (kg):
        <input type="number" min="10" max="250" value={weight} onChange={onWeightChange} />
      </label>

      <div className={styles.buttonGroup}>
        <button onClick={onSubmit}>Calculate BMI</button>
        <button onClick={onReset} className={styles.reset}>Reset</button>
      </div>
    </>
  );
};

export default BMIForm;
