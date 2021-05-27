const mongoose = require('mongoose')

const { AccessRequest } = require('./model')

const create = async input => {
    const newAccessRequest = new AccessRequest({
        id: input.id,
        requester: input.requester,
        project: input.project,
        cluster: input.cluster,
        database: input.database,
        role: input.role,
        // id: args.id
    })
    try {
        await newAccessRequest.save()
        return newAccessRequest
    } catch (err) {
        console.log(`Error in create AccessRequest with text ${input.text}: ${err}`)
    }
}

const list = async () => {
    try {
        const accessRequests = await AccessRequest.find()
        if (!accessRequests) return []
        return accessRequests
    } catch (err) {
        console.log(`Error in list accessRequests: ${err}`)
    }
}

module.exports = { list, create }