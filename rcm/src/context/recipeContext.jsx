import React, { createContext, useState } from 'react';

export const RecipeContext = createContext();

export default function RecipeContextProvider(props){

    const [ ingredients, setIngredients ] = useState();

    return (
        <RecipeContext.Provider value={{ ingredients, setIngredients }}>
            {props.children}
        </RecipeContext.Provider>
    )
}