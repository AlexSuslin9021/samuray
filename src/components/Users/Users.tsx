import React from 'react';
import {NavLink} from "react-router-dom";
import usersPhoto from '../../assets/image/3607444.png'
import s from "./Users.module.css";
import {usersType} from "../../Redux/reducerUsers/reducerUsers";
import preloader from '../../assets/image/6.gif'
import axios from "axios";
import {usersApi} from "../../API/api";
// import {GetUsersResponse} from "./UsersContainer";

type PropsUsersType = {
    users: usersType[]
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: usersType[]) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onClickPage: (pageNumber: number) => void
    isFetching: boolean
    setFetching: (fetching: boolean) => void
    toggleIsFetching: (id: number, isFetching: boolean) => void
    progressIsFetching:number[]
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
            {props.isFetching && <div>
                <img src={preloader} alt=""/>
            </div>}
            {page.map((p, index) => <span key={index} className={props.currentPage === p ? s.selected : ''}
                                          onClick={() => props.onClickPage(p)}>{p}</span>)}
            {props.users.map(u => <div key={u.id}>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small !== null ? u.photos.small : usersPhoto} alt=""/>
                    </NavLink>
                    <span> {u.name}</span>
                </div>
                <div>
                    {/*<span> {'location.city'}</span>*/}
                    {/*<span> {'location.country'}</span>*/}
                </div>
                {u.follow ? <button disabled={props.progressIsFetching.some(el=>el===u.id)} onClick={() => {
                    debugger
                    props.toggleIsFetching(u.id,true)
                    usersApi.gtAuthDelete(u.id).then(response => {
                        if (response.resultCode === 0) {
                            props.unFollow(u.id)
                        }
                        props.toggleIsFetching(u.id,false)
                    })
                }}> Follow</button> : <button disabled={props.progressIsFetching.some(el=>el===u.id)} onClick={() => {
                    debugger
                    props.toggleIsFetching(u.id,true)
                    usersApi.gtAuthPost(u.id).then(response => {
                        if (response.resultCode === 0) {
                            props.follow(u.id)
                        }
                        props.toggleIsFetching(u.id,false)
                    })
                }}> UnfOllow</button>}
            </div>)}
        </div>
    );
}


