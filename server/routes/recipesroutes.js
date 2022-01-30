const express = require('express');
const router = express.Router();

const recipecontroller = require('../controllers/recipescontroller');

router.get('/', recipecontroller.homepage);
router.post('/search', recipecontroller.searchRecipe);
router.get('/categories', recipecontroller.exploreCategories);
router.get('/categories/:id', recipecontroller.exploreCategoriesById);
router.get('/recipes', recipecontroller.exploreRecipes);
router.get('/recipe/:id', recipecontroller.exploreRecipe);
router.get('/random', recipecontroller.exploreRandom);
router.get('/submit-recipe', recipecontroller.submitRecipe);
router.post('/submit-recipe', recipecontroller.submitRecipeOnPost);

module.exports = router;