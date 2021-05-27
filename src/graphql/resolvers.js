const db = require('../dataSource/db')

const Query = {
    listUserRequests: () => db.list(),
}

const Mutation = {
    createUserRequest: (_, args) => db.create(args.input),
}

module.exports = { Query, Mutation }