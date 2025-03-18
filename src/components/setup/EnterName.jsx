import React, { useEffect, useState, useRef } from "react";

export default function EnterName({ name, setName, fade, setFade, setShow, flag }) {
  const [showHelpText, setShowText] = useState(false);
  const nameReference = useRef(null); // ✅ Fixed typo (null instead of nul)

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 1000);
  }, [flag]);

  const handleNameSubmit = (e) => {//Just in case user presses Enter on the keyboard when focused on the input
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleClick = (e) => { //Handling button press and prevent refresh of the screen.
    e.preventDefault();
    handleSubmit();
  }

  const handleSubmit = () => {//processess and sees if name is added or not.
    if (!nameReference.current.value.trim()) {
      alert("Add your name and press enter");
      return;
    }

    setFade(true); // Start fade-out
    setTimeout(() => {
      setName(nameReference.current.value);
      setFade(false); // Reset fade for next transition
      setShow(true);
      setShowText(false);
    }, 300); // Matches CSS transition time
  };

  return (
    <div className={`inputContainer ${fade ? "fade-out" : "fade-in"}`}>
      <label className="inputLabel">Name:</label>
      <input
        ref={nameReference}
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
        style={{ backgroundColor: "white", color: "black" }}
        onKeyDown={handleNameSubmit}
        required
      />
      {showHelpText && (
        <span className="help-text fade-in">
          <button className="enterNameBtn" onClick={handleClick}>Press Enter</button>
        </span>
      )}
    </div>
  );
}