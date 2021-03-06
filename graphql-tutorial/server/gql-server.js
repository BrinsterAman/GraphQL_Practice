const {ApolloServer} = require('apollo-server')
require('dotenv').config()

const typeDefs =`
    type Query {
        totalPosts: Int!
    }
`

const resolvers = {
    Query: {
        totalPosts: () => {
            return 42
        }
    }
}

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
})

apolloServer.listen(process.env.PORT, () => {
    console.log(`GraphQL server is running at Port = ${process.env.PORT}`)
})