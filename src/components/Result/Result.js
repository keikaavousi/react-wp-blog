import React, { useEffect, useState } from "react";
import styles from '../Posts/Posts.module.css'
import {Link} from 'react-router-dom'

const Result = ({ location }) => {
  const search = location.search;
  const params = new URLSearchParams(search);
  const keyword = params.get("keyword");

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8888/myblog/wp-json/wp/v2/posts?search=${keyword}`)
      .then(res => res.json())
      .then(rs => {
        setPosts(rs);
      });
  }, []);


  if(typeof posts !="undefined"){
  return (
    <div>
      <ul className={styles.list}>
        {posts.map(post => {
          return (
            <li>
              <time>{new Date(post.date).toLocaleDateString("en-US")}</time>
              <h3>{post.title.rendered}</h3>
              <div
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
              <Link to={`/blog/${post.id}`}>Read more</Link>
            </li>
          );
        })}
      </ul>
    </div>
  )
    }
    else{
        return(
            <h1>Loading</h1>
        )
    }
};

export default Result;
