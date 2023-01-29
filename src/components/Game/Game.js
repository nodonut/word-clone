import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput";
import Banner from "../Banner";
import VirtualKeyboard from "../VirtualKeyboard";

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");
  const [answer, setAnswer] = React.useState(sample(WORDS));
  console.log(answer);

  const handleAddGuess = (guess) => {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    if (guess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  };

  const handleReset = () => {
    const nextAnswer = sample(WORDS);
    setAnswer(nextAnswer);
    setGuesses([]);
    setGameStatus("running");
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput gameStatus={gameStatus} handleAddGuess={handleAddGuess} />
      <VirtualKeyboard guesses={guesses} answer={answer} />
      {gameStatus === "won" ? (
        <Banner
          status="happy"
          numOfGuesses={guesses.length}
          handleReset={handleReset}
        />
      ) : gameStatus === "lost" ? (
        <Banner status="sad" answer={answer} handleReset={handleReset} />
      ) : null}
    </>
  );
}

export default Game;
