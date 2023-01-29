import React from "react";

export const VirtualKeyboard = ({ guesses }) => {
  const [word, setWord] = React.useState("");
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  const flatGuesses = guesses.flat();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      {rows.map((row, index) => (
        <div key={index} className="keyboard">
          {row.map((letter) => {
            const status = flatGuesses.find(
              (guess) => guess.letter === letter
            )?.status;

            return (
              <button
                key={letter}
                className={`key cell ${status}`}
                onClick={() => {
                  setWord(word + letter);
                }}
                type="submit"
              >
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
