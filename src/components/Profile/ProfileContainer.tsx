import React, {ComponentType} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppstateType} from "../../Redux/reduxState";
import {
    changeProfileThunkCreator,
    getProfileStatusTC,
    ProfileType,
    updateProfileStatusTC
} from "../../Redux/reducerProfile/reducerProfile";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type ProfileContainerType = MapStateToPropsType & {

    setProfile: (userId: any) => void
    status:string
    getProfileStatus:(userId:string)=>void
    updateProfileStatus:(status:string)=>void
}

export class ProfileContainer extends React.Component <PropsType> {
    componentDidMount() {

        let userId = this.props.match.params.userId
        if(!userId) {
            userId=this.props.authorisedUserId
            this.props.setProfile(userId)
            this.props.getProfileStatus(userId)}
        // this.props.setProfile(userId)
        // this.props.getProfileStatus(userId)
    }

    render() {
        { return this.props.isAuth ?
         <Profile {...this.props}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateProfileStatus={this.props.updateProfileStatus}
                        /> : <Redirect to={'/login'}/>}
    }

}

type PathParamsType = {
    userId: any,
}

// Your component own properties
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType

type MapStateToPropsType = {
    profile: ProfileType
    status:string
    authorisedUserId:string|null
    isAuth:boolean


}
const mapStateToProps = (state: AppstateType): MapStateToPropsType => {
    return {
        profile: state.reducerProfile.profile,
        status:state.reducerProfile.status,
        authorisedUserId:state.authReducer.data.id,
        isAuth: state.authReducer.isAuth

    }
}
export const ContainerForProfileContainer= compose<ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
        setProfile: changeProfileThunkCreator,
        getProfileStatus: getProfileStatusTC,
        updateProfileStatus:updateProfileStatusTC
    }),
    withRouter
)(ProfileContainer)
// let withRouterForProfile = withRouter(ProfileContainer)
// export const ContainerForProfileContainer = withAuthRedirect(connect(mapStateToProps, {
//     setProfile: changeProfileThunkCreator
// })(withRouterForProfile))