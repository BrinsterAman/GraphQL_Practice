const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const http = require('http')
const path = require('path')
const mongoose = require('mongoose')
const {fileLoader, mergeTypes, mergeResolvers} = require('merge-graphql-schemas')
require('dotenv').config()

const app = express()

//db
const db = async () => {
    try {
        const success = await mongoose.connect(process.env.DATABASE_CLOUD, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        console.log('DB Connected....')
    } catch (error) {
        console.log(error)
    }
}

db()

//code to do for rest end-point
app.get('/rest', (req, res) => {
    res.json({
        data: 'you hit rest end-point'
    })
})

//code for graphQL 
const typeDefs = mergeTypes(fileLoader(path.join(__dirname,'./schema')))

const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')))

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
})

//applyMiddleware method connects ApolloServer to a specific HTTP framework i.e. express
apolloServer.applyMiddleware({ app: app })

//server
const httpServer = http.createServer(app)

app.listen(process.env.PORT, () => {
    console.log(`Server is ready at PORT = ${process.env.PORT}`)
    console.log(`GraphQL server at http://localhost:${process.env.PORT}${apolloServer.graphqlPath}`)
})