import React from "react";
import a from "../Profile.module.css";
import {ProfileType} from "../../../Redux/reducerProfile/reducerProfile";
import users from '../../../assets/image/6.gif'

type ProfileTypeInfo={
    profile:ProfileType
}
export function ProfileInfo(props:ProfileTypeInfo) {

    return (

        <div>

            <div className={a.item}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlCzLDRdu5WjTxrUB5Sd4bN022QuUH5ofeBf7w02xNYSHIAnkhttKQiqzBxlLpoJKuRTQ&usqp=CAU"
                    alt=""/>
            </div>
            <div> {props.profile.aboutMe}</div>
            <img src={props.profile.photos.small ?props.profile.photos.small :users} alt=""/>
            <div className={a.item}>
                ava + descript
            </div>

        </div>)
}