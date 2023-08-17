import React, { useContext } from "react";
import { RecipeContext } from "../context/recipeContext";

import "../styles/ingredient.css";

export default function Ingredient({ ingredient }) {

    const { ingredients,
        setIngredients,
        recipeIngredients,
        setRecipeIngredients } = useContext(RecipeContext);

    const imageURL = "https://spoonacular.com/cdn/ingredients_100x100/"

    async function searchIngredientInfo(id) {
        const response = await fetch(
            `https://api.spoonacular.com/food/ingredients/${id}/information?amount=1`,
            {
                method: 'GET',
                headers: {
                    "x-api-key":
                        "d5642d1fd212408ebda361f387f7a4e9"
                },
            }
        );
        const data = await response.json();

        return data
    }


    const addIngredientToRecipe = async () => {
        try {

            const info = await searchIngredientInfo(ingredient.id);

            const ri = {
                id: ingredient.id,
                image: info.image,
                name: ingredient.name,
                amount: 1,
                units: ["gr","ml"],
                cost: info.estimatedCost.value,
                costUnit: info.estimatedCost.unit,
            }
            setRecipeIngredients([...recipeIngredients, ri])
            setIngredients(ingredients.filter((ingred) => ingredient.id !== ingred.id))
        }
        catch (e) { }
    }


    return (
        <article className="ingredientFound" onClick={addIngredientToRecipe}>
            <section className="img">
                <img src={imageURL + ingredient.image} alt="ingredient" />
            </section>

            <section className="info w-100">
                <div className="name">{ingredient.name}</div>
                <div className="id">ID: {ingredient.id}</div>
            </section>
        </article>

    )
}