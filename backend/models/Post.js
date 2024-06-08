const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  visibility: {
    type: String,
    enum: ["public", "private"],
    default: "public",
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },

  headerImageUrl: { type: String, required: false },
  className: { type: String, required: false },
});

module.exports = mongoose.model("Post", PostSchema);