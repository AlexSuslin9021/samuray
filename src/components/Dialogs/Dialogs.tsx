
import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {propsDialogsPage} from "../../Redux/reduserDialogs/reducerDialogs";


type propsDoalogs={
    dialogs:propsDialogsPage
    add:(newDialog:string)=>void
    onChangeText:(e:string)=>void
}



function Dialogs(props:propsDoalogs){

    const add=()=>{

        props.add(props.dialogs.newDialog)
    }
    const onChangeText=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.onChangeText(e.currentTarget.value)
    }
    const user= props.dialogs.users.map(u=><DialogsItem id={u.id}    name ={u.name}/>)
    const  dialog=props.dialogs.dialogs.map(d=><Message message={d.name}/>)
    return<div className={s.dialogsContent}>
        <div className={s.users}>
            {user}
        </div>

        <div className={s.dialogs}>
            {dialog}
        </div>
        <textarea value={props.dialogs.newDialog}  onChange={onChangeText} > </textarea>
        <div>
            <button onClick={add}> ass</button>
        </div>
    </div>
}
export default Dialogs