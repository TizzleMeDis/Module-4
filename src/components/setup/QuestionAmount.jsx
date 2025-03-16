import React from "react";

export default function QuestionAmount({ qAmount, setQAmount }) {
  const handleQuestionCountSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const num = Number(e.target.value);
      if (!isNaN(num) && num > 0) {
        setQAmount(num);
        console.log("Question amount set to:", num);
      } else {
        console.log("Invalid input. Enter a valid number 1 or above.");
      }
    }
  };
  return (
    <div className="inputContainer">
      <label className="inputLabel">Amount of Questions:</label>
      <input
        type="number"
        value={qAmount}
        style={{ backgroundColor: "white", color: "black" }}
        onChange={handleQuestionCountSubmit}
        onKeyDown={handleQuestionCountSubmit}
        required
      />
    </div>
  );
}