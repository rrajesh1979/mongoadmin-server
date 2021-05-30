const mongoose = require('mongoose');

const { UserRequest } = require('./model');

const create = async input => {
    const newUserRequest = new UserRequest({
        id: input.id,
        requester: input.requester,
        // project: input.project,
        // cluster: input.cluster,
        // database: input.database,
        requestType: input.requestType,
        // role: input.role,
        status: input.status,
        requestedDate: input.requestedDate,
        requestDetails: input.requestDetails,
    })
    try {
        await newUserRequest.save()
        return newUserRequest
    } catch (err) {
        console.log(`Error in create UserRequest with text ${input.text}: ${err}`)
    }
}

const createArgs = async (id, requester,
                          // project, cluster, database,
                          requestType,
                          // role,
                          status, requestedDate, requestDetails) => {
    const newUserRequest = new UserRequest({
        id: id,
        requester: requester,
        // project: project,
        // cluster: cluster,
        // database: database,
        requestType: requestType,
        // role: role,
        status: status,
        requestedDate: requestedDate,
        requestDetails: JSON.parse(requestDetails),
    })
    try {
        await newUserRequest.save()
        return newUserRequest
    } catch (err) {
        console.log(`Error in create UserRequest with text ${id}: ${err}`)
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

const listOpenRequests = async () => {
    try {
        const userRequests = await UserRequest.find({status: 'OPEN'})
        if (!userRequests) return []
        return userRequests
    } catch (err) {
        console.log(`Error in list userRequests: ${err}`)
    }
}

module.exports = { list, listOpenRequests, create, createArgs }