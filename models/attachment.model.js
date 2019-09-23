const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ATTACHMENT_MODEL = 'AttachmentModel';
const AttachmentSchema = new Schema({
        title: {
            type: Schema.Types.String,
            required: true
        },
        url: {
            type: Schema.Types.String,
            required: true
        }

    }
);


module.exports = {ATTACHMENT_MODEL, AttachmentSchema};