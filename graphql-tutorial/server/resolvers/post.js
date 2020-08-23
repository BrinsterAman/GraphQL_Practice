const { gql } = require('apollo-server-express')
const { posts } = require('../temp')

const totalPosts = () => posts.length

const allPosts = () => posts

const newPost = (parent, args) => {
    /* const post = {
        id: posts.length + 1,
        title: args.input.title,
        description: args.input.description
    } */

    const post = {
        id: posts.length + 1,
        ...args.input
    }

    posts.push(post)
    return post
}

const post = (parent, args) => {
    return posts.find(value => {
        if(value.id==args.id)
        return value;
        return null;
    })
}

module.exports = {
    Query: {
        totalPosts,
        allPosts,
        post
    },
    Mutation: {
        newPost
    }
}