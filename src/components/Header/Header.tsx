import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {DataType} from "../../Redux/authReducers/authReducer";
import style from '../../common/PartUi.module.css'

type PropsHeader = {
    data: DataType
    isAuth: boolean
    loginOut:()=>void
}

export function Header(props: PropsHeader) {

    return <header className={s.header}>

        <div className={s.icon}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTenzXS5uiKrBThXkRoLonu1TdcvTLCqtk6MQ&usqp=CAU"
                alt=""/>
        </div>

        <div className={s.login}>

            {props.isAuth ?
                <div> {props.data.login} <button onClick={props.loginOut} className={style.button}> Log Out</button> </div>
                :
                <div> <NavLink to={'/login'}>Login </NavLink></div>
            }

        </div>
    </header>

}
