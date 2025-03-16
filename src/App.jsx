import { useState, useEffect } from "react";
import { WelcomeText, Setup, Questionnaire, Header } from "./components";
import "./App.css";

function App() {
  const [flag, setFlag] = useState(false); // if the user started the game.
  const [play, setPlay] = useState(false); // to start the questionnare
  const [finished, setFinished] = useState(false); // to end the game and Calculate
  const [name, setName] = useState("");

  const [qAmount, setQAmount] = useState(10);
  const [category, setCategory] = useState(0);
  const [difficulty, setDifficulty] = useState("any");
  const [qType, setQType] = useState("multiple");

  const gameState = {
    flag,
    play,
    setPlay,
    name,
    setName,
    qAmount,
    setQAmount,
    category,
    setCategory,
    difficulty,
    setDifficulty,
    qType,
    setQType,
  };

  const API_URL = "https://opentdb.com/api.php";
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState(0);

  const questionState = {
    questions,
    setQuestions,
    currentQ,
    setCurrentQ,
    answers,
    setAnswers,
  };

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  //----------- fetch for data from trivia data base -----------//
  useEffect(() => {
    const fetchData = async () => {
      if (!play) return;

      try {
        let url = `${API_URL}?amount=${qAmount}`;
        if (category != 0) {
          url += `&category=${category}`;
        }
        if (difficulty != "any") {
          url += `&difficulty=${difficulty}`;
        }
        if (qType != "any") {
          url += `&type=${qType}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        console.log("data break down: ", data);

        setQuestions(data.results);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, [play]);
  //------------------------------------------------------------*/

  const handlePlay = () => {
    console.log("Playing Game...");
    setFlag(true);
  };

  return (
    <>
      <div className="headerContainer">
        {play && <Header />}
        {!play && <WelcomeText />}
        {/* Conditionally render input field when flag is true */}
        {flag && !play && <Setup {...gameState} />}
        {play && <Questionnaire {...questionState} />}
        {/* Conditionally render button when flag is false */}
        {!flag && <button onClick={handlePlay}>Play Game?</button>}
      </div>
    </>
  );
}

export default App;
