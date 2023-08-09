import React, { useState, useEffect, useContext } from "react";

import "../styles/ingredient.css";

export default function Ingredient({ingredient}) {

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

    return (
        <article>
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