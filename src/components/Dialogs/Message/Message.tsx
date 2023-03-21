import s from '../Dialogs.module.css'
import {FC} from "react";

type DialogProps={
    message:string
}
export const Message:FC<DialogProps>=(props)=>{
    return<div className={s.dialog}> {props.message}</div>
}