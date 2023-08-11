import React, { useContext } from "react";
import { RecipeContext } from "../context/recipeContext";

import "../styles/ingredient.css";

export default function Ingredient({ ingredient }) {

    const { ingredients,
        setIngredients,
        recipeIngredients,
        setRecipeIngredients,
        setDataLoaded } = useContext(RecipeContext);
 


    const imageURL = "https://spoonacular.com/cdn/ingredients_100x100/"

    // const [ingredInfo, setIngredInfo] = useState("");

    // useEffect(() => {
    //     fetch(`https://api.spoonacular.com/food/ingredients/${ingred.id}/information?apiKey=d5642d1fd212408ebda361f387f7a4e9&amount=1`
    //     )
    //         .then((resp) => resp.json())
    //         .then((data) => {
    //             console.log(data)
    //             setIngredInfo(data);
    //         })
    //         .catch(() => {
    //             console.log("error getting ingredient info");
    //         })
    // }, [ingred.id])

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

        setRecipeIngredients(data);
        console.log(data);
        setDataLoaded(true);
        
    }

    const addIngredientToRecipe = () => {

        // searchIngredientInfo(ingredient.id);

        // var ri = {};

        // setTimeout(() => {
        //     ri = {
        //         id: recipeIngredients.id,
        //         name: recipeIngredients.name,
        //         // costUnit: recipeIngredients.estimatedCost.unit,
        //         // cost: recipeIngredients.estimatedCost.value,
                
        //     }
        //     console.log (ri);
        // }, 2000);
        
        const ri = {
            id: ingredient.id,
            name: ingredient.name,
            // costUnit: recipeIngredients.estimatedCost.unit,
            // cost: recipeIngredients.estimatedCost.value,
            
        }
        // setRecipeIngredients([...recipeIngredients, recipeIngredient])
        // setIngredients({ results: ingredients.results.filter((ingred) => ingredient.id !== ingred.id) })

        setRecipeIngredients([...recipeIngredients, ri])
        setIngredients(ingredients.filter((ingred) => ingredient.id !== ingred.id))
    }



    return (
        <article className="ingredientFound" onClick={addIngredientToRecipe}>
            <section className="img">
                <img src={imageURL + ingredient.image} alt="ingredient" />
            </section>

            <section className="info w-100">
                <div className="name">{ingredient.name}</div>
                <div className="id">id: {ingredient.id}</div>
            </section>
        </article>

    )
}