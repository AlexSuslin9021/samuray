import React, {ComponentType} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppstateType} from "../../Redux/reduxState";
import {changeProfileThunkCreator, ProfileType} from "../../Redux/reducerProfile/reducerProfile";
import { RouteComponentProps, withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type ProfileContainerType = MapStateToPropsType & {

    setProfile: (userId: any) => void
}

export class ProfileContainer extends React.Component <PropsType> {
    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        this.props.setProfile(userId)
    }

    render() {


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
export const ContainerForProfileContainer= compose<ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
        setProfile: changeProfileThunkCreator
    }),
    withRouter
)(ProfileContainer)
// let withRouterForProfile = withRouter(ProfileContainer)
// export const ContainerForProfileContainer = withAuthRedirect(connect(mapStateToProps, {
//     setProfile: changeProfileThunkCreator
// })(withRouterForProfile))