import React from "react";
import RecipeDisplay from "./RecipeDisplay";

function RecipeList({ recipes, deleteRecipe }) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <RecipeDisplay recipes={recipes} deleteRecipe={deleteRecipe} />
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
