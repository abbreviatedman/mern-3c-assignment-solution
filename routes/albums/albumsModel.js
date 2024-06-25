/*
    1. Set up an album model
*/

// 1a. Import mongoose
const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;

// 1b. Create an album schema
const albumSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
      default: "",
    },

    artist: {
      type: String,
      lowercase: true,
      required: true,
      default: "",
    },

    userFavorite: {
      type: [
        {
          type: ObjectId,
          ref: "User",
        },
      ],
    },
  },

  { timestamps: true }
);

// 1c. Create the album model
const Album = mongoose.model("Album", albumSchema);

// 1d. Export the album model
module.exports = Album;

/*
    9. Make the albums related to the users
*/
// 9a. Define a Schema variable

// 1b. Create an album schema

// 1c. Create the album model

// 1d. Export the Album model
