import React, { createContext, useState } from 'react';

export const RecipeContext = createContext();

export default function RecipeContextProvider(props){

    const [ ingredients, setIngredients ] = useState();
    const [ recipeIngredients, setRecipeIngredients ] = useState([]);

    return (
        <RecipeContext.Provider value={{ 
            ingredients, 
            setIngredients,
            recipeIngredients,
            setRecipeIngredients }}>
            {props.children}
        </RecipeContext.Provider>
    )
}