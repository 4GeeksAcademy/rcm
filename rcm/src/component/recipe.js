import React from "react";

import "../styles/recipe.css";

export const NO_INGREDIENT = "No ingredient added yet..."

export default function Recipe({ ingredient }) {

    // const isNoIngredient = recipeIngredient === NO_INGREDIENT;


    return (
        <article>
            <section className="ingredientInfo">
                <div className="container">
                    <div className="row">
                        <div className="col-4 info">
                            <div id="ingredientName">{ingredient.name}</div>
                            <div id="recipeID">ID: {ingredient.id}</div>
                        </div>
                        <div className="col-4 amount">
                            <input id="ingredientAmount"
                                type='number'
                                defaultValue={ingredient.amount} />
                            <select id="dd_units" name="units">
                                {ingredient.units.map((unit) => (
                                    <option value={unit}>{unit}</option>))}
                            </select>
                        </div>
                        <div className="col-4 cost">
                            <input id="ingredientAmount"
                                type='number'
                                defaultValue={ingredient.cost} />
                            <span id="costUnit">{ingredient.costUnit}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="ingredientProperties">
                <select className="umDB"></select>

            </section> */}


        </article>

    )
}