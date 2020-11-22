import '../stylesheets/Post.css';
import React from 'react';

const Post = ({ club, timestamp, children, red }) => {
  const color = red ? "post-red" : "post";

  return (
    <div className={`${color} pt-4 pb-1 px-4 my-4`}>
      <h3>{club}</h3>
      <h6>{timestamp}</h6>
      <p>{children}</p>
    </div>
  );
};

export default Post;
