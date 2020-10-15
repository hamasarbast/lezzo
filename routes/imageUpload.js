const express = require('express');
const router = express.Router();
const imagecontroller = require('../controler/imageUpload');

// routes

router.post('/image' ,imagecontroller.postImage);
module.exports = router




