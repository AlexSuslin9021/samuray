import s from "./ProfileInfo.module.css";
import {ContactProfileType, ProfileType} from "../../../Redux/reducerProfile/reducerProfile";
import React from "react";

export const ProfileContact=(props:ProfileContactType)=>{
    return <>
        <div className={s.item}></div>
        <div> <b>About me:</b> {props.profile.aboutMe}</div>
        <div> <b>Full name:</b> {props.profile.fullName}</div>
        <div> <b>LookingForAJob:</b> {props.profile.lookingForAJob ? 'yes':'no'}</div>
        <div> <b> Date of Birth:</b></div>
        <div><b> Location:</b></div>
        <div> <b> Education:</b></div>
        <div> <b>FaceBook:</b> {props.profile.contacts.facebook }</div>
        <div> <b>Contact</b> {Object.keys(props.profile.contacts).map((key)=>
            <Contact key={key} titleValue={key} fieldValue={props.profile.contacts[key as keyof ContactProfileType]}/>) }</div>
    </>
}


const Contact=(props:ContactType )=>{
    return <div> <b>{props.titleValue}:</b>{props.fieldValue}</div>
}

type ContactType={
    titleValue:string
    fieldValue:any
}
type ProfileContactType={
    profile: ProfileType
}
