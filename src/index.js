const { ApolloServer, gql } = require('apollo-server')
const GraphQLJSON = require('graphql-type-json');

const fs = require('fs')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true })

const database = mongoose.connection

database.on('error', console.error.bind(console, 'connection error:'))
database.once('open', () => console.log('We are connected to MongoDB'))

const typeDefs = gql(
    fs.readFileSync(`${__dirname}/graphql/schema.graphql`, { encoding: 'utf-8' })
)
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({ typeDefs, resolvers })

server
    .listen({ port: process.env.PORT || 4000 })
    .then(({ url }) => console.log(`GraphQL server ready on ${url}`))
