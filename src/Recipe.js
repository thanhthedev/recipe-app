import React from "react";
import style from "./recipe.module.css";
const Recipe = ({ title, calories, image, ingredients }) => {
  const wholeCalories = Math.floor(calories);
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <p>{wholeCalories} cal</p>
      <img src={image} alt="food" className={style.image} />
      <ul>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
