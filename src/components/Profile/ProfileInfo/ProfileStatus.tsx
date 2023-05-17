import React, {ChangeEvent} from 'react';


type ProfileStatusType = {
    status: string
    updateProfileStatus: (status: string) => void

}

class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateMode = () => {
        this.setState({editMode: true})
        // this.props.updateProfileStatus(this.state.status)
    }
    desActivatedMode = () => {
        this.setState({editMode: false})
        this.props.updateProfileStatus(this.state.status)
    }
    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: ProfileStatusType, prevState: { editMode: boolean, status: string }): void {
        console.log('update')
        if (prevProps.status !== this.props.status)
            this.setState({status: this.props.status})
    }


    render() {
        console.log('render')
        return <div> <b>Status:</b>
            {this.state.editMode ?
                <span> <input onChange={this.onChangeStatus} value={this.state.status} autoFocus={true}
                              onBlur={this.desActivatedMode}/></span>
                :
                <span onDoubleClick={this.activateMode}> {this.state.status || 'Hello friend'}</span>
            }
        </div>;
    }
};

export default ProfileStatus;