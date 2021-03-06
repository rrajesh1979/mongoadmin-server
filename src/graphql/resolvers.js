const db = require('../dataSource/db')

const Query = {
    listUserRequests : () => db.list(),
    listOpenRequests : () => db.listOpenRequests(),
}

const Mutation = {
    createUserRequest: (_, args) => db.create(args.input),
    createUserRequestArgs: (_, args) => db.createArgs(args.id, args.requester,
        // args.project, args.cluster, args.database,
        args.requestType,
        // args.role,
        args.status, args.requestedDate, args.requestDetails),
}

module.exports = { Query, Mutation }