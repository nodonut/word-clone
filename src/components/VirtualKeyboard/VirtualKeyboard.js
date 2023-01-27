import React from "react";

export const VirtualKeyboard = ({ handleAddWord, guesses, setGuesses }) => {
  const [word, setWord] = React.useState("");
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  const flatGuesses = guesses.flat();
  const convertWord = (word) => {
    const result = [];
    for (let i = 0; i < word.length; i++) {
      result.push({
        letter: word[i],
        status: "",
      });
    }
    return result;
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (word.length < 5) {
          if (guesses.length === 0) {
            setGuesses([convertWord(word)]);
            return;
          }

          const nextGuesses = guesses.map((guess) => {
            if (guess.length < 5) {
              return convertWord(word);
            }

            return guess;
          });
          console.log(nextGuesses);

          setGuesses(nextGuesses);
        } else if (word.length === 5) {
          handleAddWord(word);
          setWord("");
        }
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
