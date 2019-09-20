const express = require('express');
const router = express.Router();
const userRouter = require('./user.route')

/* GET test route. */
router.get('/', (req, res) => {
    res.send({active: true})
});
router.use('/users', userRouter);

module.exports = router;
