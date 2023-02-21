import React from "react";
// import a from './Profile.module.css'

import {MyPost} from './MyPost/MyPost'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import { actionType, propsPostMessege} from "../../Redux/State";
import {MyPostContainer} from "./MyPost/MyPostContainer";




type PropsType={
    post:propsPostMessege[]
    messages:string
    // addPost:(post?:string)=>void
    // changeCallback: (newText:string) => void
    dispatch:(action:actionType )=>void

}
export function Profile(props:PropsType){
    debugger
    return(
        <div className='contains'>
            <ProfileInfo   />
            <MyPostContainer post={props.post} dispatch={props.dispatch} messages={props.messages}/>
            {/*<MyPost post={props.post} dispatch={props.dispatch} messages={props.messages}  />*/}
        </div>
)
}
