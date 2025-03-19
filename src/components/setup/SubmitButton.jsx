import React from "react";
import styles from "../styles/Inputs.module.css"

export default function SubmitButton({setPlay}) {


  const handlePlayButton = (e) => {
    e.preventDefault();
    console.log(`Playing the game now`)
    setPlay(true)
  }
  return (
    <div className={styles.inputContainer}>
      <button className={`${styles.generalBtn} ${styles.submitBtn}`} onClick={handlePlayButton}>
        Submit
      </button>
    </div>
  );
}