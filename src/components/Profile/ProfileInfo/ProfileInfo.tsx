import React from "react";
import s from "../ProfileInfo/ProfileInfo.module.css";
import {ProfileType} from "../../../Redux/reducerProfile/reducerProfile";
import users from '../../../assets/image/6.gif'
import ProfileStatus from "./ProfileStatus";

type ProfileTypeInfo = {
    profile: ProfileType
    status:string
    getProfileStatus:(status:string)=>void
}

export function ProfileInfo(props: ProfileTypeInfo) {

    return (

        <div className={s.containProfileInfo}>
            <div className={s.avatar}>
                <img src={props.profile.photos.small ? props.profile.photos.small : users} alt=""/>
            </div>
            <div className={s.description}>
                <ProfileStatus status={props.status}     getProfileStatus={props.getProfileStatus}/>
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