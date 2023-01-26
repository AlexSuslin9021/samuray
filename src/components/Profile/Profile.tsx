import React from "react";
import a from './Profile.module.css'

import {MyPost} from './MyPost/MyPost'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {propsPostMessege} from "../../Redux/State";




type PropsType={
    messages:propsPostMessege[]
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