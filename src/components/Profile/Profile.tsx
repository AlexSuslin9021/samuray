import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPost/MyPostContainer";
import {ProfileType} from "../../Redux/reducerProfile/reducerProfile";

type ProfileTypeInfo={
    profile:ProfileType
}
export function Profile(props:ProfileTypeInfo){
    debugger
    return(
        <div className='contains'>
            <ProfileInfo profile={props.profile}  />
            <MyPostContainer />

        </div>
)
}
