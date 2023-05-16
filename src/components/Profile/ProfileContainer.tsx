import React, {ComponentType} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppstateType} from "../../Redux/reduxState";
import {
    changeProfileThunkCreator,
    getProfileStatusTC,
    ProfileType, savePhotoTC,
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
    savePhoto:(photo:any)=>void
}

export class ProfileContainer extends React.Component <PropsType> {
    refreshProfile(){
        let userId = this.props.match.params.userId
        if(!userId) {
            userId=this.props.authorisedUserId
            if(!userId){
                this.props.history.push('login')
            }
        }
        this.props.setProfile(userId)
        this.props.getProfileStatus(userId)
}
    componentDidMount() {

       this.refreshProfile()
        //80 выпуск 32 минута, возможно дописать
      //
    }
    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if(this.props.match.params.userId!==prevProps.match.params.userId)
        this.refreshProfile()
    }

    render() {

            // return this.props.isAuth ?
     return    <Profile {...this.props}
                        savePhoto={this.props.savePhoto}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateProfileStatus={this.props.updateProfileStatus}
                        isOwner={!this.props.match.params.userId}
                        />
        // : <Redirect to={'/login'}/>}
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
    isOwner:boolean


}
const mapStateToProps = (state: AppstateType): MapStateToPropsType => {
    return {
        profile: state.reducerProfile.profile,
        status:state.reducerProfile.status,
        authorisedUserId:state.authReducer.data.id,
        isAuth: state.authReducer.isAuth,
        isOwner: state.reducerProfile.isOwner

    }
}
export const ContainerForProfileContainer= compose<ComponentType>(

    connect(mapStateToProps, {
        setProfile: changeProfileThunkCreator,
        getProfileStatus: getProfileStatusTC,
        updateProfileStatus:updateProfileStatusTC,
        savePhoto: savePhotoTC
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)
// let withRouterForProfile = withRouter(ProfileContainer)
// export const ContainerForProfileContainer = withAuthRedirect(connect(mapStateToProps, {
//     setProfile: changeProfileThunkCreator
// })(withRouterForProfile))