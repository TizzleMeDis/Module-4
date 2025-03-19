import React from "react";
import styles from "./styles/Inputs.module.css"

export default function GameCalculations({
  qAmount,
  answers,
  setPlay,
  setFinished,
  setCurrentQ,
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
      <div className={styles.inputContainer}>
        <button className={styles.generalBtn} onClick={handlePlay}>Try Again?</button>
      </div>
    </div>
  );
}
