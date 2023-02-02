import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {PropsSidebar} from "../../Redux/State";

type PropsType={
    list:PropsSidebar[]
}
  function Navbar(props:PropsType) {
    return <nav className={s.nav}>
        {props.list.map(el=> <div className={ s.item}><NavLink to={el.to}  activeClassName={s.active}>{el.title} </NavLink></div>)}
        <div className={s.friends}>
            <NavLink to={'/friends'} activeClassName={s.active}>Friends</NavLink>
           <div className={s.image}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4jVmZsr1RiXjhULphFZKCr8BgPwQhjI7BoA&usqp=CAU" alt="#"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4jVmZsr1RiXjhULphFZKCr8BgPwQhjI7BoA&usqp=CAU" alt="#"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4jVmZsr1RiXjhULphFZKCr8BgPwQhjI7BoA&usqp=CAU" alt="#"/>
        </div>
        </div>


        </nav>

}
export default Navbar


{/*<div className={ s.item}><NavLink to={'/profile'}  activeClassName={s.active}>Profile </NavLink></div>*/}
{/*<div className={s.item}><NavLink to={'/dialogs'} activeClassName={s.active}>Messages</NavLink></div>*/}
{/*<div className={s.item}><NavLink to={'/news'} activeClassName={s.active} >News</NavLink></div>*/}
{/*<div className={s.item}><NavLink to={'/music'} activeClassName={s.active}>Music</NavLink></div>*/}
{/*<div className={s.item}><NavLink to={'/settings'} activeClassName={s.active}>Settings</NavLink></div>*/}