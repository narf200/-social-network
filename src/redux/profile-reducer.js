import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState =  {
    posts: [
        {
            id: 1,
            avatar: 'https://html.crumina.net/html-olympus/img/avatar7-sm.jpg',
            message: 'Hi, how are you',
            likesCount: '5'
        },
        {
            id: 2,
            avatar: 'https://pbs.twimg.com/profile_images/464310668984725504/ym-M-SNv_400x400.jpeg',
            message: 'It`s my first post',
            likesCount: '54'
        },
        {
            id: 3,
            avatar: 'https://pbs.twimg.com/profile_images/1073304603465117696/IrzxXYmH_400x400.jpg',
            message: 'Send us a picture of your pet and we will tell you what it\'s job title is',
            likesCount: '16'
        }
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                avatar: 'https://html.crumina.net/html-olympus/img/avatar7-sm.jpg',
                message: action.newPostText,
                likesCount: '16'
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
         case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        } case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }

}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.profile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })

}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })

}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })

}

export default profileReducer;
