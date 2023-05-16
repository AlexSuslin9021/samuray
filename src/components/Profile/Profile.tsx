import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPost/MyPostContainer";
import {ProfileType} from "../../Redux/reducerProfile/reducerProfile";
import s from   './Profile.module.css'


type ProfileTypeInfo={
    profile:ProfileType
    status:string
    updateProfileStatus:(status:string)=>void
    isOwner: boolean
    savePhoto:(photo:any)=>void


}
export function Profile(props:ProfileTypeInfo){


    return(
        <div className={s.contains}>
            <ProfileInfo profile={props.profile} savePhoto={props.savePhoto} isOwner={props.isOwner}  status={props.status}  updateProfileStatus={props.updateProfileStatus}   />
            <MyPostContainer />

        </div>
)
}
