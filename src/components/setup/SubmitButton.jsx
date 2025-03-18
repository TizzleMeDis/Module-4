import React from "react";

export default function SubmitButton({ play, setPlay}) {


  const handlePlayButton = (e) => {
    e.preventDefault();
    console.log(`Playing the game now`)
    setPlay(true)
  }
  return (
    <div className="inputContainer">
      <button className="submitBtn" onClick={handlePlayButton}>
        Submit
      </button>
    </div>
  );
}