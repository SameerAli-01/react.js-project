import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="col-lg-4">
      <div className="card h-100 ">
        <img src={blog.image} className="card-img-top" alt="blog" />

        <div className="card-body">
          <h5 className="card-title">{blog.title}</h5>
          <p className="card-text">{blog.desc}</p>

          <button className="btn btn-outline-primary rounded-pill">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
