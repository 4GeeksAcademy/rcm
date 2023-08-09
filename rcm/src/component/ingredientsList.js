import React from "react";
import Ingredient from "./ingredient";

import "../styles/ingredientsList.css";

export default function IngredientsList({ ingRes, ingSearch }) {

    const ingredient = ingRes.results;

    return (
        <main>

            <section className="ingredients">
                {ingRes.results.map((ingredients) => {
                    return <Ingredient key={ingredients.id} ingred={ingredients}  />;
                })}
            </section>
        </main>
    )
}