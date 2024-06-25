const mongoose = require("mongoose");

const {ObjectId} = mongoose.Schema.Types;

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },

    favoriteAlbums: {
      type: [
        {
          type: ObjectId,
          ref: "Album"
        }
      ]
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
