import axios from "axios";
import {GetUsersResponse} from "../components/Users/UsersContainer";
import {ContactProfileType, ProfileType} from "../Redux/reducerProfile/reducerProfile";
import {GetDataResponse} from "../components/Header/ContainerHeader";
import {PostUsersResponse} from "../components/Users/Users";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "434d1825-24d7-4c1d-8143-2edf92c40e38"
    }


})

export const usersApi = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get<GetUsersResponse>( `users?page=${currentPage}&count=${pageSize}`)
    },
    getProfile: (userId: string) => {return instance.get<ProfileType>( `profile/` + userId)
    },
    gtAuthPost: (id: number) => {
        return instance.post<PostUsersResponse>(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
    },
    gtAuthDelete: (id: number) => {

        return instance.delete<PostUsersResponse>(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
    }
}



export const profileApi = {
    saveDataProfile: (profile: saveDataProfileType) => {return instance.put<ApiProfilePutType<saveDataProfileType>>( `profile/`,profile )
    },
    getStatus(userId: string) {return instance.get( `profile/status/${userId}`)
    },
    updateStatus(status: string) {return instance.put<ApiProfilePutType>( `profile/status`, {status: status})
    },
    updatePhoto(photoFile:any){
        const formData=new FormData()
        formData.append('image',photoFile)
        return instance.put<ApiProfilePutType<{photos:{ small:string, large:string}}>>(`/profile/photo`,formData,{
            headers:{"Content-Type":'multipart/form-data'}
        })
    }
}




export const authApi = {
    me: () => {return instance.get<AuthType<{ id: string, email: string, login: string }>>( '/auth/me')},
    loginCreate: (email: string, password: string, rememberMe: boolean = false) => {return instance.post<AuthType<{ userId: number }>>( '/auth/login',
        {email, password, rememberMe})
    },
    loginDelete: () => {return instance.delete<AuthType<{}>>( '/auth/login')}
}

export type AuthType<D> = {
    resultCode: number
    messages: string[],
    data: D
}

type ApiProfilePutType<D={}> =
    {
        resultCode: number
        messages: string[],
        data: D
    }

    export type saveDataProfileType={
        "aboutMe": string,
        "contacts": ContactProfileType
        "lookingForAJob": boolean,
        "lookingForAJobDescription": string,
        "fullName": string,
        "userId": number,

    }