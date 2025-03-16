import React from "react";

export default function SelectType({ qType, setQType }) {
    const handleQType = (e) => {
        const selectedText = e.target.options[e.target.selectedIndex].text;
        console.log(`Type set to ${selectedText} \nValue is equal to ${e.target.value}`)
        setQType(e.target.value)
    }
  return (
    <div className="inputContainer">
      <label className="inputLabel">Type:</label>
      <select name="type" onChange={handleQType}>
        <option value="">Any Type</option>
        <option value="multiple">Multiple Choice</option>
        <option value="boolean">True/False</option>
      </select>
    </div>
  );
}
