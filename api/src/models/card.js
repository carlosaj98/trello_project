const mongoose = require('mongoose')

const CardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  }
});

const Card = mongoose.model("Card", CardSchema);

module.exports = Card