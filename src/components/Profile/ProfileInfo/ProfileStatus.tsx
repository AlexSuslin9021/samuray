import React, {ChangeEvent} from 'react';

type ProfileStatusType={
    status:string
    updateProfileStatus:(status:string)=>void

}
class ProfileStatus extends React.Component<ProfileStatusType>{

    state={
        editMode:false,
        status:this.props.status
    }
    activateMode=()=>{
        this.setState( {editMode:true})
        this.props.updateProfileStatus(this.state.status)
    }
    desActivatedMode=()=>{
        this.setState( {editMode:false})
    }
    onChangeStatus=(e:ChangeEvent<HTMLInputElement>)=>{
        this.setState( {status: e.currentTarget.value})
    }

render() {

    return <div>
        { this.state.editMode ?
        <span> <input onChange={this.onChangeStatus} value={this.state.status} autoFocus={true} onBlur={this.desActivatedMode}/></span>
            :
        <span onDoubleClick={this.activateMode}> {this.state.status || 'Hello friend'}</span>
        }
    </div>;
}
};

export default ProfileStatus;