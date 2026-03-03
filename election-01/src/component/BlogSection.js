import React from "react";
import BlogCard from "../component/BlogCard.js";
import blogData from "../component/blogData.js";

const BlogSection = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <p className="text-danger">- Blog Post -</p>
        <h2 className="text-primary-emphasis">Awesome Blog Post & Article.</h2>
      </div>

      <div className="row">
        {blogData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
