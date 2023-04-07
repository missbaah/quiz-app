import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import he from "he";

const Category = () => {
  const location = useLocation();
  const categoryName = new URLSearchParams(location.search).get("categoryName");
  const [questions, setQuestions] = useState([]);

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

  console.log(questions);

  const ListOfQuestions = questions.map((qtn) => {
    return <p key={qtn.question}>{he.decode(qtn.question)}</p>;
  });

  return (
    <div>
      <h3>{categoryName}</h3>
      <div>{ListOfQuestions}</div>
    </div>
  );
};

export default Category;
