
import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
function Dialogs(){
    return<div className={s.dialogsContent}>
        <div className={s.users}>
        <div className={s.user}>Alex</div>
            <div className={s.user}><NavLink to={'/dialogs/1'}> Alex</NavLink></div>
            <div className={s.user}><NavLink to={'/dialogs/2'}>Dima</NavLink></div>
            <div className={s.user}><NavLink to={'/dialogs/3'}>Tanua</NavLink></div>
            <div className={s.user}><NavLink to={'/dialogs/4'}>Misha</NavLink></div>
            <div className={s.user}><NavLink to={'/dialogs/5'}>Serg</NavLink></div>
            <div className={s.user}><NavLink to={'/dialogs/6'}>Valera</NavLink></div>
        </div>

        <div className={s.dialogs}>
  <div className={s.dialog}> Hello!</div>
  <div className={s.dialog}> How are you? </div>
  <div className={s.dialog}> I am good!</div>
    </div>

    </div>
}
export default Dialogs