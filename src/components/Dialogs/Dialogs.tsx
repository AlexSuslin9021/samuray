
import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsItemProps ={
    name:string
    to:string
}
const DialogsItem=(props:DialogsItemProps)=>{
    return <div className={s.user}><NavLink to={props.to}> {props.name}</NavLink></div>
}
type DialogProps={
    dial:string
}
const Dialog=(props:DialogProps)=>{
    return<div className={s.dialog}> {props.dial}</div>
}
function Dialogs(){
    return<div className={s.dialogsContent}>
        <div className={s.users}>
        {/*<div className={s.user}>Alex</div>*/}
            {/*<div className={s.user}><NavLink to={'/dialogs/1'}> Alex</NavLink></div>*/}
            <DialogsItem to={'/dialogs/1'} name ='Alex'/>
            <DialogsItem to={'/dialogs/2'} name ='Dima'/>
            <DialogsItem to={'/dialogs/3'} name ='Misha'/>
            <DialogsItem to={'/dialogs/4'} name ='Tanya'/>
            <DialogsItem to={'/dialogs/5'} name ='Valera'/>
            <DialogsItem to={'/dialogs/6'} name ='Serg'/>
            {/*<div className={s.user}><NavLink to={'/dialogs/2'}>Dima</NavLink></div>*/}
            {/*<div className={s.user}><NavLink to={'/dialogs/3'}>Tanua</NavLink></div>*/}
            {/*<div className={s.user}><NavLink to={'/dialogs/4'}>Misha</NavLink></div>*/}
            {/*<div className={s.user}><NavLink to={'/dialogs/5'}>Serg</NavLink></div>*/}
            {/*<div className={s.user}><NavLink to={'/dialogs/6'}>Valera</NavLink></div>*/}
        </div>

        <div className={s.dialogs}>
            <Dialog dial={'Hello'}/>
            <Dialog dial={'How are you?'}/>
            <Dialog dial={'I am good!'}/>
  {/*<div className={s.dialog}> Hello!</div>*/}
  {/*<div className={s.dialog}> How are you? </div>*/}
  {/*<div className={s.dialog}> I am good!</div>*/}
    </div>

    </div>
}
export default Dialogs