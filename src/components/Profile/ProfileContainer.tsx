import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppstateType} from "../../Redux/reduxState";
import {changeProfileAC, ProfileType} from "../../Redux/reducerProfile/reducerProfile";
import {RouteComponentProps, withRouter} from "react-router-dom";
import { usersApi} from "../../API/api";

type ProfileContainerType= MapStateToPropsType &{

    setProfile:(profile: ProfileType)=>void
}

export class ProfileContainer extends React.Component <PropsType>{
    componentDidMount(){
        let userId=this.props.match.params.userId
        usersApi.getProfile(userId).then(response => {

            // this.props.setUsers(response.data.items)
            this.props.setProfile(response)
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