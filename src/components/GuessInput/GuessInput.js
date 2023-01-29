import React from "react";

export const GuessInput = ({ handleAddGuess, gameStatus }) => {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    handleAddGuess(guess);
    setGuess("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="guess">Enter guess: </label>
      <input
        required
        disabled={gameStatus !== "running"}
        type="text"
        value={guess.toUpperCase()}
        minLength={5}
        maxLength={5}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
};

export default GuessInput;
