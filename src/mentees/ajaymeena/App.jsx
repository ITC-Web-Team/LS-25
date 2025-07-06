import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function App() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [result, setResult] = useState();
  const [exchangeRate, setExchangeRate] = useState(85.57);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const currencies = [    'USD', 'INR', 'EUR', 'GBP', 'JPY',
    'AUD', 'CAD', 'CHF', 'CNY', 'SGD'];

  const currencySymbols = {
  USD: '$', INR: '₹', EUR: '€', GBP: '£', JPY: '¥',
  AUD: 'A$', CAD: 'C$', CHF: 'Fr', CNY: '¥', SGD: 'S$'
  };

  useEffect(() => {
    calculateResult();
  }, [amount, fromCurrency, toCurrency]);

  const calculateResult = () => {
    if (fromCurrency === toCurrency) {
      setResult(amount);
    } else {
      const rates = {
          USD: { INR: 85.57, EUR: 0.88, GBP: 0.74, JPY: 144.10, AUD: 0.64, CAD: 1.37, CHF: 0.82, CNY: 7.20, SGD: 1.29 },
          INR: { USD: 0.0117, EUR: 0.0103, GBP: 0.0086, JPY: 1.683, AUD: 0.0075, CAD: 0.016, CHF: 0.0096, CNY: 0.084, SGD: 0.015 },
          EUR: { USD: 1.135, INR: 97.18, GBP: 0.84, JPY: 163.74, AUD: 0.73, CAD: 1.56, CHF: 0.93, CNY: 8.18, SGD: 1.47 },
          GBP: { USD: 1.35, INR: 116.05, EUR: 1.19, JPY: 195.0, AUD: 0.88, CAD: 1.86, CHF: 1.11, CNY: 9.76, SGD: 1.75 },
          JPY: { USD: 0.0069, INR: 0.59, EUR: 0.0061, GBP: 0.0051, AUD: 0.0044, CAD: 0.0095, CHF: 0.0057, CNY: 0.050, SGD: 0.0089 },
          AUD: { USD: 1.55, INR: 133.74, EUR: 1.37, GBP: 1.14, JPY: 226.10, CAD: 2.14, CHF: 1.28, CNY: 11.23, SGD: 2.01 },
          CAD: { USD: 0.73, INR: 62.39, EUR: 0.64, GBP: 0.54, JPY: 106.0, AUD: 0.47, CHF: 0.60, CNY: 5.15, SGD: 0.94 },
          CHF: { USD: 1.22, INR: 104.28, EUR: 1.07, GBP: 0.90, JPY: 175.1, AUD: 0.78, CAD: 1.67, CNY: 8.60, SGD: 1.56 },
          CNY: { USD: 0.139, INR: 11.91, EUR: 0.122, GBP: 0.102, JPY: 20.34, AUD: 0.089, CAD: 0.194, CHF: 0.116, SGD: 0.181 },
          SGD: { USD: 0.775, INR: 66.31, EUR: 0.681, GBP: 0.57, JPY: 129.8, AUD: 0.50, CAD: 1.06, CHF: 0.64, CNY: 5.52 },
      };
      const rate = rates[fromCurrency]?.[toCurrency] || 1;
      setExchangeRate(rate);
      setResult((amount * rate).toFixed(2));
    }
  };

  const handleToggleChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleReset = () => {
    setAmount('');
    setFromCurrency('USD');
    setToCurrency('INR');
    setResult();
    setExchangeRate(85.57);
  };

  const themeClass = isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark';
  const navbarClass = isDarkMode ? 'navbar navbar-expand-lg navbar-dark bg-dark' : 'navbar navbar-expand-lg navbar-light bg-body-light';

  return (
    <div className={themeClass}>

      <nav className={navbarClass}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">

            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="darkModeSwitch"
                checked={isDarkMode}
                onChange={handleToggleChange}
              />
              <label  className={`${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`} htmlFor="darkModeSwitch">
                {isDarkMode ? 'Dark Mode' : 'Light Mode'}
              </label>
            </div>
          </div>
        </div>
      </nav>


        <div className="row" style={{marginLeft:'10px', marginBottom:'10px'}} >
          <div className={`col-lg-7 col-md-8 col-sm-8 p-5 shadow rounded ${isDarkMode ? 'bg-secondary text-light' : 'bg-light text-dark'}`}>
            <h2  className={`${isDarkMode ? 'bg-secondary text-light' : 'bg-light text-dark'}`}>💱 Currency Converter</h2>

            <div className="mb-3">
              <label className={`${isDarkMode ? 'bg-secondary text-light' : 'bg-light text-dark'}`}>Amount</label>
              <input
                type="number"
                min='0'
                className="form-control"
                value={amount}
                onChange={(e) => {
                    const value = parseFloat(e.target.value);
                    if (value < 0) {
                      alert("Amount cannot be negative.");
                      setAmount('');
                    } else {
                      setAmount(value);
                    }
                  }}
                placeholder="Enter amount"
              />
            </div>

            <div className="row" >
              <div className="col-md-6 mb-3">
                <label className={`${isDarkMode ? 'bg-secondary text-light' : 'bg-light text-dark'}`}>From</label>
                <select
                  className="form-select"
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                >
                  {currencies.map((cur) => (
                    <option key={cur} value={cur}>{cur}</option>
                  ))}
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className={`${isDarkMode ? 'bg-secondary text-light' : 'bg-light text-dark'}`}>To</label>
                <select
                  className="form-select"
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                >
                  {currencies.map((cur) => (
                    <option key={cur} value={cur}>{cur}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-3">
              <label className={`${isDarkMode ? 'bg-secondary text-light' : 'bg-light text-dark'}`}>Quick Amounts</label>
              <div className="d-flex flex-wrap gap-2">
                {[1, 10, 50, 100, 500, 1000].map((val) => (
                  <button
                    key={val}
                    className={`btn btn-sm ${isDarkMode ? 'btn-outline-light' : 'btn-outline-primary'}`}
                    onClick={(e) => { e.preventDefault(); setAmount(val); }}
                    style={{ padding: '6px 12px', minWidth: 'auto', width: 'auto' }}
                  >
                    {val} {fromCurrency}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-3">
              <h3 style={{textAlign:'center'}}>{currencySymbols[fromCurrency]}{amount} {fromCurrency} = {currencySymbols[toCurrency]}{result} {toCurrency}</h3>
              <small className={`${isDarkMode ? 'bg-secondary text-light' : 'bg-light text-dark'}`}>Exchange Rate: 1 {currencySymbols[fromCurrency]} = {exchangeRate} {currencySymbols[toCurrency]}</small>
            </div>

            <button className={`btn btn-sm ${isDarkMode ? 'btn-outline-light' : 'btn-outline-primary'}`} onClick={handleReset} style={{ padding: '6px 12px', minWidth: 'auto', width: 'auto' }} >
             Reset
            </button>

          </div>

          <div className="col-lg-4 col-md-10 col-sm-12 my-5">
            <div className={`p-4 shadow rounded ${isDarkMode ? 'bg-secondary text-light' : 'bg-light text-dark'}`}>
              <h5 className="mb-3">INR to USD</h5>
              <ul className="list-unstyled">
                <li>1 INR = 0.012 USD</li>
                <li>5 INR = 0.06 USD</li>
                <li>10 INR = 0.12 USD</li>
                <li>50 INR = 0.6 USD</li>
                <li>100 INR = 1.2 USD</li>
                <li>1000 INR = 12 USD</li>
              </ul>

              <h5 className="mt-4 mb-3">INR to EUR</h5>
              <ul className="list-unstyled">
                <li>1 INR = 0.011 EUR</li>
                <li>5 INR = 0.055 EUR</li>
                <li>10 INR = 0.11 EUR</li>
                <li>50 INR = 0.55 EUR</li>
                <li>100 INR = 1.1 EUR</li>
                <li>1000 INR = 11 EUR</li>
              </ul>
            </div>
          </div>
        </div>


         <div>
          <div className="row g-4">

            <div className="col-md-4" style={{marginLeft:'10px', marginRight:'10px'}}>
              <div className={`card h-100 shadow rounded ${isDarkMode ? 'bg-secondary text-light' : ''}`}>
                <div className="card-body">
                  <h5 className="card-title">🇮🇳 INR - Indian Rupee</h5>
                  <p className="card-text">The Indian Rupee (INR) is the official currency of India. Issued by the Reserve Bank of India.</p>
                  <a href="https://en.wikipedia.org/wiki/Indian_rupee" target="_blank" rel="noreferrer" className={`btn btn-sm ${isDarkMode ? 'btn-outline-light' : 'btn-outline-primary'}`}>More INR info</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className={`card h-100 shadow rounded ${isDarkMode ? 'bg-secondary text-light' : ''}`}>
                <div className="card-body">
                  <h5 className="card-title">🇺🇸 USD - US Dollar</h5>
                  <p className="card-text">The US Dollar (USD) is the most traded currency in the world and the official currency of the USA.</p>
                  <a href="https://en.wikipedia.org/wiki/United_States_dollar" target="_blank" rel="noreferrer" className={`btn btn-sm ${isDarkMode ? 'btn-outline-light' : 'btn-outline-primary'}`}>More USD info</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className={`card h-100 shadow rounded ${isDarkMode ? 'bg-secondary text-light' : ''}`}>
                <div className="card-body">
                  <h5 className="card-title">🇪🇺 EUR - Euro</h5>
                  <p className="card-text">The Euro (EUR) is the official currency of 19 of the 27 European Union member countries.</p>
                  <a href="https://en.wikipedia.org/wiki/Euro" target="_blank" rel="noreferrer" className={`btn btn-sm ${isDarkMode ? 'btn-outline-light' : 'btn-outline-primary'}`}>More Euro info</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      <footer className={`py-3 mt-5 text-center ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        <small>
          📧 support@example.com | 📞 +1 234 567 890 | 📍 123 Main Street, City, Country &nbsp; © 2025 Currency Converter
        </small>
      </footer>

    </div>
  );
}
