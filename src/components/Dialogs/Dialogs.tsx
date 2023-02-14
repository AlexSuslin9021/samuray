
import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {actionType, addNewDialog, changeNewDialogCreator, propsDialogsType, propsUsersName} from "../../Redux/State";

type DialogsItemProps ={
    name:string
    id:string
}
type PropsDialogs={
    users:propsUsersName[],
    dialogs:propsDialogsType[]
    newDialog: string
    dispatch: (action: actionType) => void
}

const DialogsItem: React.FC<DialogsItemProps>=(props)=>{
    return <div className={s.user}>
        <NavLink to={`/dialogs/ +${props.id}`}> <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLhCHrIzLc6qb_JwYWf3c77vFOAFb16Nl8w&usqp=CAU'} alt={'#'} /> {props.name}</NavLink>
    </div>
}
type DialogProps={
    dial:string
}
const Dialog:React.FC<DialogProps>=(props)=>{
    return<div className={s.dialog}> {props.dial}</div>
}



function Dialogs(props:PropsDialogs){




    const add=()=>{

       props.dispatch(addNewDialog(props.newDialog))
}
const onChangeText=(e:ChangeEvent<HTMLTextAreaElement>)=>{
   props.dispatch(changeNewDialogCreator(e.currentTarget.value))
}
    const user= props.users.map(u=><DialogsItem id={u.id}    name ={u.name}/>)
    const  dialog=props.dialogs.map(d=><Dialog dial={d.name}/>)
    return<div className={s.dialogsContent}>
        <div className={s.users}>
            {user}
        </div>

        <div className={s.dialogs}>
            {dialog}
        </div>
        <textarea value={props.newDialog}  onChange={onChangeText} > </textarea>
        <div>
        <button onClick={add}> ass</button>
        </div>
    </div>
}
export default Dialogs