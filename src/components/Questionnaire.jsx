import React, { useEffect } from "react";
import Question from "./Questionnaire/Question";

export default function Questionnaire({
  questions,
  currentQ,
  setCurrentQ,
  answers,
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
