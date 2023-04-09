import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Home = () => {
  const handleClick = (categoryName) => {
    window.location.href = `/category?categoryName=${categoryName}`;
  };

  return (
    <main className="home">
      <h2>Choose your category</h2>
      <section className="btns">
        <button
          onClick={() => {
            handleClick("Math");
          }}
        >
          <div className="category-card">
            <h4>Math</h4>
            <p>8 questions</p>
          </div>
        </button>
        <button
          onClick={() => {
            handleClick("Science");
          }}
        >
          Science
        </button>
        <button
          onClick={() => {
            handleClick("Geography");
          }}
        >
          Geography
        </button>
        <button
          onClick={() => {
            handleClick("History");
          }}
        >
          History
        </button>
      </section>
    </main>
  );
};

export default Home;
