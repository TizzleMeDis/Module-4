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

  const difficultyOptions = ["Easy", "Medium", "Hard"]
  
  return (
    <div className={styles.inputContainer}>
      <label>Difficulty:</label>
      <select name="type" onChange={handleSelectDifficulty}>
        <option value="">Any Difficulty</option>
        {difficultyOptions.map((value, index) => (
          <option key={index} value={value.toLowerCase()}>{value}</option>
        ))}
      </select>
    </div>
  );
}
