import React from "react";
import a from './Profile.module.css'
// import {MyPost} from './MyPost/MyPost'
import {MyPost} from './MyPost/MyPost'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
export function Profile(){
    return(
        <div className='contains'>
            <ProfileInfo/>
            <MyPost/>
        </div>
)
}
export default Profile