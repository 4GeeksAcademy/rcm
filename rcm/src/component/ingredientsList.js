import React, { useContext } from "react";
import Ingredient from "./ingredient";
import { RecipeContext } from "../context/recipeContext";

import "../styles/ingredientsList.css";

export default function IngredientsList() {
    
    const { ingredients } = useContext(RecipeContext);

    return (
        <>
        {/* Ingredients Found List */}
            <section className="ingredientsList">
                {ingredients.map((ingredient) => {
                    return <Ingredient key={ingredient.id} ingredient={ingredient}  />;
                })}
            </section>
        </>
    )
}