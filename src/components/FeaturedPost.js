import React from 'react';
import '../styles/blog.css';

const FeaturedPost = ({imageUrl, title, updatedAt, body, blogLink, width, height}) => {
    return (
        <div className="blog-post-feature">
            <div className="blog-post-feature-image">
                <img src={imageUrl}
                alt="Feature Post"
                width={width}
                height={height} 
                />
            </div>
            <div className="blog-post-details">
                <p>{updatedAt}</p>
                <h1>{title}</h1>
                <p>{body}</p>
                <a href={blogLink}>Read more</a>
            </div>
        </div>
    );
}

export default FeaturedPost;