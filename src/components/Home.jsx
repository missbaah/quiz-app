import React from "react";
import "../App.css";
import { useParams } from "react-router-dom";

const Home = () => {
  const { categoryName } = useParams();

  const handleClick = (name) => {
    window.location.href = `/category/${categoryName}=${name}`;
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
          Math
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
          Geography
        </button>
      </section>
    </main>
  );
};

export default Home;
