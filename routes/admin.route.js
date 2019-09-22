const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');

/* GET users listing. */
router.post('/login', adminController.login);

module.exports = router;
