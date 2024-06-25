/*
    3. Create a router file
*/
// 3a. Import express, router, and controller functionality
const express = require('express');
const {createAlbum} = require('./albumsController')

const router = express.Router();

// 3b. Route the ability to create an album at localhost:8080/api/albums/create-album
router.post('/create-album', createAlbum)

// 3c. Export the router
module.exports = router;
