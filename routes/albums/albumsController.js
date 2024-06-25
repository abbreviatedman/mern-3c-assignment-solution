/*
    2. Begin setting up database functionality
*/
// 2a. Import the Album model
const Album = require("./albumsModel");

// 2b. Write functionality to create an album
async function createAlbum(req, res) {
  try {
    const album = await Album.create(req.body);
    res.json({ message: "success", payload: album });
  } catch (error) {
    const errorPacket = {
      message: "failure to create album",
      payload: error,
    };

    console.log(errorPacket);
    res.status(500).json(errorPacket);
  }
}

// 2c. Export controller functions
module.exports = {
  createAlbum,
};
