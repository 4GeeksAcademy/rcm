import React, { useContext } from "react";
import Recipe from "./recipe";
import { RecipeContext } from "../context/recipeContext";

import "../styles/recipeList.css";
// process.env.API_KEY

export default function RecipeList() {

    const { recipeIngredients } = useContext(RecipeContext);

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                {/* LEFT SIDE - RECIPE LIST */}
                <section className="recipeList col-8">
                    {recipeIngredients.map((ingredient) => {
                        return <Recipe key={ingredient.id} ingredient={ingredient} />;
                    })}
                </section>

                {/* RIGHT SIDE - COST INFORMATION */}
                <section className="recipeCost col-4">
                    <div className="container-fluid">
                        <section id="cost">

                            <div className="row">
                                {/* COSTO TOTAL DE INGREDIENTES */}
                                <div className="col-2 cti">
                                    {/* LABEL */}
                                    <span>INGREDIENTS TOTAL COST</span>
                                    {/* VALOR */}
                                    <div id="ctiValue">$ 1234.56</div>
                                </div>
                            </div>

                            <div className="row">
                                {/* MARGEN DE ERROR Y VARIAION */}
                                <div className="col-3 mev">
                                    {/* LABEL */}
                                    <span>ERROR MARGIN AND VARIATION</span>
                                    {/* PORCENTAJE ESTABLECIDO POR EL USUARIO */}
                                    <input id="mevInput"
                                        type='number'
                                        defaultValue={88} />
                                        {/* % */}
                                        <p>%</p>
                                    {/* VALOR */}
                                    <div id="mevValue">$ 1234.56</div>
                                </div>
                            </div>

                            <div className="row">
                                {/* COSTO TOTAL DE LA PREPARACION */}
                                <div className="col-2 ctp">
                                    {/* LABEL */}
                                    <span>PREPARATION TOTAL COST</span>
                                    {/* VALOR */}
                                    < div id="ctpValue">$ 1234.56</div>
                                </div>
                            </div>

                            <div className="row">
                                {/* COSTO POR PORCION */}
                                <div className="col-2 cpp">
                                    {/* LABEL */}
                                    <span>PORTION COST</span>
                                    {/* VALOR */}
                                    <div id="cppValue">$ 1234.56</div>
                                </div>
                            </div>

                        </section>
                        
                    </div>
                </section >
            </div >
        </div >
    )
}