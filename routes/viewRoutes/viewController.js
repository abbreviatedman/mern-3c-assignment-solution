const Album = require("../albums/albumsModel");
const User = require("../users/usersModel");
const axios = require("axios");

async function getHomePage(req, res) {
  try {
    res.render("home");
  } catch (error) {
    let errorObj = {
      message: "failure to get Home Page",
      payload: error,
    };

    // server-side error
    console.log(errorObj);

    // client-side error
    res.json(errorObj);
  }
}

async function getAlbumPage(req, res) {
  try {
    let listOfAlbums = await Album.find({});

    res.render("albums", { albums: listOfAlbums });
  } catch (error) {
    let errorObj = {
      message: "failure to get Album Page",
      payload: error,
    };

    // server-side error
    console.log(errorObj);

    // client-side error
    res.json(errorObj);
  }
}

async function getUserPage(req, res) {
  try {
    let listOfUsers = await User.find({});

    res.render("users", { users: listOfUsers });
  } catch (error) {
    let errorObj = {
      message: "failure to get Album Page",
      payload: error,
    };

    // server-side error
    console.log(errorObj);

    // client-side error
    res.json(errorObj);
  }
}

async function getOneAlbumPage(req, res) {
  try {
    const { id } = req.params;
    const currentAlbum = await Album.findOne({ _id: id });
    const usersWithAlbumFaved = await User.find({ favoriteAlbums: id });
    const usersListedOnAlbum = await User.find({
      _id: currentAlbum.userFavorite,
    });

    res.render("oneAlbum", {
      album: currentAlbum,
      userList: usersWithAlbumFaved.concat(usersListedOnAlbum),
    });
  } catch (error) {
    let errorObj = {
      message: "failure to get User Favorite Page",
      payload: error,
    };

    // server-side error
    console.log(errorObj);

    // client-side error
    res.json(errorObj);
  }
}

async function getOneUserPage(req, res) {
  try {
    const { id } = req.params;
    const currentUser = await User.findOne({ _id: id });
    const albumsWithUserListed = await Album.find({ userFavorite: id });
    const albumsListedOnUser = await Album.find({
      _id: currentUser.favoriteAlbums,
    });

    res.render("oneUser", {
      user: currentUser,
      albumList: albumsWithUserListed.concat(albumsListedOnUser),
    });
  } catch (error) {
    let errorObj = {
      message: "failure to get User Favorite Page",
      payload: error,
    };

    // server-side error
    console.log(errorObj);

    // client-side error
    res.json(errorObj);
  }
}

module.exports = {
  getHomePage,
  getAlbumPage,
  getOneAlbumPage,
  getUserPage,
  getOneUserPage
};
