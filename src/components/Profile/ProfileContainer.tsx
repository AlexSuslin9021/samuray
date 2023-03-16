import React from 'react';
import {Profile} from "./Profile";

import axios from "axios";

import {connect} from "react-redux";
import {AppstateType} from "../../Redux/reduxState";
import {changeProfileAC, ProfileType} from "../../Redux/reducerProfile/reducerProfile";
import {RouteComponentProps, withRouter} from "react-router-dom";

type ProfileContainerType= MapStateToPropsType &{

    setProfile:(profile: ProfileType)=>void
}

export class ProfileContainer extends React.Component <PropsType>{
    componentDidMount(){
        let userId=this.props.match.params.userId
        axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).then(response => {

            // this.props.setUsers(response.data.items)
            this.props.setProfile(response.data)
            // this.props.setFetching(false)
        })
    }
    render() {
        return <Profile profile={this.props.profile} />
    }

}
type PathParamsType = {
    userId: string,
}

// Your component own properties
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType

type MapStateToPropsType={
    profile:ProfileType
}
const mapStateToProps=(state:AppstateType):MapStateToPropsType=>{
    return {
        profile:state.reducerProfile.profile
    }
}

let withRouterForProfile= withRouter(ProfileContainer)
export const ContainerForProfileContainer= connect(mapStateToProps, {
    setProfile:changeProfileAC
})(withRouterForProfile)