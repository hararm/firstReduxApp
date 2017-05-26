export const ADD_RECIPE = 'ADD_RECIPE';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const FETCH_RECIPES = 'FETCH_RECIPES';
export const SET_RECIPES = 'SET_RECIPE';

export const addRecipe = (name) => ({
	type: ADD_RECIPE, name
});

export const fetchRecipes = () => ({
	type: FETCH_RECIPES
});

export const setRecipes = (recipes) => ({
	type: SET_RECIPES,
	recipes
})


export const addIngredient = (recipe, name, quantity) => ({
	type: ADD_INGREDIENT, recipe, quantity
});
