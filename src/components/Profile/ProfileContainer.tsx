import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppstateType} from "../../Redux/reduxState";
import {changeProfileThunkCreator, ProfileType} from "../../Redux/reducerProfile/reducerProfile";
import { RouteComponentProps, withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";


type ProfileContainerType = MapStateToPropsType & {

    setProfile: (userId: string) => void
}

export class ProfileContainer extends React.Component <PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.setProfile(userId)
    }

    render() {

        // if(!this.props.isAuth) return <Redirect to={'/login'}/>
        return <Profile {...this.props} profile={this.props.profile}/>
    }

}

type PathParamsType = {
    userId: string,
}

// Your component own properties
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType

type MapStateToPropsType = {
    profile: ProfileType

}
const mapStateToProps = (state: AppstateType): MapStateToPropsType => {
    return {
        profile: state.reducerProfile.profile,

    }
}

let withRouterForProfile = withRouter(ProfileContainer)
export const ContainerForProfileContainer = withAuthRedirect(connect(mapStateToProps, {
    setProfile: changeProfileThunkCreator
})(withRouterForProfile))