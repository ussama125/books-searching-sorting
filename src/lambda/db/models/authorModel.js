const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    collection: "Authors",
  }
);

const Author = mongoose.model("Authors", authorSchema);
exports.Author = Author;
  