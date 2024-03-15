import React from "react";

const PostItem = ({
  postId,
  category,
  title,
  description,
  authorID,
  thumbnail,
}) => {
  return (
    //each post is article
    <article className="post">
      <div className="post__thumbnail">
        <img src={thumbnail} alt={title}></img>
      </div>
      <div className="post__content">
        <Link to={`/posts/${postId}`}>
          <h3>{title}</h3>
        </Link>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default PostItem;
