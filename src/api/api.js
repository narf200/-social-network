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

    }
}

export const followAPI = {
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }
}

export const unfollowAPI = {
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }
}

export const profileAPI = {
    profile(userId) {
        return instance.get(`profile/2` + userId)

    }
}
