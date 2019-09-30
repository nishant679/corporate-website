const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const addNews = require('../controllers/addNews');
const getNews = require('../controllers/getNews');
/* GET users listing. */
router.get('/addNews', addNews);
router.get('/', getNews);

module.exports = router;
