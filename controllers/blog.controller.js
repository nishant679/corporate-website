'use strict';
const {BlogModel} = require('../models/blog.model');
const upload = require('../utils/uploadFileHelper');
const AppError = require('../utils/AppError');

/**
 * Create a Blog Post
 */
exports.store = async function (req, res, next) {
    const blogModel = new BlogModel({
        title: req.body.title,
        slug: req.body.slug,
        content: req.body.content,
        attachments: req.body.attachments,
        coverImage: req.body.coverImage,
        published: req.body.published,
        createdBy: req.app.admin._id,
    });
    try {
        const blog = await blogModel.save();
        res.json({
            success: true,
            blog
        });
    } catch (e) {
        next(e)
    }
};

/**
 * Update a Blog Post
 */
exports.update = async function (req, res, next) {
    const _id = req.params.id;
    try {
        const result = await BlogModel.update({
            _id
        }, {$set: req.body});
        res.json({
            success: true,
            result
        })
    } catch (e) {
        next(e)
    }

};

/**
 * List All Blogs
 */
exports.index = async function (req, res, next) {
    const filters = {
        skip: Number(req.query.skip),
        limit: Number(req.query.limit) || 6,
        sort: {
            //Sort by createdAt Added DESC
            createdAt: -1
        }
    };
    const projections = {};
    // Get Only desired fields
    if (req.query.fields) {
        const fields = req.query.fields.split(',');
        fields.forEach((field) => {
            projections[field] = 1;
        });
    }

    const query = {};
    if (req.query._id) {
        query._id = req.query._id
    }

    try {
        const blogs = await BlogModel.find(query, projections, filters);
        const count = await BlogModel.count({});
        res.json({
            blogs,
            count
        })
    } catch (e) {
        next(e)
    }
};

/**
 * Get a Blog Post
 *  slug- for user displayable urls
 */
exports.show = async function (req, res, next) {
    const slug = req.params.slug;
    try {
        const blog = await BlogModel.findOneAndUpdate({
                slug
            },
            {
                $inc: {views: 1}
            });
        if (!blog) {
            throw new AppError('Blog Not Found', 404)
        }
        const relatedBlogs = await BlogModel.find({},
            {
                title: 1,
                slug: 1,
            },
            {
                limit: 3,
                sort: {
                    views: -1
                }
            });
        res.json({
            blog,
            relatedBlogs
        })
    } catch (e) {
        next(e)
    }
};

/**
 * Delete a Blog Post
 */
exports.destroy = async function (req, res, next) {
    const _id = req.params.id;
    try {
        const result = await BlogModel.deleteOne({
            _id
        });
        res.json({
            success: true,
            result
        })
    } catch (e) {
        next(e)
    }
};

exports.uploadAttachment = async function (req, res, next) {
    try {
        const blogPost = await BlogModel.findOne({
            _id: req.params.id
        });
        if (!blogPost) {
            throw new AppError('Blog Post Not Found', 404);
        }
        const files = await upload(req, res);
        files.forEach(file => {
            blogPost.attachments.push(`${process.env.STATIC_FILES_DOMAIN}/${file.path}`);
        });
        const result = await blogPost.save();
        res.json(result);
    } catch (e) {
        next(e);
    }
};