import { MEALS } from "../../data/dummy-data";
import { SET_FILTERS, TOGGLE_FAVORITE } from "../actions/meals";
const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};
const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingFav = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if(existingFav >= 0){
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingFav, 1)
        return {...state, favoriteMeals: updatedFavMeals}
      }else{
        const meal = state.meals.find(meal => meal.id === action.mealId);
        return {...state, favoriteMeals: state.favoriteMeals.concat(meal)}
      }
    case SET_FILTERS: 
      const appliedFilters = action.filters;
      const filteredMeals = state.meals.filter((meal) => {
        if(appliedFilters.glutenFree && !meal.isGlutenFree) return false;
        if(appliedFilters.lactoseFree && !meal.isLactoseFree) return false;
        if(appliedFilters.vege && !meal.isVegertarian) return false;
        if(appliedFilters.vegan && !meal.isVegan) return false;
        return true;
      });
      return {...state, filteredMeals: filteredMeals}
    default:
      return state;
  }
  return state;
};

export default mealsReducer;
