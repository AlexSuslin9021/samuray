import React from 'react';
import {Profile} from "./Profile";
import {PropsType} from "./MyPost/MyPost";
import {propsProfilePage} from "../../Redux/reducerProfile/reducerProfile";
import axios from "axios";
import {GetUsersResponse, PropsUsersType} from "../Users/UsersContainer";
import {usersType} from "../../Redux/reducerUsers";

export class ProfileContainer extends React.Component {
    componentDidMount(){
        axios.get<GetUsersResponse>(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {

            // this.props.setUsers(response.data.items)
            // this.props.setTotalUser(response.data.totalCount)
            // this.props.setFetching(false)
        })
    }
    render() {
        return <Profile />
    }

}