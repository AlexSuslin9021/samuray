
import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsItemProps ={
    name:string
    id:string
}
const DialogsItem=(props:DialogsItemProps)=>{
    return <div className={s.user}><NavLink to={`/dialogs/ +${props.id}`}> {props.name}</NavLink></div>
}
type DialogProps={
    dial:string
}
const Dialog=(props:DialogProps)=>{
    return<div className={s.dialog}> {props.dial}</div>
}
function Dialogs(){

    const users=[
        {id:'1', name:'Alex'},
        {id:'2', name:'Dima'},
        {id:'3', name:'Misha'},
        {id:'4', name:'Tanya'},
        {id:'5', name:'Valera'},
        {id:'6', name:'Serg'},
    ]
    const dialogs=[
        {id:'1', name:'Hello'},
        {id:'2', name:'How are you'},
        {id:'3', name:'I am good!'},]
    const user= users.map(u=><DialogsItem id={u.id} name ={u.name}/>)
    const  dialog=dialogs.map(d=><Dialog dial={d.name}/>)
    return<div className={s.dialogsContent}>
        <div className={s.users}>
            {user}
        </div>

        <div className={s.dialogs}>
            {dialog}
        </div>

    </div>
}
export default Dialogs