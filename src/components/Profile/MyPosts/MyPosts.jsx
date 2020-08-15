import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    console.log('Ave SATAN')

    let postsElements =
        props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount} avatar={p.avatar}/>)

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}
                          placeholder="Enter your post" name="" id="" cols="30" rows="5"/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
                <button>Remove post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
