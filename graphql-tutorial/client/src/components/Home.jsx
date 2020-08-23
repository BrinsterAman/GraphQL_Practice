import React from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks'
import { GET_ALL_POSTS, GET_POST } from '../query/post'
import Card from './Card';

function Home() {

    const { data, loading, error } = useQuery(GET_ALL_POSTS)
    const [fetchPost, { called, data: postData, loading: loadingData, error: errorData }] = useLazyQuery(GET_POST)

    console.log(fetchPost)

    if (loading)
        return <p>Loading.....</p>

    return (
        <>
            <div className="container">
                <div className="row p-5">

                    {data.allPosts.map((p) => (
                        <Card
                            key={p.id}
                            title={p.title}
                            description={p.description}
                            getPost={fetchPost}
                        />
                    ))}

                </div>

                <div className="row p-5">
                    {
                        (called && !loadingData) &&
                        (<div key={postData.post.id}>
                            <h2>{postData.post.title}</h2>
                            <p>{postData.post.description}</p>
                        </div>)

                    }
                </div>

            </div>
        </>
    );
}

export default Home;
