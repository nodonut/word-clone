import React from "react";

export const Banner = ({ status, numOfGuesses, answer, handleReset }) => {
  const ResetButton = () => (
    <button className="reset-button" onClick={handleReset}>
      Play Again
    </button>
  );

  const WinningBannerContent = () => (
    <p>
      <strong>Congratulations!</strong> Got it in{" "}
      <strong>{numOfGuesses} guesses</strong>.
      <ResetButton />
    </p>
  );

  const LosingBannerContent = () => (
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
      <ResetButton />
    </p>
  );

  return (
    <div className={`banner ${status}`}>
      {status === "happy" ? <WinningBannerContent /> : <LosingBannerContent />}
    </div>
  );
};

export default Banner;
