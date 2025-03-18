import React, { useEffect, useState } from "react";

export default function EnterName({ name, setName, fade, setFade, setShow, flag }) {
  const [showHelpText, setShowText] = useState(false)
  const handleNameSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevents form reload

      setFade(true); // Start fade-out
      setTimeout(() => {
        setName(e.target.value);
        setFade(false); // Reset fade for next transition
        setShow(true);
        setShowText(false)
      }, 300); // Matches CSS transition time
    }
  };

  useEffect(() => {
    setTimeout(()=> {
      setShowText(true)
    }, 1000)
    setTimeout(() => {

    }, 1200)

  }, [flag])
  return (
    <div className={`inputContainer ${fade ? "fade-out" : "fade-in"}`}>
      <label className="inputLabel">Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ backgroundColor: "white", color: "black" }}
        onKeyDown={handleNameSubmit}
        required
      />
      {showHelpText && <span className="help-text fade-in">Press Enter </span>}
    </div>
  );
}