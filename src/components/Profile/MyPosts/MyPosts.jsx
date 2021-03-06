import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    let postsElements =
        props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount} avatar={p.avatar}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    let newPostElement = React.createRef()

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  name={"newPostText"} component={"textarea"}/>
            </div>
            <div>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({ form: "profileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;
