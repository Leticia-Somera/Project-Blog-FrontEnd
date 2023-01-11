import React from "react";
import '../blog.css';

const NavBar = () => {
    return (
        <div className="blog-post-navbar">
            <div className="blog-post-brand">
                <a href="https://itjuana.com/">
                    <img src="https://itjuana.com/wp-content/uploads/ITJ_tm-logo.png"
                    alt="itjuana"
                    width={80}
                    height={80} 
                    />
                </a>
                
            </div>
            <ul>
                <li><a href="https://itjuana.com/">Join our team</a></li>
                <li><a href="https://itjuana.com/">Contact us</a></li>
                <li><a href="https://itjuana.com/">Create New Post</a></li>
            </ul>
        </div>
    );
}

export default NavBar;