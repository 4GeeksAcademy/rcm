import React from "react";

import "../styles/recipe.css";

export const NO_INGREDIENT = "No ingredient added yet..."

export default function Recipe({ recipeIngredient }) {

    // const isNoIngredient = recipeIngredient === NO_INGREDIENT;

    return (
        <article>
           
            <section className="recipeIngredient">
            <div className="lines">
                <div className="recipeID">id: {recipeIngredient.id}</div>
                <div className="ingredientName">{recipeIngredient.name}</div>
                </div>
            </section>
            
            
        </article>

    )
}