import React from "react";

export const Guess = ({ guess }) => {
  const defaultGuess = [
    { letter: "", status: "" },
    { letter: "", status: "" },
    { letter: "", status: "" },
    { letter: "", status: "" },
    { letter: "", status: "" },
  ];

  const guessToDisplay = guess.length ? guess : defaultGuess;

  return (
    <p className="guess">
      {guessToDisplay.map(({ letter, status }, index) => (
        <span key={index} className={`cell ${status}`}>
          {letter}
        </span>
      ))}
    </p>
  );
};

export default Guess;
