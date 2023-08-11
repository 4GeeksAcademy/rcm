import React, { useContext } from "react";
import { RecipeContext } from "../context/recipeContext";

import "../styles/recipe.css";

export const NO_INGREDIENT = "No ingredient added yet..."

export default function Recipe({ recipeIngredient }) {

    // const isNoIngredient = recipeIngredient === NO_INGREDIENT;

    const { dataLoaded } = useContext(RecipeContext);

    // if (!dataLoaded ) return <p>...loading</p>

    return (
        <article>
           
            <section className="recipeIngredient">
            <div className="lines">
                <div className="recipeID">id: {recipeIngredient.id}</div>
                <div className="ingredientName">{recipeIngredient.name}</div>
                {/* <div className="ingredientName">{recipeIngredient.cost}</div>
                <div className="ingredientName">{recipeIngredient.costUnit}</div> */}
                </div>
            </section>
            
            
        </article>

    )
}