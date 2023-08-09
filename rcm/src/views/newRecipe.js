import React, { useEffect, useState } from 'react';

export default function NewRecipe() {

    const [ingredient, setIngredient] = useState(null);
    const [userInput, setUserInput] = useState("apple");

    function searchIngredient() {
        fetch(`https://api.spoonacular.com/food/ingredients/search?apiKey=8dfeb00eec3741ac9df4189c5d7bfe09&query=${userInput}`, {
            // method: 'GET',
            // headers: {
            //     'X-RapidAPI-Key': '4455ed57b8msh52de2a6f2e613a3p1fac97jsnc0ab1dc04340',
            //     'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
            // }
        })
            .then(res => res.json())
            .then(data => {

                console.log(userInput);
                setIngredient(data);
                console.log(data);

                console.log(ingredient);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        searchIngredient();
    }, []);

    return (

        <div className="ingredient d-flex justify-content-between"
        // onMouseEnter={() => setShowDelete(true)}
        // onMouseLeave={() => setShowDelete(false)}
        >
            {/* {ingredient} */}

        </div>

    )
}