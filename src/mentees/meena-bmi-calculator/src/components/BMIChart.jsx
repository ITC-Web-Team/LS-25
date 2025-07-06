import React from 'react';
import styles from '../styles/Home.module.css';
const BMIChart = () => {
  const categories = [
    { label: 'Underweight', range: '< 18.5', color: styles.resultUnderweight },
    { label: 'Normal', range: '18.5 - 24.9', color: styles.resultNormal },
    { label: 'Overweight', range: '25 - 29.9', color: styles.resultOverweight },
    { label: 'Obese', range: '30+', color: styles.resultObese },
  ];

  return (
    <div className={styles.chartContainer}>
      <h2>BMI Categories</h2>
      <table className={styles.bmiTable}>
        <thead>
          <tr>
            <th>Category</th>
            <th>BMI Range</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat, i) => (
            <tr key={i} className={cat.color}>
              <td>{cat.label}</td>
              <td>{cat.range}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BMIChart;
