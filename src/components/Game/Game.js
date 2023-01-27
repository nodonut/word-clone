import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import DisplayGuess from "../DisplayGuess";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner";
import VirtualKeyboard from "../VirtualKeyboard";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [userWon, setUserWon] = React.useState(false);

  const handleAddGuess = (guess) => {
    const nextGuesses = [...guesses];
    const result = checkGuess(guess, answer);
    if (checkIfWon(result)) {
      setUserWon(true);
    }
    nextGuesses.push(result);
    setGuesses(nextGuesses);
  };

  const handleAddWord = (word) => {
    const nextGuesses = [...guesses.slice(guesses.length + 1, -1)];
    const result = checkGuess(word, answer);
    if (checkIfWon(result)) {
      setUserWon(true);
    }
    nextGuesses.push(result);
    setGuesses(nextGuesses);
  };

  const checkIfWon = (result) => {
    for (let i = 0; i < result.length; i++) {
      if (result[i].status !== "correct") {
        return false;
      }
    }
    return true;
  };

  return (
    <>
      <DisplayGuess guesses={guesses} />
      {userWon ? (
        <Banner status="happy" numOfGuesses={guesses.length} />
      ) : guesses.length === 6 && !userWon ? (
        <Banner status="sad" answer={answer} />
      ) : (
        <>
          <GuessInput handleAddGuess={handleAddGuess} />
          <VirtualKeyboard
            guesses={guesses}
            handleAddWord={handleAddWord}
            setGuesses={setGuesses}
          />
        </>
      )}
    </>
  );
}

export default Game;
