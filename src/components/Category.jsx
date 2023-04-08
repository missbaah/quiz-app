import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Score from "./Score";
import he from "he";
import NumContext from "../context/NumContext";

const Category = () => {
  const location = useLocation();
  const categoryName = new URLSearchParams(location.search).get("categoryName");
  const [questions, setQuestions] = useState([]);
  const [num, setNum] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [score, setScore] = useState(0);
  const [resetStyle, setResetStyle] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [disabled, setDisabled] = useState(false);

  // setting category for API
  let categoryNum = 0;
  if (categoryName === "Math") {
    categoryNum = 19;
  } else if (categoryName === "Science") {
    categoryNum = 17;
  } else if (categoryName === "Geography") {
    categoryNum = 22;
  } else if (categoryName === "History") {
    categoryNum = 23;
  }

  // fetching data from API based on category
  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=5&category=${categoryNum}&difficulty=easy&type=multiple`
    )
      .then((response) => response.json())
      .then((data) => {
        setQuestions([...data.results]);
      })
      .catch((error) => {
        console.log("Error:" + error);
      });
  }, []);

  // rendering the data
  const ListOfQuestions = questions.map((qtn) => {
    const decodedQuestion = he.decode(qtn.question); // question
    const decodedCorrectAnswer = he.decode(qtn.correct_answer); // correct answer
    const decodedIncorrectAnswers = qtn.incorrect_answers.map((answer) =>
      he.decode(answer)
    ); // incorrect answers

    const allAnswers = [
      ...decodedIncorrectAnswers,
      decodedCorrectAnswer,
    ].sort(); // Combine and sort all answers

    // handling when the answer is clicked
    const handleAnswerClick = (clickedAnswer) => {
      setClicked(true);
      setSelectedAnswer(clickedAnswer);

      // setting the score based on if the answer is correct
      if (clickedAnswer === decodedCorrectAnswer) {
        setScore(score + 1);
      }

      // disabling the button after the first time the button is clicked
      setDisabled(true);
    };

    return (
      <div key={qtn.question} className="question">
        <p>{decodedQuestion}</p>
        <div className="btns">
          {/* rending answers */}
          {allAnswers.map((answer) => (
            <button
              disabled={disabled}
              type="text"
              key={answer}
              value={answer}
              onClick={() => {
                handleAnswerClick(answer);
              }}
              className={
                clicked && answer === decodedCorrectAnswer
                  ? "correct"
                  : clicked && answer === selectedAnswer
                  ? "incorrect"
                  : resetStyle
                  ? ""
                  : ""
              }
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
    );
  });

  return (
    <div
      className="category
    "
    >
      <NumContext.Provider value={{ num, setNum }}>
        <h3>{categoryName}</h3>
        <Score scoreNum={score} />
        {ListOfQuestions[num]}

        <div className="ctl-btns">
          <button
            style={{ display: num < 5 ? "block" : "none" }}
            onClick={() => {
              if (num < 5) {
                setNum(num + 1);
              }
              setClicked(false);
              setSelectedAnswer("");
              setResetStyle(true);
              setDisabled(false);
            }}
          >
            Next
          </button>
          <button
            style={{ display: num > 4 ? "block" : "none" }}
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Back to home
          </button>
        </div>
      </NumContext.Provider>
    </div>
  );
};

export default Category;
