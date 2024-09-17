const express = require('express');
const router = express.Router();
const getAllCars = require('../middlewares/getAll.controller.js');
const mongoose = require('mongoose');

router.get('/',getAllCars);

module.exports = router;