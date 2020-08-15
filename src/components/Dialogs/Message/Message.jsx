import React from "react";
import s from "./../Dialogs.module.css"


const Message = (props) => {


    return (
        <div className={s.dialog}>

            <div className={s.message}>
                {props.message}
            </div>


        </div>

    )
}

export default Message