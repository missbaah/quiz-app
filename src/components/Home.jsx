import React from "react";
import "../App.css";
import science from "../assets/atom.png";
import math from "../assets/calculator.png";
import geography from "../assets/globe.png";
import history from "../assets/history.png";
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
          <img src={math} alt="math signs" />
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
          <img src={science} alt="atom" />
          <div className="category-card">
            <h4>Science</h4>
            <p>8 questions</p>
          </div>
        </button>
        <button
          onClick={() => {
            handleClick("Geography");
          }}
        >
          <img src={geography} alt="globe" />
          <div className="category-card">
            <h4>Geography</h4>
            <p>8 questions</p>
          </div>
        </button>
        <button
          onClick={() => {
            handleClick("History");
          }}
        >
          <img src={history} alt="history" />
          <div className="category-card">
            <h4>History</h4>
            <p>8 questions</p>
          </div>
        </button>
      </section>
    </main>
  );
};

export default Home;
