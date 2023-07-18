const mongoose = require('mongoose');

const { Schema } = mongoose;

const UrlSchema = new Schema(
    {
        originalUrl: {
            type: String,
            required: true,
        },
        urlSlug: {
            type: String,
            required: true,
            unique: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Url', UrlSchema);
