import React, { createContext, useState } from 'react';

export const RecipeContext = createContext();

export default function RecipeContextProvider(props){

    const [ ingredients, setIngredients ] = useState([]);
    const [ recipeIngredients, setRecipeIngredients ] = useState([]);
    const [ dataLoaded, setDataLoaded ] = useState(false);

    return (
        <RecipeContext.Provider value={{ 
            ingredients, 
            setIngredients,
            recipeIngredients,
            setRecipeIngredients,
            dataLoaded,
            setDataLoaded }}>
            {props.children}
        </RecipeContext.Provider>
    )
}