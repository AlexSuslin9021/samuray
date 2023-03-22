import React from "react";
import s from './Post.module.css'
type PostPropsType={
    message?:string
    value:number
}
export function Post(props:PostPropsType){
    return (<div className={s.item}>
<div className={s.likeIcon}>
        <img  src="https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png" alt=""/>
       <span> {props.value}</span>
</div>
        <div>
           <span>    {props.message}</span>
       </div>
    </div>)
}