import {ADD_INGREDIENT} from './action-types'

export const addIngredient = (recipe, name, quantity) => ({
	type: ADD_INGREDIENT, recipe, quantity
});
