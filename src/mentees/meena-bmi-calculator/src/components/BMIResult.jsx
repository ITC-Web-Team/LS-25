import React from 'react';
import styles from '../styles/Home.module.css';
const BMIResult = ({ result }) => {
  const className = result.includes("Underweight")
    ? styles.resultUnderweight
    : result.includes("Normal")
    ? styles.resultNormal
    : result.includes("Overweight")
    ? styles.resultOverweight
    : result.includes("Obese")
    ? styles.resultObese
    : "";

  return result ? <div className={`${styles.result} ${className}`}>{result}</div> : null;
};

export default BMIResult;
