const express = require('express');
const router = express.Router();
const adminRouter = require('./admin.route');
const blogRouter = require('./blog.route');
const newsRouter = require('./news.route');

/* GET test route. */
router.get('/', (req, res) => {
    res.send({active: true})
});
router.use('/admins', adminRouter);
router.use('/blogs', blogRouter);
router.use('/news', newsRouter);

module.exports = router;
