import { useState, useEffect } from 'react';

export default function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [isCmToFt, setIsCmToFt] = useState(true);
  const [isKgToLbs, setIsKgToLbs] = useState(true);
  const [bmi, setBMI] = useState(null);
  const [bmiComment, setBmiComment] = useState('');

  const convertHeight = () => {
    const val = parseFloat(height);
    if (isNaN(val)) return '✍️...';

    if (isCmToFt) {
      const totalInches = val / 2.54;
      const ft = Math.floor(totalInches / 12);
      const inch = Math.round(totalInches % 12);
      return `${val} cm = ${ft} ft ${inch} in`;
    } else {
      const cm = (val * 2.54).toFixed(1);
      return `${val} in = ${cm} cm`;
    }
  };

  const convertWeight = () => {
    const val = parseFloat(weight);
    if (isNaN(val)) return '✍️...';

    if (isKgToLbs) {
      const lbs = (val * 2.20462).toFixed(1);
      return `${val} kg = ${lbs} lbs`;
    } else {
      const kg = (val / 2.20462).toFixed(1);
      return `${val} lbs = ${kg} kg`;
    }
  };

  useEffect(() => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (isNaN(h) || isNaN(w)) {
      setBMI(null);
      setBmiComment('');
      return;
    }

    const heightCm = isCmToFt ? h : h * 2.54;
    const weightKg = isKgToLbs ? w : w / 2.20462;
    const heightM = heightCm / 100;
    const bmiVal = weightKg / (heightM * heightM);
    setBMI(bmiVal.toFixed(1));

    let comment = '';
    if (bmiVal < 18.5) comment = 'Underweight – eat well!';
    else if (bmiVal < 25) comment = 'Normal – good job!';
    else if (bmiVal < 30) comment = 'Overweight – move more!';
    else comment = 'Obese – take care!';

    setBmiComment(comment);
  }, [height, weight, isCmToFt, isKgToLbs]);

  const bmiFillWidth = () => {
    if (!bmi) return '0%';
    const percent = Math.min((parseFloat(bmi) / 40) * 100, 100);
    return `${percent}%`;
  };

  return (
    <div className="bg-white text-white p-6 max-w-2xl w-full rounded-2xl mt-10 shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">BMI Calculator</h2>

      <div className="mb-5">
        <h3 className="text-lg mb-2">Enter Your Height</h3>
        <div className="flex gap-2">
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder={isCmToFt ? 'Enter cm' : 'Enter inches'}
            className="flex-1 p-2 rounded text-black"
          />
          <button
            onClick={() => {
              setIsCmToFt(!isCmToFt);
              setHeight('');
              setBMI(null);
              setBmiComment('');
            }}
            className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-800 text-white text-lg"
          >
            ⇌
          </button>
        </div>
        <p className="mt-2 text-yellow-400 font-medium">{convertHeight()}</p>
      </div>

      <div className="mb-5">
        <h3 className="text-lg mb-2">Enter Your Weight</h3>
        <div className="flex gap-2">
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={isKgToLbs ? 'Enter kg' : 'Enter lbs'}
            className="flex-1 p-2 rounded text-black"
          />
          <button
            onClick={() => {
              setIsKgToLbs(!isKgToLbs);
              setWeight('');
              setBMI(null);
              setBmiComment('');
            }}
            className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-800 text-white text-lg"
          >
            ⇌
          </button>
        </div>
        <p className="mt-2 text-yellow-400 font-medium">{convertWeight()}</p>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">BMI Result</h3>
        {bmi && (
          <>
            <p className="text-yellow-300 font-bold text-lg mb-2">Your BMI is {bmi}</p>
            <div className="w-full h-4 custom-bmi-gradient rounded-full overflow-hidden">
              <div
                className="h-full bg-purple-500 transition-all duration-700"
                style={{ width: bmiFillWidth() }}
              ></div>
            </div>
            <p className="mt-2 text-orange-400 font-bold">{bmiComment}</p>
          </>
        )}
      </div>
    </div>
  );
}
