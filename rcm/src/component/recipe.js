import React from "react";

// import "../styles/recipe.css";

export const NO_INGREDIENT = "No ingredient added yet..."

export default function RecipeIngredient({ recipeIngredient }) {

    // const isNoIngredient = recipeIngredient === NO_INGREDIENT;

    return (
        <article>
            <section className="ingredient">
                <div className="id">id: {recipeIngredient.id}</div>
                <div className="name">{recipeIngredient.name}</div>
            </section>
        </article>

    )
}