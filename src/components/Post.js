import React from "react";

const Post = ({post}) => {
    return (
        <div className="blog-post">
            <div className="blog-post-image">
                <img
                src={post.imageUrl}
                alt="Blog header"
                width={250}
                height={250}
                />
            </div>
            <div className="blog-post-details">
                <p>{post.updatedAt}</p>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <a href={post.blogLink}>Read more...</a>
            </div>
        </div>
    );
}

export default Post;