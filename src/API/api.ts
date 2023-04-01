import axios from "axios";
import {GetUsersResponse} from "../components/Users/UsersContainer";
import {ProfileType} from "../Redux/reducerProfile/reducerProfile";
import {GetDataResponse} from "../components/Header/ContainerHeader";
import {PostUsersResponse} from "../components/Users/Users";

const api = 'https://social-network.samuraijs.com/api/1.0/'
const instance = axios.create({
    withCredentials: true,
    baseURL: api,
    headers:{
        "API-KEY":"434d1825-24d7-4c1d-8143-2edf92c40e38"
    }


})

export const usersApi = {
    getUsers: (currentPage: number, pageSize: number) => {

        return instance.get<GetUsersResponse>(api + `users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    getProfile: (userId: string) => {
        if(!userId) userId='28028'

        return instance.get<ProfileType>(api + `profile/` + userId).then(response => {
            return response.data
        })
    },
    getAuth: () => {

        return instance.get<GetDataResponse>(api + `auth/me`).then(response => {

            return response.data
        })
    },
    gtAuthPost: (id:number) => {

      return   instance.post<PostUsersResponse>(`https://social-network.samuraijs.com/api/1.0/follow/${id}`).then(response => {

            return response.data
        })
    },
    gtAuthDelete: (id:number) => {

        return   instance.delete<PostUsersResponse>(`https://social-network.samuraijs.com/api/1.0/follow/${id}`).then(response => {

            return response.data
        })
    }
}

export const profileApi = {
    getProfile: (userId: string) => {
        if(!userId) userId='28028'

        return instance.get<ProfileType>(api + `profile/` + userId).then(response => {
            return response.data
        })
    },
    getStatus(userId:string){
        debugger
        // if(!userId) userId='28028'
        return instance.get(api +`profile/status/${userId}`)
    },
    updateStatus(status:string){
        return instance.put(api +`status`,{status:status}).then(response=>{

            return response.data
        })
    },
}
// export const getUsers = (currentPage: number, pageSize: number) => {
//
//     return axios.get<GetUsersResponse>(api + `users?page=${currentPage}&count=${pageSize}`, {withCredentials: true}).then(response => {
//         return response.data
//     })
// }

// export const getProfile = (userId: string) => {
//
//     return axios.get<ProfileType>(api + `profile/` + userId).then(response => {
//         return response.data
//     })
// }

// export const getAuth = () => {
//
//     return axios.get<GetDataResponse>(api + `auth/me`, {withCredentials: true}).then(response => {
//
//         return response.data
//     })
// }