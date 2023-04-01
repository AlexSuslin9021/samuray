import React from 'react';

type ProfileStatusType={
    status:string
    getProfileStatus:(status:string)=>void
}
class ProfileStatus extends React.Component<ProfileStatusType>{

    state={
        editMode:false,
        status:this.props.status
    }
    onClickHandler=()=>{
        this.setState( {editMode:!this.state.editMode})
    }

render() {
debugger
    return <div>
        { this.state.editMode ?
        <span> <input autoFocus={true} onBlur={this.onClickHandler}/></span>
            :
        <span onDoubleClick={this.onClickHandler}> {this.props.status}</span>
        }
    </div>;
}
};

export default ProfileStatus;