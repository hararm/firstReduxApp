import {combineReducers} from 'redux'
import recipes from 'reducers/recipes';
import ingredients from 'reducers/ingredients';

export default combineReducers({
	recipes: recipes,
	ingredients: ingredients
});

