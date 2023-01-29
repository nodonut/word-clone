import React from "react";

import { checkGuess } from "../../game-helpers";

export const VirtualKeyboard = ({ guesses, answer }) => {
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      {rows.map((row, index) => (
        <div key={index} className="keyboard">
          {row.map((letter) => {
            const status = validatedGuesses
              .flat()
              .find((guess) => guess.letter === letter)?.status;

            return (
              <button key={letter} className={`key cell ${status}`}>
                {letter}
              </button>
            );
          })}
        </div>
      ))}
    </form>
  );
};

export default VirtualKeyboard;
