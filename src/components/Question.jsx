import React from "react";

export default function Question({ index, element, setCurrentQ, setAnswers }) {
  const handleSelectAnswer = (e) => {
    e.preventDefault();
    console.log(`Clicked ${e.target.dataset.answer}`);
    setCurrentQ((prev) => prev + 1);

    if (e.target.dataset.answer === element.correct_answer) {
      console.log("Correct!");
      setAnswers((prevAnswer) => prevAnswer + 1);
    } else {
      console.log("Incorrect..");
    }
  };

  const answerPrompts = (element) => {
    /**
     * need to randomize the order of the question's answers
     * use random number generator to make numbers from 0-3
     * order those numbers in relation to the prompts
     * the numbers represent a hash of the prompts so should randomize
     * question order on the document.
     */

    const answerArray = [...element.incorrect_answers, element.correct_answer];
    console.log(`Correct Answer: ${answerArray[answerArray.length-1]}`)
    for (let i = answerArray.length - 1; i > 0; i--) { // Fisher-Yates-Shuffle
      let j = Math.floor(Math.random() * (i + 1));
      [answerArray[i], answerArray[j]] = [answerArray[j], answerArray[i]];
    }
    console.log(answerArray)
    return answerArray;
  };
  return (
    <div className="questionContainer" key={index}>
      <h2 className="questionTitle">Question {index + 1}:</h2>
      <p
        className="questionPrompt"
        dangerouslySetInnerHTML={{ __html: element.question }}
      ></p>

      <ul className="answersList">
        {answerPrompts(element).map((answer, i) => (
          <li className="answer" key={`${i}`}>
            <button
              data-answer={answer}
              onClick={handleSelectAnswer}
              dangerouslySetInnerHTML={{ __html: answer }}
            ></button>
          </li>
        ))}

        {/* <li className="answer" key={`correct-${index}`}>
          <button
            data-answer={element.correct_answer}
            onClick={handleSelectAnswer}
            dangerouslySetInnerHTML={{ __html: element.correct_answer }}
          ></button> 
        </li>*/}
      </ul>
    </div>
  );
}
