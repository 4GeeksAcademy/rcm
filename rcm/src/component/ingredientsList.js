import React, {useContext} from "react";
import Ingredient from "./ingredient";
import { RecipeContext } from "../context/recipeContext";


import "../styles/ingredientsList.css";

export default function IngredientsList() {
    
    const { ingredients } = useContext(RecipeContext);

    return (
        <main>

            <section className="ingredients">
                {ingredients.results.map((ingredient) => {
                    return <Ingredient key={ingredient.id} ingredient={ingredient}  />;
                })}
            </section>
        </main>
    )
}