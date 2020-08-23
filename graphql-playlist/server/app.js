const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

//allow cross-origin request
app.use(cors())

mongoose.connect('mongodb+srv://Aman:TestMe12@cluster0.cpupe.mongodb.net/aman-gql?retryWrites=true&w=majority')
mongoose.connection.once('open', () => {
    console.log("Connected to db...")
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('Listenning to port 4000....')
})