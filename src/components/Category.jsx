import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import he from "he";

const Category = () => {
  const location = useLocation();
  const categoryName = new URLSearchParams(location.search).get("categoryName");
  const [questions, setQuestions] = useState([]);
  const [num, setNum] = useState(0);

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

  const amount = 5; // set the number of questions you want to fetch
  const difficulty = "easy"; // set the difficulty level of the questions

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

  const ListOfQuestions = questions.map((qtn) => {
    const decodedQuestion = he.decode(qtn.question);
    const decodedCorrectAnswer = he.decode(qtn.correct_answer);
    const decodedIncorrectAnswers = qtn.incorrect_answers.map((answer) =>
      he.decode(answer)
    );
    const allAnswers = [
      ...decodedIncorrectAnswers,
      decodedCorrectAnswer,
    ].sort(); // Combine and sort all answers
    return (
      <div key={qtn.question}>
        <p>{decodedQuestion}</p>
        <ul>
          {allAnswers.map((answer) => (
            <li
              key={answer}
              className={
                answer === decodedCorrectAnswer ? "correct" : "incorrect"
              }
            >
              {answer}
            </li>
          ))}
        </ul>
      </div>
    );
  });

  console.log(ListOfQuestions[num]);

  return (
    <div>
      <h3>{categoryName}</h3>
      {ListOfQuestions[num]}
      <button
        style={{ display: num < 5 ? "block" : "none" }}
        onClick={() => {
          if (num < 5) {
            setNum(num + 1);
          } else {
            return <Score />;
          }
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Category;
