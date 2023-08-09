import React, { useContext, useState } from 'react';

import IngredientsList from '../component/ingredientsList';
import { RecipeContext } from '../context/recipeContext';

import "../styles/newrecipe.css";

export default function NewRecipe() {

    const { ingredients, setIngredients } = useContext(RecipeContext);

    const [userInput, setUserInput] = useState("");

    // Get the user input
    const userIpuntHandler = (e) => {
        setUserInput(e.target.value);
    };

    const searchIngredientsHandler = (e) => {
        if (e.key === 'Enter') {
            console.log(userInput);
            searchIngredient(userInput);
        }
    };

    // Trigger the fetch to search the ingredients
    function searchIngredient() {
        fetch(`https://api.spoonacular.com/food/ingredients/search?apiKey=d5642d1fd212408ebda361f387f7a4e9&query=${userInput}&number=100`)
            .then(response => response.json())
            .then(data => {

                setIngredients(data);
                console.log(data);

            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (
        <>
                <div className='split left'>
                    <section className='leftSide'>
                        <h1>New Recipe</h1>
                        <div className='usrInput'>
                            <input
                                id="ingredientSearch"
                                type='text'
                                placeholder="Ingredient"
                                value={userInput}
                                onChange={userIpuntHandler}
                                onKeyUp={searchIngredientsHandler}
                            />
                            <div onClick={searchIngredient}><i className="fa-solid fa-magnifying-glass"></i></div>
                        </div>
                    </section>

                    <div className='ingredList'>
                        {ingredients && <IngredientsList />}
                    </div>

                    <div className='footer'>
                        <p className='m-0'>4Geeks Academy</p>
                    </div>

                </div>

                <div className='split right'>

                </div>
        </>


    )
}