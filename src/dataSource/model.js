const mongoose = require('mongoose')

const userRequestSchema = new mongoose.Schema({
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
    requestType: {
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
    status: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    },
    requestedDate: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    },
})

const UserRequest = mongoose.model('mongoadminrequests', userRequestSchema)

module.exports = { UserRequest }