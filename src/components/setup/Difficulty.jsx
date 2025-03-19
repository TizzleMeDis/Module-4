import React from "react";
import styles from "../styles/Inputs.module.css"

export default function Difficulty({setDifficulty}) {
  const handleSelectDifficulty = (e) => {
    const selectedText = e.target.options[e.target.selectedIndex].text;
    console.log(
      `Difficulty set to ${selectedText} \nValue is equal to ${e.target.value}`
    );
    setDifficulty(e.target.value);
  };
  return (
    <div className={styles.inputContainer}>
      <label>Difficulty:</label>
      <select name="type" onChange={handleSelectDifficulty}>
        <option value="">Any Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
}
