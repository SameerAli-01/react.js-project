import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div className="card blog-card h-100 border-0 shadow-sm">

        {/* Image */}
        <div className="blog-img-wrapper">
          <img
            src={blog.image}
            className="card-img-top"
            alt="blog"
          />

          {/* Date Badge */}
          <div className="blog-date">
            {blog.date}
          </div>
        </div>

        {/* Content */}
        <div className="card-body text-center">
          <h5 className="card-title">{blog.title}</h5>
          <p className="card-text">{blog.desc}</p>

          <button className="btn btn-outline-primary rounded-pill px-2">
            READ MORE
          </button>
        </div>

      </div>
    </div>
  );
};

export default BlogCard;
