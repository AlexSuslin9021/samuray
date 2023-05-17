import React, {ChangeEvent, useState} from "react";
import s from "../ProfileInfo/ProfileInfo.module.css";
import { ProfileType} from "../../../Redux/reducerProfile/reducerProfile";
import users from '../../../assets/image/3607444.png'
import ProfileStatus from "./ProfileStatus";
import {ProfileContact} from "./Profilecontact";
import {saveDataProfileType} from "../../../API/api";
import {ProfileFormData} from "./ProfileDataForm";
import {useAppDispatch} from "../../../Redux/reduxState";

type ProfileTypeInfo = {
    profile: ProfileType
    status:string
    updateProfileStatus:(status:string)=>void
    isOwner: boolean
    savePhoto:(photo:any)=>void
    saveProfileData:(profile:saveDataProfileType)=>void

}


export function ProfileInfo(props: ProfileTypeInfo) {
    const dispatch=useAppDispatch()
    const [edit,setEdit]=useState(true)
const onClickEdit=()=>{
    setEdit(false)
}
    const onClickSave=(profile:saveDataProfileType)=>{
        props.saveProfileData(profile)
        setEdit(true)
    }

    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{

        if(e.target.files) props.savePhoto(e.target.files[0])}
        return (
        <div className={s.containProfileInfo}>
            <div className={s.avatar}>
                <img src={props.profile.photos.small ? props.profile.photos.small : users} alt=""/>
                {props.isOwner && <input type={'file'} onChange={onChangeHandler}/>}
            </div>
            <div className={s.description}>
                {props.isOwner && edit && <button onClick={onClickEdit} >edit</button>}

                <ProfileStatus status={props.status}  updateProfileStatus={props.updateProfileStatus}    />
                {edit ? <ProfileContact profile={props.profile} /> : <ProfileFormData callback={onClickSave}/>}
            </div>
        </div>)
}


