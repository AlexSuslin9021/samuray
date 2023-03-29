import React from "react";
import s from './Post.module.css'
import userPost from'../../../../common/256-512.png'
type PostPropsType={
    message?:string
    value:number



}
export function Post(props:PostPropsType){
    return (<div  className={s.item}>
<div className={s.likeIcon}>
        <img  src={userPost} alt=""/>
       <span> {props.value}</span>
</div>
        <div>
           <span>    {props.message}</span>
       </div>
    </div>)
}