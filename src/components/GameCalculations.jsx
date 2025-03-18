import React from "react";

export default function GameCalculations({
  qAmount,
  answers,
  setPlay,
  setFinished,
  setCurrentQ,
  setQuestions,
  setAnswers,
}) {
  const handlePlay = (e) => {
    e.preventDefault();

    setPlay(true);
    setFinished(false);
    setCurrentQ(0);
    setAnswers(0);
  };
  return (
    <div>
      {answers/qAmount > qAmount*.7 && (
        <h1>
          Congrats! You completed {answers}/{qAmount}
        </h1>
      )}
      {answers > 2 && answers < 7 && (
        <h1>
          Almost! You completed {answers}/{qAmount}
        </h1>
      )}
      {answers < 3 && (
        <h1>
          Better luck next time! You completed {answers}/{qAmount}
        </h1>
      )}
      <div className="inputContainer">
        <button onClick={handlePlay}>Play Again?</button>
      </div>
    </div>
  );
}
