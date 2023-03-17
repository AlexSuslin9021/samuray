import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import usersPhoto from "../../assets/image/3607444.png";
import {DataType} from "../../Redux/authReducers/authReducer";
type PropsHeader={
    data:DataType
    isAuth:boolean
}
export function Header(props:PropsHeader) {
    return <header className={s.header}>
            <img src="https://i.pinimg.com/550x/99/f7/0f/99f70fe7d427e6c6cf994260ff04f24b.jpg" alt=""/>
        {  props.isAuth ? props.data.login :
        <div>  <NavLink to={'/login' }>
          Login
        </NavLink></div>
        }
        </header>

}
