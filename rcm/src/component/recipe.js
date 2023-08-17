import React, { useState, useContext } from "react";
import { RecipeContext } from "../context/recipeContext";

import "../styles/recipe.css";

export default function Recipe({ ingredient }) {

    const [showDelete, setShowDelete] = useState(false);
    const { setRecipeIngredients } = useContext(RecipeContext);

    const removeTask = (key) => {
        setRecipeIngredients(i => i.filter((ingred) => key !== ingred.id))
    }

    return (
        <article>
            <section className="ingredientInfo"
                onMouseEnter={() => setShowDelete(true)}
                onMouseLeave={() => setShowDelete(false)}
            >
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
                        <div className="col-3 cost">
                            <input id="ingredientAmount"
                                type='number'
                                defaultValue={ingredient.cost} />
                            <span id="costUnit">{ingredient.costUnit}</span>
                        </div>
                        <div className="col-1 delete">
                            {showDelete && (<p className='delete' onClick={() => removeTask(ingredient.id)}>X</p>)}
                        </div>

                    </div>
                </div>
            </section>

        </article>

    )
}