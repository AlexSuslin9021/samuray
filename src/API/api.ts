import axios from "axios";
import {GetUsersResponse} from "../components/Users/UsersContainer";
import {ProfileType} from "../Redux/reducerProfile/reducerProfile";
import {GetDataResponse} from "../components/Header/ContainerHeader";

const api = 'https://social-network.samuraijs.com/api/1.0/'
const instance = axios.create({
    withCredentials: true,
    baseURL: api,
    headers:{
        "API-KEY":"434d1825-24d7-4c1d-8143-2edf92c40e38"
    }


})

export const apiObg = {
    getUsers: (currentPage: number, pageSize: number) => {

        return instance.get<GetUsersResponse>(api + `users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    getProfile: (userId: string) => {

        return axios.get<ProfileType>(api + `profile/` + userId).then(response => {
            return response.data
        })
    },
    getAuth: () => {

        return axios.get<GetDataResponse>(api + `auth/me`, {withCredentials: true}).then(response => {

            return response.data
        })
    }
}
export const getUsers = (currentPage: number, pageSize: number) => {

    return axios.get<GetUsersResponse>(api + `users?page=${currentPage}&count=${pageSize}`, {withCredentials: true}).then(response => {
        return response.data
    })
}

export const getProfile = (userId: string) => {

    return axios.get<ProfileType>(api + `profile/` + userId).then(response => {
        return response.data
    })
}

export const getAuth = () => {

    return axios.get<GetDataResponse>(api + `auth/me`, {withCredentials: true}).then(response => {

        return response.data
    })
}