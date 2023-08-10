import React, { useContext } from "react";
import Recipe from "./recipe"; 
import { RecipeContext } from "../context/recipeContext";

import "../styles/recipeList.css";
// process.env.API_KEY

export default function RecipeList() {
    
    const { recipeIngredients } = useContext(RecipeContext);

    return (
        <>
            <section className="recipeList">
                {recipeIngredients.map((ingredient) => {
                    return <Recipe key={ingredient.id} recipeIngredient={ingredient}  />;
                })}
            </section>
        </>
    )
}