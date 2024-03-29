import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPost/MyPostContainer";
import {ProfileType} from "../../Redux/reducerProfile/reducerProfile";
import s from   './Profile.module.css'
import {saveDataProfileType} from "../../API/api";


type ProfileTypeInfo={
    profile:ProfileType
    status:string
    updateProfileStatus:(status:string)=>void
    isOwner: boolean
    savePhoto:(photo:any)=>void
    saveProfileData:(profile:saveDataProfileType)=>void


}
export function Profile(props:ProfileTypeInfo){


    return(
        <div className={s.contains}>
            <ProfileInfo profile={props.profile}   saveProfileData={props.saveProfileData} savePhoto={props.savePhoto} isOwner={props.isOwner}  status={props.status}  updateProfileStatus={props.updateProfileStatus}   />
            <MyPostContainer />

        </div>
)
}
