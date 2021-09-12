import React from "react";
import MealsSummary from './MealsSummary';
import MealsAvailable from './AvailableMeals';

const Meals = () => {

    return (
        <React.Fragment>
            <MealsSummary />
            <MealsAvailable />
        </React.Fragment>
    );

}

export default Meals;