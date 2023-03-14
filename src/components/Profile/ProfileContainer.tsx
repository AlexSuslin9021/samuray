import React from 'react';
import {Profile} from "./Profile";

import axios from "axios";

import {connect} from "react-redux";
import {AppstateType} from "../../Redux/reduxState";
import {changeProfileAC, ProfileType} from "../../Redux/reducerProfile/reducerProfile";

type ProfileContainerType={
    profile:ProfileType
    setProfile:(profile: ProfileType)=>void
}

export class ProfileContainer extends React.Component <ProfileContainerType>{
    componentDidMount(){
        axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {

            // this.props.setUsers(response.data.items)
            this.props.setProfile(response.data)
            // this.props.setFetching(false)
        })
    }
    render() {
        return <Profile profile={this.props.profile} />
    }

}
const mapStateToProps=(state:AppstateType)=>{
    return {
        profile:state.reducerProfile.profile
    }
}


export const ProfileBoss= connect(mapStateToProps, {
    setProfile:changeProfileAC
})(ProfileContainer)