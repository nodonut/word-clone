import React from "react";
import { range } from "../../utils";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

export const DisplayGuess = ({ guesses }) => {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess guess={guesses[num] || ""} key={num} />
      ))}
    </div>
  );
};

export default DisplayGuess;
