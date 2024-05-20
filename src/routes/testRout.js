const express = require('express');
const { getTests } = require('../controller/testController');

const router = express.Router();

router.get('/',getTests)




module.exports = router;
