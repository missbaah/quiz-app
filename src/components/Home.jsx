import React from "react";
import Category from "./Category";

const Home = () => {
  //   const category = ["Math", "Science", "Geography"];

  const handleClick = (categoryName) => {
    window.location.href = `/category?categoryName=${categoryName}`;
  };

  return (
    <main>
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
