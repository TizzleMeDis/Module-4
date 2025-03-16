import React from "react";

export default function SubmitButton({ play, setPlay }) {
  const handlePlayButton = (e) => {
    e.preventDefault();
    console.log(`Play the game now ${play}`)
    setPlay(!play)
  }
  return (
    <div className="inputContainer">
      <button className="submitBtn" onClick={handlePlayButton}>
        Submit
      </button>
    </div>
  );
}