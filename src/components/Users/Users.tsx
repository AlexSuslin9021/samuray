import React from 'react';
import {NavLink} from "react-router-dom";
import usersPhoto from '../../assets/image/3607444.png'
import s from "./Users.module.css";
import {usersType} from "../../Redux/reducerUsers/reducerUsers";

import Paginator from "../Paginator/Paginator";


type PropsUsersType = {
    users: usersType[]
    setUsers: (users: usersType[]) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onClickPage: (pageNumber: number) => void
    isFetching: boolean
    setFetching: (fetching: boolean) => void
    progressIsFetching: number[]
    followThunkCreator: (id: number) => void
    unFollowThunkCreator: (id: number) => void
}

export type PostUsersResponse = {
    resultCode: number
    messages: string[],
    data: object
}
export const Users = (props: PropsUsersType) => {


    return (
        <div>
            <Paginator
                totalUsersCount={props.totalUsersCount}
                currentPage={props.currentPage}
                onClickPage={props.onClickPage}
                isFetching={props.isFetching}
                pageSize={props.pageSize}
            />
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
                {u.follow ? <button className={`${s.button} ${s.follow}`}
                                    disabled={props.progressIsFetching.some(el => el === u.id)} onClick={() => {

                        props.unFollowThunkCreator(u.id)
                    }}> Follow</button> :
                    <button className={s.button} disabled={props.progressIsFetching.some(el => el === u.id)}
                            onClick={() => {

                                props.followThunkCreator(u.id)
                            }}> UnFollow</button>}
            </div>)}
        </div>
    );
}


