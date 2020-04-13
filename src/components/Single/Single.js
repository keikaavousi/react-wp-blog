import React,{useState,useEffect} from 'react'
import styles from './Single.module.css'
import {Link} from 'react-router-dom'

const Single = ({match,location}) => {
    const [post, setPost] = useState()

    useEffect(() => {
        fetch(`http://localhost:8888/myblog/wp-json/wp/v2/posts/${match.params.id}?_embed`)
        .then(res=>res.json())
        .then(rs=>{
            setPost(rs)
        })
    
    }, []);

    if(typeof post !="undefined"){
    return (
        <div>
            <ul className={styles.tags}>
                {
                        post._embedded['wp:term'][1].map(tag=>{
                            return(
                            <li><Link to={`/tag/${tag.id}`}>{tag.name}</Link></li>
                            )
                        })
                }
            </ul>
            <img className={[styles.mainimg,styles.bordered].join(' ')} src={post._embedded['wp:featuredmedia'][0]['media_details'].sizes.large.source_url}/>
            <time>{new Date(post.date).toLocaleDateString('en-US')}</time>
            <h1>{post.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{__html:post.content.rendered}}/>
        </div>
    )
    }
    else{
        return(
            <h1>Loading...</h1>
        )
    }
}

export default Single;
