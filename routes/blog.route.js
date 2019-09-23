const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog.controller');
const IsAuthenticated = require('../middlewares/IsAuthenticated.middleware');
/* GET users listing. */
router.post('/', IsAuthenticated, blogController.store);
router.get('/', blogController.index);
router.put('/:id', IsAuthenticated, blogController.update);
router.delete('/:id', IsAuthenticated, blogController.destroy);
//Upload Attachment
router.post('/:id/attachments', IsAuthenticated, blogController.uploadAttachment);
router.delete('/:id/attachments/:attachmentId', IsAuthenticated, blogController.deleteAttachment);

router.post('/:id/coverImage', IsAuthenticated, blogController.uploadCoverImage);
//Get Blog using slug
router.get('/:slug', blogController.show);

module.exports = router;
