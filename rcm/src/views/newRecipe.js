import React, { useContext, useState } from 'react';

import IngredientsList from '../component/ingredientsList';
import RecipeList from '../component/recipeList';
import { RecipeContext } from '../context/recipeContext';

import "../styles/newrecipe.css";

export default function NewRecipe() {

    const { ingredients, setIngredients, recipeIngredients } = useContext(RecipeContext);
    const [userInput, setUserInput] = useState("");

    // Get the user input
    const userIpuntHandler = (e) => {
        setUserInput(e.target.value);
    };

    // Trigger the fetch using the 'Enter' key or using de search button
    const searchIngredientsHandler = (e) => {
        if (e.key === 'Enter') {
            console.log(userInput);
            searchIngredient(userInput);
        }
    };

    // Fetch for ingredients search
    function searchIngredient() {
        fetch(`https://api.spoonacular.com/food/ingredients/search?query=${userInput}&number=100`,
            {
                method: 'GET',
                headers: {
                    "x-api-key":
                        "d5642d1fd212408ebda361f387f7a4e9"
                },
            }
        )
            .then(response => response.json())
            .then(data => {
                setIngredients(data.results);
                console.log(data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (
        <>
            <div className='container-fluid'>
                <div className='row flex-nowrap'>
                    {/* Left Column */}
                    <section className='col-4 left'>
                        <h1>New Recipe</h1>
                        {/* Ingredients Search Bar + Search Button */}
                        <div className='usrInput'>
                            <input
                                id="ingredientSearch"
                                type='text'
                                placeholder="Ingredient"
                                value={userInput}
                                onChange={userIpuntHandler}
                                onKeyUp={searchIngredientsHandler}
                            />
                            <div onClick={searchIngredient}><i id='searchICO' className="fa-solid fa-magnifying-glass"></i></div>
                        </div>
                        {/* Ingredients Found */}
                        <div className='ingredList'>
                            {ingredients && <IngredientsList />}
                        </div>
                        {/* Footer */}
                        <div className='footer'>
                            <p className='m-0'>{ingredients.length} ingredients found</p>
                        </div>
                    </section>
                    {/* Right Column */}
                    <section className='col-8 align-self-center right'>
                        <div className='recipeNewName'>
                            <input
                                id="recipeName"
                                type='text'
                                placeholder="Recipe name"
                            />
                        </div>
                        {recipeIngredients && <RecipeList />}
                    </section>
                </div>
            </div>
        </>
    )
}