const express = require('express');
const router = express.Router();
const MarketController = require('../controler/market');
const Market = require("../model/market");

// routes

router.post('/' , MarketController.postMarket);
router.get('/' , MarketController.getMarket);
router.get('/a' , MarketController.getMarket_query);


module.exports = router;