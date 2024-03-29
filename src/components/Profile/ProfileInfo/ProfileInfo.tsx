import React, { ChangeEvent, useState } from "react";
import s from "../ProfileInfo/ProfileInfo.module.css";
import { ProfileType } from "../../../Redux/reducerProfile/reducerProfile";
import users from "../../../assets/image/3607444.png";
import ProfileStatus from "./ProfileStatus";
import { ProfileContact } from "./Profilecontact";
import { saveDataProfileType } from "../../../API/api";
import { ProfileFormData } from "./ProfileDataForm";
import changePhoto from "../../../assets/image/changePhoto.svg";
import {Button} from "../../Button/Button";


type ProfileTypeInfo = {
    profile: ProfileType;
    status: string;
    updateProfileStatus: (status: string) => void;
    isOwner: boolean;
    savePhoto: (photo: any) => void;
    saveProfileData: (profile: saveDataProfileType) => void;
};

export function ProfileInfo(props: ProfileTypeInfo) {
    const [edit, setEdit] = useState(true);

    const onClickEdit = () => {
        setEdit(false);
    };

    const onClickSave = (profile: saveDataProfileType) => {
        props.saveProfileData(profile);
        setEdit(true);
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) props.savePhoto(e.target.files[0]);
    };

    return (
        <div className={s.containProfileInfo}>
            <div className={s.avatar}>
                <img src={props.profile.photos.small ? props.profile.photos.small : users} alt="" />
                {props.isOwner && (
                    <div>
                        <input className={s.form} accept={"*"}  id={"image"} type={"file"} onChange={onChangeHandler} />
                        <label className={s.label} htmlFor="image">
                            <img style={{ width: "25px", height: "25px" }} src={changePhoto} alt="" />
                        </label>
                    </div>
                )}
            </div>
            <div className={s.description}>
                {props.isOwner && edit && <Button onClick={onClickEdit} name={'Change data'}/>        }

                <ProfileStatus status={props.status} updateProfileStatus={props.updateProfileStatus} />
                {edit ? <ProfileContact profile={props.profile} /> : <ProfileFormData profile={props.profile} callback={onClickSave} />}
            </div>
        </div>
    );
}




