import React from "react";

export const Banner = ({ status, numOfGuesses, answer }) => {
  const WinningBannerContent = () => (
    <p>
      <strong>Congratulations!</strong> Got it in{" "}
      <strong>{numOfGuesses} guesses</strong>.
    </p>
  );

  const LosingBannerContent = () => (
    <p>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </p>
  );

  return (
    <div className={`banner ${status}`}>
      {status === "happy" ? <WinningBannerContent /> : <LosingBannerContent />}
    </div>
  );
};

export default Banner;
