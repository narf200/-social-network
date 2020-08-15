import React from "react";
import DisplayFriends from "./DisplayFriends";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return{
        friendsPage: state.friendsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
    }
}

const DisplayFriendsContainer = connect(mapStateToProps, mapDispatchToProps) (DisplayFriends);

export default DisplayFriendsContainer