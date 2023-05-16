import React, {ChangeEvent} from "react";
import s from "../ProfileInfo/ProfileInfo.module.css";
import {ProfileType} from "../../../Redux/reducerProfile/reducerProfile";
import users from '../../../assets/image/3607444.png'
import ProfileStatus from "./ProfileStatus";

type ProfileTypeInfo = {
    profile: ProfileType
    status:string
    updateProfileStatus:(status:string)=>void
    isOwner: boolean
    savePhoto:(photo:any)=>void

}


export function ProfileInfo(props: ProfileTypeInfo) {

    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        debugger
        if(e.target.files)
            props.savePhoto(e.target.files[0])
    }
        return (

        <div className={s.containProfileInfo}>
            <div className={s.avatar}>
                <img src={props.profile.photos.small ? props.profile.photos.small : users} alt=""/>
                {props.isOwner && <input type={'file'} onChange={onChangeHandler}/>}
            </div>
            <div className={s.description}>
                <ProfileStatus status={props.status}  updateProfileStatus={props.updateProfileStatus}    />
                <div className={s.item}></div>
                <div> {props.profile.aboutMe}</div>
                <div> {props.profile.fullName}</div>
                <div> Date of Birth</div>
                <div> Location</div>
                <div> Education</div>
                <div> {props.profile.contacts.website}</div>

            </div>


        </div>)
}