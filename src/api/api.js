import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '021efe4e-2e64-49bb-a5ce-7be4262fd833'
    }
})
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
               return response.data
            })
    }
}

export const authMeAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => {
               return response.data
            })
    }
}

export const followAPI = {
    follow(u) {
        return instance.post(`follow/${u.id}`,{})
            .then(response => {
                return response.data
            })
    }
}
export const unfollowAPI = {
    unfollow(u) {
        return instance.delete(`follow/${u.id}`)
            .then(response => {
                return response.data
            })
    }
}

