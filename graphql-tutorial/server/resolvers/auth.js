const { gql } = require('apollo-server-express')

const me = () => 'Aman'

module.exports = {
    Query: {
        me
    }
}