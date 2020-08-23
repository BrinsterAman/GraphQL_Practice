import { gql } from 'apollo-boost'

export const GET_ALL_POSTS = gql`
    {
        allPosts{
            id
            title
            description
        }
    }
`

export const GET_POST = gql`
    query post($id: ID!) 
    {
        post(id: $id){
            id
            title
            description
        }
    }
`