import React from 'react';
import './BlogPost.css'


const BlogPost = (props) => {
  const {title,author,description,authorImg,date} = props.blog;
  return (
    <div className="card shadow-sm">
     <div className="card-header d-flex align-items-center">
      <img src={authorImg} alt="" className="img-fluid mx-3" width="60" />
      <div>
        <h6 className="text-info">{author}</h6>
        <p className="m-0 text-secondary">{date}</p>
      </div>
    </div>
    <div className="card-body">
  <h4 className="card-text ">{title}</h4>
<p className="text-secondary">{description}</p>
    </div>

  
  </div>
  );
};

export default BlogPost;