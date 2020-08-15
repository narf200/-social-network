import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialogItems}>
            <div className={s.message}>
                <div >
                    <NavLink to={path}>{props.name}</NavLink>
                </div>
            </div>
            <div className={s.avatar}>
                <img
                    src={props.avatar}
                    alt=""
                />
            </div>
        </div>

    )
}


export default DialogItem

