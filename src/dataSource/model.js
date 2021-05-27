const mongoose = require('mongoose')

const accessRequestSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    requester: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    },
    project: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    },
    cluster: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    },
    database: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    },
    role: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    },
})

const AccessRequest = mongoose.model('mongoadminrequests', accessRequestSchema)

module.exports = { AccessRequest }