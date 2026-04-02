import React from "react";
import BlogCard from "../component/BlogCard";
import blogData from "../component/blogData";
import "./BlogSection.css";

const BlogSection = () => {
  return (
    <div className="blog-section py-5">
      <div className="container">
        
        {/* Heading */}
        <div className="text-center mb-5">
          <p className="section-subtitle">- Blog Post -</p>
          <h2 className="section-title">
            Awesome Blog Post & Article.
          </h2>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {blogData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default BlogSection;
