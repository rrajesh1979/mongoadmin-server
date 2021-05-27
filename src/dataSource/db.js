const mongoose = require('mongoose')

const { UserRequest } = require('./model')

const create = async input => {
    const newUserRequest = new UserRequest({
        id: input.id,
        requester: input.requester,
        project: input.project,
        cluster: input.cluster,
        database: input.database,
        role: input.role,
        status: input.status,
    })
    try {
        await newUserRequest.save()
        return newUserRequest
    } catch (err) {
        console.log(`Error in create UserRequest with text ${input.text}: ${err}`)
    }
}

const list = async () => {
    try {
        const userRequests = await UserRequest.find()
        if (!userRequests) return []
        return userRequests
    } catch (err) {
        console.log(`Error in list userRequests: ${err}`)
    }
}

module.exports = { list, create }