import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import s from "./ProfileInfo.module.css";
import {ContactProfileType, ProfileType} from "../../../Redux/reducerProfile/reducerProfile";
import {saveDataProfileType} from "../../../API/api";


type Inputs = {
    aboutMe:string
    fullName:string
    lookingForAJob:boolean
    lookingForAJobDescription:string
    contacts: {
        "facebook": string
        "website"?: null | string
        "vk": string
        "twitter": string
        "instagram": string
        "youtube": null | string
        "github": string
        "mainLink": null | string
    }
};
type ProfileFormDataType={
    callback:any
    profile:saveDataProfileType
}
export const ProfileFormData = (props:ProfileFormDataType) => {
    const {register, handleSubmit,} = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = data => props.callback(data);



    return (

        <form  onSubmit={handleSubmit(onSubmit) }>
            <div> <button type={'submit'}> save </button></div>
            <div className={s.item}></div>
            <div> <b>About me</b> :<input defaultValue={props.profile.aboutMe} {...register("aboutMe")} /></div>
            <div> <b>Full name</b> :<input defaultValue={props.profile.fullName} {...register("fullName")} /></div>
            <div> <b>lookingForAJobDescription</b> :<input defaultValue={props.profile.lookingForAJobDescription} {...register("lookingForAJobDescription")} /></div>
            <div> <b>LookingForAJob</b>:<input type={'checkbox'} defaultValue={props.profile.lookingForAJob ? 'Yes': 'No'} {...register("lookingForAJob")} /></div>
            <div>  {Object.keys(props.profile.contacts).map((key)=>
                <div key={key} ><b>{key}</b>:<input defaultValue={props.profile.contacts[key as keyof ContactProfileType]}  {...register(`contacts.${key as keyof ContactProfileType}`)} /></div>) }</div>

        </form>
    );
}