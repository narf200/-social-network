import React from "react";
import s from './DisplayFriends.module.css'
import Friend from "./Friend/Friend";

const DisplayFriends = (props) => {
console.log(props)
    let friendsElements =
        props.friendsPage.friends.map(f => <Friend name={f.name} key={f.id} avatar={f.avatar}/>)
    return (
        <div className={s.DisplayFriendsItems}>
            Friends Display
            {friendsElements}
        </div>
    )
}

export default DisplayFriends