import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import { sendMessageCreator, updateNewMessageBodyCreator,} from "../../redux/dialogs-reducer";

let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        updatenewMessageBody:(body) =>{
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () =>{
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer