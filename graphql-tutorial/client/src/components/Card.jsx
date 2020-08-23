import React from 'react'

const Card = ({ id, title, description, getPost }) => {
    console.log(getPost)
    return (
        <>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <div className="card-title">
                            <h4>{title}</h4>
                        </div>
                        <p className="card-text">{description}</p>
                        <hr />
                        <button onClick={() => getPost} className="btn-btn-raised btn-primary">Fetch Post</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card