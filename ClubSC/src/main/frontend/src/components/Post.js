import '../stylesheets/Post.css';
import React from 'react';

const Post = ({ club, timestamp, children, red }) => {
  const color = red ? "post-red" : "post";

  return (
    <div className={`${color} pt-4 pb-1 px-4 my-4`}>
      {club ? <h3>{club}</h3> : null}
      {timestamp ? <h6>{timestamp}</h6> : null}
      <p>{children}</p>
    </div>
  );
};

Post.defaultProps = {
  club: '',
  timestamp: ''
};

export default Post;
