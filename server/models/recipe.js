const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'This field is required.'
  },
  category: {
    type: String,
    enum: ['Sauce', 'Starters', 'Main Courses', 'Desserts', 'Drinks'],
    required: 'This field is required.'
  },
  time: {
    type: String
  },
  ingredients: {
    type: Array,
    required: 'This field is required.'
  },
  steps: {
    type: String,
    required: 'This field is required.'
  },
  image: {
    type: String,
    required: 'This field is required.'
  }
});

recipeSchema.index({ name: 'text', ingredients: 'text', steps: 'text' });


module.exports = mongoose.model('Recipe', recipeSchema);