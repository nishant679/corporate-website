const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const {AttachmentSchema} = require("./attachment.model");
const {ADMIN_MODEL} = require("./admin.model");

const BLOG_MODEL = 'BlogModel';
const BlogSchema = new Schema({
        title: {
            type: Schema.Types.String,
            required: true
        },
        //User displayable url path
        slug: {
            type: Schema.Types.String,
            unique: true,
            required: true
        },
        content: {
            type: Schema.Types.String,
        },
        attachments: [AttachmentSchema],
        coverImage: Schema.Types.String,
        published: Schema.Types.Boolean,
        views: {
            type: Schema.Types.Number,
            default: 0
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: ADMIN_MODEL
        }
    },
    {
        timestamps: true
    });

const BlogModel = mongoose.model(BLOG_MODEL, BlogSchema);

module.exports = {BlogModel, BLOG_MODEL};