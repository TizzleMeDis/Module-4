import React from "react";

export default function EnterName({ name, setName }) {
  const handleNameSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevents form from reloading
      console.log("Your name is: " + e.target.value);
      setName(e.target.value);
    }
  };

  return (
    <div className="inputContainer">
      <label className="inputLabel">Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ backgroundColor: "white", color: "black" }}
        onKeyDown={handleNameSubmit}
        required
      />
    </div>
  );
}