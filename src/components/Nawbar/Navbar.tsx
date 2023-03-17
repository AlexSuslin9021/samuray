import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


import {PropsSidebar} from "../../Redux/reducerSidebar/reducerSidebar";

type PropsType={
    sidebar:PropsSidebar[]
}
  function Navbar(props:PropsType) {
    return <nav className={s.nav}>
        {props.sidebar.map(el=> <div key={el.id} className={ s.item}><NavLink to={el.to}  activeClassName={s.active}>{el.title} </NavLink></div>)}
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


