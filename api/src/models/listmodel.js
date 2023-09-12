const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const listSchema = new mongoose.Schema({
    title:{
type: String,
required: true

    },
  userId: {
    type:  [{ type: ObjectId, ref: "User" }],
    required: true,
    ref: "user",
  },
  cardId: {
    type:  [{ type: ObjectId, ref: "Card" }],
    
  },
});

const list = mongoose.model("list", listSchema);

module.exports = list;
