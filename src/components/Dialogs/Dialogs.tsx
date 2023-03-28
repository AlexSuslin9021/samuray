
import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {propsDialogsPage} from "../../Redux/reduserDialogs/reducerDialogs";
import {Redirect} from "react-router-dom";


type propsDoalogs={
    dialogs:propsDialogsPage
    add:(newDialog:string)=>void
    onChangeText:(e:string)=>void
    // isAuth:boolean
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

    // if(!props.isAuth) return <Redirect to={'/login'}/>
    return<div className={s.dialogsContent}>

        <div className={s.users}>
            {user}
        </div>


        <div className={s.dialogs}>
            {dialog}

        <textarea className={s.window} value={props.dialogs.newDialog}  onChange={onChangeText} > </textarea>

            <button className={s.button} onClick={add}> ass</button>
    </div>
</div>

}
export default Dialogs