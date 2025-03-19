import React from "react";
import styles from "../styles/Inputs.module.css"

export default function SelectCategory({setCategory}) {
    const handleSelectCategory = (e) => {
        const selectedText = e.target.options[e.target.selectedIndex].text;
        console.log(`Category chosen: ${selectedText}`)
        setCategory(e.target.value)
    }
    const categoryOptions = [
      "General Knowledge",
      "Entertainment: Books",
      "Entertainment: Film",
      "Entertainment: Music",
      "Entertainment: Musicals & Theatres",
      "Entertainment: Television",
      "Entertainment: Video Games",
      "Entertainment: Board Games",
      "Science & Nature",
      "Science: Computers",
      "Science: Mathematics",
      "Mythology",
      "Sports",
      "Geography",
      "History",
      "Politics",
      "Art",
      "Celebrities",
      "Animals",
      "Vehicles",
      "Entertainment: Comics",
      "Science: Gadgets",
      "Entertainment: Japanese Anime & Manga",
      "Entertainment: Cartoon & Animations"
    ];
  return (
    <div className={styles.inputContainer}>
      <label className="inputLabel">Category:</label>
      <select
        name="trivia_category"
        onChange={handleSelectCategory}
      >
        <option value="">Any Category</option>
        {
          categoryOptions.map((option, index) => (
            <option key={index} value={index+9}>{option}</option>
          ))
        }
      </select>
    </div>
  );
}