import React from "react";
import a from './Post.module.css'
type PostPropsType={
    message:string
    value:number
}
export function Post(props:PostPropsType){
    return (<div className={a.item}>
        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReUpJXbYAVLlL8JDiJvcBselTzy4QStUtjrg&usqp=CAU" alt=""/>
        {props.message}
       <div> <span> {props.value}</span> </div>
    </div>)
}