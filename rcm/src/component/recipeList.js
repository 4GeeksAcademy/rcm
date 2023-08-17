import React, { useContext } from "react";
import Recipe from "./recipe";
import { RecipeContext } from "../context/recipeContext";
import NoRecipe from "./norecipe";

import "../styles/recipeList.css";
// process.env.API_KEY

export default function RecipeList() {

    const { recipeIngredients } = useContext(RecipeContext);

    // Evaluate if there is tasks already, if not, add a text to the first line
    const noIngredientHandler = (arr) => {
        if (arr.length === 0) {
            return (<NoRecipe />);
        } else {
            return recipeIngredients.map((ingredient) => <Recipe key={ingredient.id} ingredient={ingredient} />);
        }
    }

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                {/* LEFT SIDE - RECIPE LIST */}
                <section className="recipeList col-8">
                    {noIngredientHandler(recipeIngredients)}
                </section>

                {/* RIGHT SIDE - COST INFORMATION */}
                <section className="recipeCost col-4">
                    <div className="container-fluid">
                        {/* RECIPE COST */}
                        <section id="cost">
                            <div className="row">
                                <i id="gqm" class="fa-solid fa-circle-info"></i>
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

                        {/* TAX VALUE */}
                        <section id="taxValue">
                            <div className="row">
                                <i id="gqm" class="fa-solid fa-circle-info"></i>
                                <div className="col-2 taxv">
                                    {/* LABEL */}
                                    <span>TAX</span>
                                    <div className="percPMP">
                                        {/* % MATERIA PRIMA */}
                                        <input id="tvInput"
                                            type='number'
                                            defaultValue={88} />
                                        {/* % */}
                                        <p>%</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* SUGGESTED RETAIL PRICE */}
                        <section id="suggestedPrice">
                            <div className="row">
                                <i id="qm" class="fa-solid fa-circle-info"></i>
                                <div className="col-2 pmp">
                                    {/* LABEL */}
                                    <span>EQUIVALENT PERCENTAGE OF RAW MATERIAL</span>
                                    <div className="percPMP">
                                        {/* % MATERIA PRIMA */}
                                        <input id="pmpInput"
                                            type='number'
                                            defaultValue={88} />
                                        {/* % */}
                                        <p>%</p>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                {/* PRECIO SUGERIDO */}
                                <div className="col-2 psv">
                                    {/* LABEL */}
                                    <span>SUGGESTED SALES PRICE</span>
                                    {/* VALOR */}
                                    <div id="psvValue">$ 1234.56</div>
                                </div>
                            </div>

                            <div className="row">
                                {/* PRECIO SUGERIDO + TAX*/}
                                <div className="col-2 psvt">
                                    {/* LABEL */}
                                    <span>SUGGESTED SALES PRICE + TAX</span>
                                    {/* VALOR */}
                                    <div id="psvtValue">$ 1234.56</div>
                                </div>
                            </div>
                        </section>


                        {/* PRECIO REAL DE VENTA */}
                        <section id="salePrice">
                            <div className="row">
                                <i id="gqm" class="fa-solid fa-circle-info"></i>
                                {/* PRECIO REAL DE VENTA */}
                                <div className="col-2 prv">
                                    {/* LABEL */}
                                    <span>REAL SALE PRICE</span>
                                    {/* VALOR */}
                                    <div id="prvValue">$ 1234.56</div>
                                </div>
                            </div>

                            <div className="row">
                                {/* VALOR DEL IMPUESTO */}
                                <div className="col-3 vdt">
                                    {/* LABEL */}
                                    <span>TAX VALUE</span>
                                    {/* VALOR */}
                                    <div id="vdtValue">$ 1234.56</div>
                                </div>
                            </div>

                            <div className="row">
                                {/* MARGEN DE GANANCIA */}
                                <div className="col-2 mdg">
                                    {/* LABEL */}
                                    <span>PROFIT</span>
                                    {/* % & VALOR */}
                                    <div id="mdgs">
                                        <div id="pmdgValue">150 %</div>
                                        <div id="mdgValue">$ 1234.56</div>
                                    </div>

                                </div>
                            </div>

                            <div className="row">
                                {/* VALOR DE VENTA */}
                                <div className="col-2 vdd">
                                    {/* LABEL */}
                                    <span>SALE VALUE</span>
                                    {/* % MATERIA PRIMA */}
                                    <div id="vdv">
                                    <p>$</p>
                                        <input id="vvdInput"
                                            type='number'
                                            defaultValue={1234.56} />
                                    </div>

                                </div>
                            </div>
                        </section>

                    </div>
                </section >
            </div >
        </div >
    )
}