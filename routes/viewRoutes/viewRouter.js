const express = require("express");
const router = express.Router();

const {
  getHomePage,
  getAlbumPage,
  getOneAlbumPage,
  getUserPage,
  getOneUserPage
} = require("./viewController");

// localhost:8080/
router.get("/", getHomePage);

// localhost:8080/albums
router.get("/albums", getAlbumPage);

// localhost:8080/users
router.get("/users", getUserPage);

// localhost:8080/albums/:id
router.get("/albums/:id", getOneAlbumPage);

// localhost:8080/users/:id
router.get("/users/:id", getOneUserPage);

module.exports = router;
