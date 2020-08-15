import React from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={s.profileItems}>
            <div className={s.background}>
                <img src="https://fab-rides.co.uk/wp-content/uploads/2017/10/Immage-8-Dolomites.jpg" alt=""/>
            </div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer likesCount='5'/>
        </div>
    );

}

export default Profile;
