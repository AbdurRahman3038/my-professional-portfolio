import React from 'react';
import './Blog.css';
import img from '../../../media/images/blog.PNG';

const Blog = () => {
    return (
        <div className="blog-container">
            <h1 className="text-center py-4">Blogs coming soon</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default Blog;