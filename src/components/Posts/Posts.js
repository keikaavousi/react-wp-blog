import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import styles from './Posts.module.css'

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8888/myblog/wp-json/wp/v2/posts")
      .then(res => res.json())
      .then(rs => {
        setPosts(rs);
      });
  }, []);

  return (
    <div>
      <ul className={styles.list}>
        {posts.map(post => {
          return (
            <li>
              <time>{new Date(post.date).toLocaleDateString('en-US')}</time>
              <h3>{post.title.rendered}</h3>
              <div dangerouslySetInnerHTML={{__html:post.excerpt.rendered}} />
              <Link to={`/blog/${post.id}`}>Read more</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Posts;
