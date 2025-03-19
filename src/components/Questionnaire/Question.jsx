import React, { useState, useEffect } from "react";
import styles from "../styles/Inputs.module.css";

export default function Question({ index, element, setCurrentQ, setAnswers }) {
  const [answeredQuestion, setAnsweredQuestion] = useState(false);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);


  // Shuffle answers only once when the component mounts
  useEffect(() => {
    const shuffleAnswers = () => {
      const answerArray = [...element.incorrect_answers, element.correct_answer];
      for (let i = answerArray.length - 1; i > 0; i--) { // Fisher-Yates-Shuffle
        let j = Math.floor(Math.random() * (i + 1));
        [answerArray[i], answerArray[j]] = [answerArray[j], answerArray[i]];
      }
      return answerArray;
    };

    setShuffledAnswers(shuffleAnswers());
  }, [element]); // Re-shuffle only when a new question is loaded


  const handleSubmitAnswer = (e) => {
    e.preventDefault();
    const selected = document.querySelector("input[name='answer']:checked")
    if (!selected) {
      alert("Select your answer before submitting!")
      return;
    }

    console.log(
      `${
        selected.value == element.correct_answer
          ? " CORRECT!"
          : " WRONG!"
      }`
    );

    setAnsweredQuestion(true)
    if (selected.value === element.correct_answer) {
      setAnswers((prevAnswer) => prevAnswer + 1);
    } else {
      setAnswers((prevAnswer) => prevAnswer) //Just to cause a rerender
    }
  }

  const handleNextQuestion = (e) => {
    e.preventDefault();
    console.log("Next Question");
    setCurrentQ((prev) => prev + 1);
    setAnsweredQuestion(false);
  };

  return (
    <div className={styles.questionContainer} key={index}>
      <h2 className={styles.questionTitle}>Question {index + 1}:</h2>
      <p
        className={styles.questionPrompt}
        dangerouslySetInnerHTML={{ __html: element.question }}
      ></p>

      <ul className={styles.answersList}>
        {shuffledAnswers.map((answer, i) => (
          <li
            className={`${styles.generalBtn} ${
              answeredQuestion && (answer == element.correct_answer ? styles.correct : styles.incorrect)
            }`}
            key={`${i}`}
          >
            <input
              type="radio"
              name="answer"
              className={styles.answerBtn}
              value={answer}
            />
            <label
              data-answer={answer}
              dangerouslySetInnerHTML={{ __html: answer }}
            ></label>
          </li>
        ))}
      </ul>

      <div className={styles.answerButtons}>
        <button
          className={styles.generalBtn}
          onClick={handleSubmitAnswer}
          style={
            answeredQuestion
              ? { visibility: "hidden", touchAction: "none" }
              : { visibility: "visible", touchAction: "" }
          }
        >
          Submit Answer
        </button>

        <button
          className={styles.generalBtn}
          onClick={handleNextQuestion}
          style={
            answeredQuestion
              ? { visibility: "visible", touchAction: "" }
              : { visibility: "hidden", touchAction: "none" }
          }
        >
          Next Question
        </button>
      </div>
    </div>
  );
}
