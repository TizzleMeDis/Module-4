import React, { useEffect } from "react";
import Question from "./Questionnaire/Question";

export default function Questionnaire({
  questions,
  currentQ,
  setCurrentQ,
  name,
  setAnswers,
  setFinished,
}) {
  useEffect(() => {
    if (currentQ >= questions.length && questions.length > 0) {
      handleCompletion();
    }
  }, [currentQ, questions.length]);

  const handleCompletion = () => {
    console.log("GAME COMPLETED!");
    setFinished(true);
  };
  return (
    <div>
      {currentQ == questions.length - 1 && <h1>Last Question!</h1>}
      {currentQ != questions.length - 1 && <h2>{name} {currentQ + 1}/{questions.length}</h2>}
      {questions.map(
        (element, index) =>
          currentQ == index && (
            <Question
              key={index}
              index={index}
              element={element}
              setCurrentQ={setCurrentQ}
              setAnswers={setAnswers}
            />
          )
      )}
    </div>
  );
}
