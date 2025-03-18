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
      {answers >= Math.floor(qAmount*.70) && (
        <h1>
          Congrats! You completed {answers}/{qAmount}
        </h1>
      )}
      {answers >= Math.floor(qAmount*.30) && answers < Math.floor(qAmount*.70) && (
        <h1>
          Almost! You completed {answers}/{qAmount}
        </h1>
      )}
      {answers < Math.floor(qAmount*.30) && (
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
