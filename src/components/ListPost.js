import React from 'react';
import Post from './Post';

 const ListPost = ({posts}) => {
    return (
        <>
            {
                posts.map(post => {
                    return <Post key={post.updatedAt + post.title} post={post} />
                })
            }
        </>
    );
 }

 export default ListPost;