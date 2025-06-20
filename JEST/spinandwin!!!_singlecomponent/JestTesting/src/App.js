import React, { useState } from 'react';
import './App.css';

const SpinWheel = () => {
  const [result, setResult] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);

  const spinWheel = () => {
    if (isSpinning) return;

    const randomNumber = Math.floor(Math.random() * 4) + 1;
    const prizes = [
      "Congratulations! You won a trip to Hawaii!",
      "You've won a gift voucher!",
      "Sorry, better luck next time!",
      "You've won a free spa treatment!",
      "You've won a shopping spree!"
    ];
    setResult(prizes[randomNumber - 1]);

    setIsSpinning(true);

    setTimeout(() => {
      setIsSpinning(false);
    }, 3000); // Adjust the duration of spinning animation if needed
  };

  return (
    <div className="spin-the-wheel">
      <div className={`wheel ${isSpinning ? 'spin-animation' : ''}`} onClick={spinWheel} id="wheel">
        <div className="option o1">1</div>
        <div className="option o2">2</div>
        <div className="option o3">3</div>
        <div className="option o4">4</div>
        <div className="arrow" id="arrow"></div>
      </div>
      {result && <div className="message">{result}</div>}
    </div>
  );
};

export default SpinWheel;
