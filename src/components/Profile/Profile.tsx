import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPost/MyPostContainer";
import {ProfileType} from "../../Redux/reducerProfile/reducerProfile";
import s from   './Profile.module.css'


type ProfileTypeInfo={
    profile:ProfileType
    status:string
    getProfileStatus:(status:string)=>void

}
export function Profile(props:ProfileTypeInfo){


    return(
        <div className={s.contains}>
            <ProfileInfo profile={props.profile} status={props.status}  getProfileStatus={props.getProfileStatus}/>
            <MyPostContainer />

        </div>
)
}
