import { useState, useEffect } from "react";
import {
  WelcomeText,
  Setup,
  Questionnaire,
  Header,
  GameCalculations,
} from "./components";
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

  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState(0);

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const headerSettings = {
    setFinished,
    setPlay,
    setCurrentQ,
    setAnswers,
  };

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

  const questionState = {
    questions,
    setQuestions,
    currentQ,
    setCurrentQ,
    answers,
    setAnswers,
    setFinished,
  };

  const answersState = {
    qAmount,
    answers,
    setCurrentQ,
    setQuestions,
    setAnswers,
    setPlay,
    setFinished,
  };

  const API_URL = "https://opentdb.com/api.php";
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

        console.log(`Fetching from ${url}`);
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
    setFade(true);
    setTimeout(() => {
      setFlag(true);
    }, 300);
  };
  const [fade, setFade] = useState(false); //fading animation
  return (
    <>
      <div className="headerContainer">
        {play && <Header {...headerSettings} />}
        {!play && <WelcomeText />}
        {/* Setup of Game = flag is true and play is NOT true */}
        {flag && !play && <Setup {...gameState} />}
        {/* Playing game = play is true and finished is NOT true */}
        {play && !finished && <Questionnaire {...questionState} />}
        {/* Render when finished is true */}
        {finished && <GameCalculations {...answersState} />}

        {/* Render play button = flag is false */}
        {!flag && (
          <button
            onClick={handlePlay}
            className={`${fade ? "fade-out" : "fade-in"}`}
          >
            Play Game?
          </button>
        )}
      </div>
    </>
  );
}
export default App;
