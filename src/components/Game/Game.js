import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import DisplayGuess from "../DisplayGuess";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner";
import VirtualKeyboard from "../VirtualKeyboard";

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [userWon, setUserWon] = React.useState(false);
  const [answer, setAnswer] = React.useState(sample(WORDS));

  const handleAddGuess = (guess) => {
    const nextGuesses = [...guesses];
    const result = checkGuess(guess, answer);
    if (checkIfWon(result)) {
      setUserWon(true);
    }
    nextGuesses.push(result);
    setGuesses(nextGuesses);
  };

  const handleReset = () => {
    const nextAnswer = sample(WORDS);
    setAnswer(nextAnswer);
    setGuesses([]);
    setUserWon(false);
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
        <Banner
          status="happy"
          numOfGuesses={guesses.length}
          handleReset={handleReset}
        />
      ) : guesses.length === 6 && !userWon ? (
        <Banner status="sad" answer={answer} handleReset={handleReset} />
      ) : (
        <>
          <GuessInput handleAddGuess={handleAddGuess} />
          <VirtualKeyboard guesses={guesses} />
        </>
      )}
    </>
  );
}

export default Game;
