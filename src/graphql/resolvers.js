const db = require('../dataSource/db')

const Query = {
    listAccessRequests: () => db.list(),
}

const Mutation = {
    createAccessRequest: (_, args) => db.create(args.input),
}

module.exports = { Query, Mutation }