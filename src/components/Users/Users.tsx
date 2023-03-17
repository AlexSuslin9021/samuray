import React from 'react';
import {NavLink} from "react-router-dom";
import usersPhoto from '../../assets/image/3607444.png'
import s from "./Users.module.css";
import {usersType} from "../../Redux/reducerUsers/reducerUsers";
import preloader from '../../assets/image/6.gif'
import axios from "axios";
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
}

type PostUsersResponse={ resultCode: number
    messages: string[],
    data: object}
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
            {page.map((p,index) => <span key={index} className={props.currentPage === p ? s.selected : ''}
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
                {u.follow ? <button onClick={() => {

                    axios.delete<PostUsersResponse>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{withCredentials:true,
                    headers:{
                        'API-KEY': "434d1825-24d7-4c1d-8143-2edf92c40e38"
                    }
                    }).then(response => {
                        if(response.data.resultCode===0){
                            props.unFollow(u.id)
                        }
                    })
                }}> Follow</button> : <button onClick={() => {

                    axios.post<PostUsersResponse>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{withCredentials:true,
                        headers:{
                            'API-KEY': "434d1825-24d7-4c1d-8143-2edf92c40e38"
                        }}).then(response => {
                       if(response.data.resultCode===0){
                           props.follow(u.id)
                       }
                    })
                }}> UnfOllow</button>}
            </div>)}
        </div>
    );
}


