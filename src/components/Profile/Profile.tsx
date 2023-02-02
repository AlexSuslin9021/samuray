import React from "react";
import a from './Profile.module.css'

import {MyPost} from './MyPost/MyPost'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {propsPostMessege} from "../../Redux/State";




type PropsType={
    post:propsPostMessege[]
    messages:string
    addPost:(post?:string)=>void
    changeCallback: (newText:string) => void

}
export function Profile(props:PropsType){
    return(
        <div className='contains'>
            <ProfileInfo changeCallback={props.changeCallback} messages={props.messages} addPost={props.addPost}  />
            <MyPost post={props.post} />
        </div>
)
}
export default Profile