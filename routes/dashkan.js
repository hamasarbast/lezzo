const express = require('express');
const router = express.Router();
const dashkanController = require('../controler/dashkan');

router.get("/", dashkanController.getDashkan);
router.post("/", dashkanController.postDashkan);

module.exports = router;