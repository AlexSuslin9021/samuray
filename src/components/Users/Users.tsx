import React from 'react';
import {NavLink} from "react-router-dom";
import usersPhoto from '../../assets/image/3607444.png'
import s from "./Users.module.css";
import {usersType} from "../../Redux/reducerUsers/reducerUsers";
import preloader from '../../assets/image/6.gif'



type PropsUsersType = {
    users: usersType[]
    setUsers: (users: usersType[]) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onClickPage: (pageNumber: number) => void
    isFetching: boolean
    setFetching: (fetching: boolean) => void

    progressIsFetching:number[]
    followThunkCreator:(id:number)=>void
    unFollowThunkCreator:(id:number)=>void
}

export type PostUsersResponse = {
    resultCode: number
    messages: string[],
    data: object
}
export const Users = (props: PropsUsersType) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let page = []
    for (let i = 1; i <= pageCount; i++) {
        page.push(i)
    }

    return (
        <div>
            {props.isFetching && <div><img src={preloader} alt=""/></div>}

            {page.map((p, index) => <span key={index} className={props.currentPage === p ? s.selected : ''}
                                          onClick={() => props.onClickPage(p)}>{p}</span>)}
            {props.users.map(u => <div key={u.id}>
                <div className={s.iconContainer}>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small !== null ? u.photos.small : usersPhoto} alt=""/>
                    </NavLink>
                    <span> {u.name}</span>
                </div>
                <div>
                    {/*<span> {'location.city'}</span>*/}
                    {/*<span> {'location.country'}</span>*/}
                </div>
                {u.follow ? <button className={`${s.button} ${s.follow}`} disabled={props.progressIsFetching.some(el=>el===u.id)} onClick={() => {

                    props.unFollowThunkCreator(u.id)
                }}> Follow</button> : <button className={s.button} disabled={props.progressIsFetching.some(el=>el===u.id)} onClick={() => {

                   props.followThunkCreator(u.id)
                }}> UnFollow</button>}
            </div>)}
        </div>
    );
}


