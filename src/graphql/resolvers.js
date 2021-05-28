const db = require('../dataSource/db')

const Query = {
    listUserRequests: () => db.list(),
}

const Mutation = {
    createUserRequest: (_, args) => db.create(args.input),
    createUserRequestArgs: (_, args) => db.createArgs(args.id, args.requester, args.project,
        args.cluster, args.database, args.requestType, args.role, args.status, args.requestedDate),
}

module.exports = { Query, Mutation }