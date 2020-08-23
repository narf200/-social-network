import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {

    if (!props.profile){
        return <Preloader />
    }

  return (
    <div>
      <div className={s.avatar}>
          <img src={props.profile.photos.large}/>
          <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
        <div className={s.descriptionBlock}>
           name &nbsp; {props.profile.fullName}
        </div>
    </div>
  );
}

export default ProfileInfo;
