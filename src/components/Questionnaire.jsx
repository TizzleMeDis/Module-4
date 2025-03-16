import React from "react";
import Question from "./Question";

export default function Questionnaire({
  questions,
  currentQ,
  setCurrentQ,
  answers,
  setAnswers,
}) {
  return (
    <div>
      {questions.map(
        (element, index) =>
          currentQ == index && (
            <Question
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
