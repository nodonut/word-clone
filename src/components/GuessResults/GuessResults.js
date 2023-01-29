import React from "react";
import { range } from "../../utils";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

export const GuessResults = ({ guesses, answer }) => {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess value={guesses[num]} key={num} answer={answer} />
      ))}
    </div>
  );
};

export default GuessResults;
