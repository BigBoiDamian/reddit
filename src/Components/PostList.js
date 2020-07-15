import React from 'react';
import Post from './Post';
import NoSubErr from "./NoSubErr";

const PostList = props => {
    const result = props.data;
    let posts;

    if (result.length > 0) {
    posts = result.map(post => 
        <Post url={post.data.url} title={post.data.title} txt={post.data.selftext} key={post.data.id}/>
    );
    } else {
    console.log(result);
    posts = <NoSubErr />
    }

    return(
    <ul className="gif-list">
        {posts}
    </ul> 
    );
}

export default PostList;