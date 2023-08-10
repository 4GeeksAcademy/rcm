import React, { useContext } from "react";
// import Ingredient from "./ingredient";
import { RecipeContext } from "../context/recipeContext";
import RecipeIngredient from "./recipe"; 


import "../styles/recipeList.css";
process.env.API_KEY

export default function RecipeList() {
    
    const { recipeIngredients } = useContext(RecipeContext);

    return (
        <main>

            <section className="ingredients">
                {recipeIngredients.map((ingredient) => {
                    return <RecipeIngredient key={ingredient.id} recipeIngredient={ingredient}  />;
                })}
            </section>
        </main>
    )
}