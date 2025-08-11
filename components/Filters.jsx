'use client'

import { useState } from "react";

export const Filters = ({ setCategory, disabled }) => {

    const handleCategoryChange = (category) => {
        setCategory(category);
    };

    return (
        <form className="filter flex gap-y-1">
            <input className="btn btn-square" type="reset" value="×" onClick={() => handleCategoryChange('all')} disabled={disabled}/>
            <input className="btn" type="radio" name="category" aria-label="Starter" onClick={() => handleCategoryChange("Starter")} disabled={disabled} />
            <input className="btn" type="radio" name="category" aria-label="Soup" onClick={() => handleCategoryChange("Soup")} disabled={disabled} />
            <input className="btn" type="radio" name="category" aria-label="Vegan" onClick={() => handleCategoryChange("Vegan")} disabled={disabled} />
            <input className="btn" type="radio" name="category" aria-label="Seafood" onClick={() => handleCategoryChange("Seafood")} disabled={disabled} />
            <input className="btn" type="radio" name="category" aria-label="Grilled" onClick={() => handleCategoryChange("Grilled")} disabled={disabled} />
            <input className="btn" type="radio" name="category" aria-label="Sushi" onClick={() => handleCategoryChange("Sushi")} disabled={disabled} />
            <input className="btn" type="radio" name="category" aria-label="Main Course" onClick={() => handleCategoryChange("Main Course")} disabled={disabled} />
            <input className="btn" type="radio" name="category" aria-label="Noodles" onClick={() => handleCategoryChange("Noodles")} disabled={disabled} />
            <input className="btn" type="radio" name="category" aria-label="Rice Dish" onClick={() => handleCategoryChange("Rice Dish")} disabled={disabled} />
            <input className="btn" type="radio" name="category" aria-label="Dessert" onClick={() => handleCategoryChange("Dessert")} disabled={disabled} />
            <input className="btn" type="radio" name="category" aria-label="Drink" onClick={() => handleCategoryChange("Drink")} disabled={disabled} />
            <input className="btn" type="radio" name="category" aria-label="Non-alcoholic" onClick={() => handleCategoryChange("Non-alcoholic")} disabled={disabled} />
            <input className="btn" type="radio" name="category" aria-label="Tea" onClick={() => handleCategoryChange("Tea")} disabled={disabled} />
            <input className="btn" type="radio" name="category" aria-label="Soda" onClick={() => handleCategoryChange("Soda")} disabled={disabled} />
            <input className="btn" type="radio" name="category" aria-label="Alcohol" onClick={() => handleCategoryChange("Alcohol")} disabled={disabled} />
            <input className="btn" type="radio" name="category" aria-label="Beer" onClick={() => handleCategoryChange("Beer")} disabled={disabled} />
        </form>
    )
}