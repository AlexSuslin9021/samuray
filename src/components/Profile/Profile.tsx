import React from "react";
import a from './Profile.module.css'
// import {MyPost} from './MyPost/MyPost'
import {MyPost} from './MyPost/MyPost'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
// import {PropsPost} from "../../App";

type PropsPost={
    id: string,
    message:string,
    likes:number
}

type PropsType={
    messages:Array<PropsPost>
}
export function Profile(props:PropsType){
    return(
        <div className='contains'>
            <ProfileInfo/>
            <MyPost message={props.messages} />
        </div>
)
}
export default Profile