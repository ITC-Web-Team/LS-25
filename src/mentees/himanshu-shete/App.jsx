import { useState } from 'react';

const App = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState(null);

  const convert = () => {
    const num = parseFloat(value);
    if (isNaN(num)) {
      setResult('Invalid input');
    } else {
      setResult(num / 1000);
    }
  };

  return (
    <div style={{ padding: '1rem', textAlign: 'center' }}>
      <h3>Meters to Kilometers</h3>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter meters"
      />
      <br /><br />
      <button onClick={convert}>Convert</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
};

export default App;
