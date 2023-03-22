import React from "react";
import s from "../ProfileInfo/ProfileInfo.module.css";
import {ProfileType} from "../../../Redux/reducerProfile/reducerProfile";
import users from '../../../assets/image/6.gif'

type ProfileTypeInfo = {
    profile: ProfileType
}

export function ProfileInfo(props: ProfileTypeInfo) {

    return (

        <div className={s.containProfileInfo}>
            <div className={s.avatar}>
                <img src={props.profile.photos.small ? props.profile.photos.small : users} alt=""/>
            </div>
            <div className={s.description}>
                <div className={s.item}></div>
                {/*<div> {props.profile.aboutMe}</div>*/}
                <div> {props.profile.fullName}</div>
                <div> Date of Birth</div>
                <div> Location</div>
                <div> Education</div>
                <div> {props.profile.contacts.website}</div>

            </div>


        </div>)
}