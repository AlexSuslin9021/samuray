import React from 'react';
import {initialStateType, usersType} from "../../Redux/reducerUsers";
type PropsUsersType={
    users:initialStateType
    follow:(id: number)=>void
    unFollow: (id: number)=>void
    setUsers: (users: usersType) =>void
}
const Users = (props:PropsUsersType) => {
    debugger
    return (
        <div>
            {props.users.users.map (u=><div>
            <div>
                <img src={u.urlFoto} alt=""/>
                <span> {u.name}</span>
            </div>
                <div>

                    <span> {u.location.city}</span>
                    <span> {u.location.country}</span>
                </div>
                {u.follow ? <button onClick={()=>{props.unFollow(u.id)}}> Follow</button> :<button onClick={()=>{props.follow(u.id)}}> UnfOllow</button>}
            </div>)}
        </div>
    );
};

export default Users;