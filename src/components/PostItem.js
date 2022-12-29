import React from 'react'
import './PostItem.css'

const h1Styled = {
    backgroundColor: 'blue',
    color: '#fff',
    padding: '5px'
}

const PostItem = ({ post }) => {
    return (
        <div className='container'>
            <div className = "grid-conatiner">
            <h1 style={h1Styled}>ID: {post.id}</h1>
            <img src={post.image} alt={post.name}  />
            <h3  style={{ backgroundColor: 'dark', padding: '5px' }}>Title: {post.title}</h3>
            <p>{post.body}</p>
            <h4 style={{ backgroundColor: 'grey', padding: '5px', fontWeight: '600', fontSize:'30px'}} >Price: {post.price}</h4>
            </div>
            
        </div>
    )
}

export default PostItem