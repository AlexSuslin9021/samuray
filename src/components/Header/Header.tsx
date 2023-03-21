import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {DataType} from "../../Redux/authReducers/authReducer";

type PropsHeader = {
    data: DataType
    isAuth: boolean
}

export function Header(props: PropsHeader) {
    return <header className={s.header}>

        <div className={s.icon}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTenzXS5uiKrBThXkRoLonu1TdcvTLCqtk6MQ&usqp=CAU"
                alt=""/>
        </div>

        <div className={s.login}>
            {props.isAuth ? props.data.login
                :
                <NavLink to={'/login'}>Login</NavLink>}

        </div>
    </header>

}
