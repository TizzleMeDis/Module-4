import React from "react";

export default function QuestionAmount({ qAmount, setQAmount }) {
  const handleInputChange = (e) => {
    setQAmount(e.target.value); // Update state as the user types
  };

  const handleQuestionCountSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const num = Number(qAmount);
      if (!isNaN(num) && num > 0) {
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
        onChange={handleInputChange} // ✅ Update input as user types
        onKeyDown={handleQuestionCountSubmit} // ✅ Handle Enter key
        required
      />
    </div>
  );
}