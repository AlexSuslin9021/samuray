import React from 'react';
import {usersType} from "../../Redux/reducerUsers";
import axios from "axios";
import usersPhoto from '../../assets/image/3607444.png'



type PropsUsersType = {
    users: usersType[]
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: usersType[]) => void
}


export type GetUsersResponse = {
    items: usersType[]
    totalCount: number
    error: string | null
}

class UsersC extends React.Component< PropsUsersType,usersType[]> {
    constructor(props:PropsUsersType) {
        super(props)
        if(this.props.users.length===0) {
            axios.get<GetUsersResponse>("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                debugger
                props.setUsers(response.data.items)
            })
        }

    }
render() {
    return (
        <div>
            {this.props.users.map(u=><div key={u.id}>
                <div>
                    <img src={ u.photos.small !==null ? u.photos.small :usersPhoto} alt=""/>
                    <span> {u.name}</span>
                </div>
                <div>
                    {/*<span> {'location.city'}</span>*/}
                    {/*<span> {'location.country'}</span>*/}
                </div>
                {u.follow ? <button onClick={()=>{this.props.unFollow(u.id)}}> Follow</button> :<button onClick={()=>{this.props.follow(u.id)}}> UnfOllow</button>}
            </div>)}
        </div>
    );
}
}
;

export default UsersC;

//===============
//     props.setUsers(
//         [
//             {
//                 id: 1,
//                 urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPwtLELR6UBlHi5ZFe04WtAijnDam0G94bMQ&usqp=CAU',
//                 follow: true,
//                 name: 'alex',
//                 status: 'I am good',
//                 location: {city: 'London', country: 'England'}
//             },
//             {
//                 id: 2,
//                 urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPwtLELR6UBlHi5ZFe04WtAijnDam0G94bMQ&usqp=CAU',
//                 follow: false,
//                 name: 'Sveta',
//                 status: 'I am crazy',
//                 location: {city: 'Milan', country: 'Italy'}
//             },
//             {
//                 id: 3,
//                 urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPwtLELR6UBlHi5ZFe04WtAijnDam0G94bMQ&usqp=CAU',
//                 follow: true,
//                 name: 'Dima',
//                 status: 'I am smart',
//                 location: {city: 'LA', country: 'USA'}
//             }
//         ]
//     )
// }

// const instance = axios.create({
//     withCredentials: true,
//     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
//     headers:     {
//         "API-KEY": "434d1825-24d7-4c1d-8143-2edf92c40e38"
//     }
// });