import {combineReducers} from 'redux'
import recipes from 'reducers/ingredients';
import ingredients from 'reducers/recipes';

export default combineReducers({
	recipes: recipes,
	ingredients: ingredients
});

