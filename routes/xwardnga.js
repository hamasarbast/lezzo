const express = require("express");
const router = express.Router();
const XwardngaController =require('../controler/xwardnga');

// routes

router.get("/",XwardngaController.getxwardnga);
router.get("/a",XwardngaController.getxwardnga_query);
router.post("/",XwardngaController.postXwardn);
router.get('/matham/:id' , XwardngaController.getXwardnga_Byid);
module.exports = router;



