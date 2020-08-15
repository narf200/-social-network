import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";

let store = {
    _state: {
        profilePage: {
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
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, avatar: 'https://html.crumina.net/html-olympus/img/avatar7-sm.jpg', name: 'Michel'},
                {
                    id: 2,
                    avatar: 'https://pbs.twimg.com/profile_images/464310668984725504/ym-M-SNv_400x400.jpeg',
                    name: 'Denis'
                },
                {
                    id: 3,
                    avatar: 'https://pbs.twimg.com/profile_images/1073304603465117696/IrzxXYmH_400x400.jpg',
                    name: 'Joe'
                },
                {
                    id: 4,
                    avatar: 'https://pbs.twimg.com/profile_images/1261680598197784577/PB4aMH7b_400x400.png',
                    name: 'Samanta'
                },
                {
                    id: 5,
                    avatar: 'https://pbs.twimg.com/profile_images/1053159168197111808/8eipWrau_400x400.jpg',
                    name: 'Cara'
                },
                {
                    id: 6,
                    avatar: 'https://pbs.twimg.com/profile_images/1111627718544764931/x9dG4u6X_400x400.jpg',
                    name: 'Bille'
                },
                {
                    id: 7,
                    avatar: 'https://pbs.twimg.com/profile_images/1276770212927410176/qTgTIejk_400x400.jpg',
                    name: 'freeCodeCamp'
                },
            ],
            messages: [
                {id: 1, message: 'Hi James!'},
                {
                    id: 2,
                    message: 'Great, I’ll see you tomorrow!'
                },
                {
                    id: 3,
                    message: 'We’ll have to check that at the office.'
                },
                {
                    id: 4,
                    message: 'it my first message'
                },
                {
                    id: 5,
                    message: 'Hello, let\'s  go to the concert tomorrow'
                },
                {
                    id: 6,
                    message: 'I saw your pictures. They are cool.'
                },
                {
                    id: 7,
                    message: 'Mbm'
                }
            ],
            newMessageBody: ""

        },
        friendsPage: {
            friends: [
                {id: 1, avatar: 'https://html.crumina.net/html-olympus/img/avatar7-sm.jpg', name: 'Michel'},
                {
                    id: 2,
                    avatar: 'https://pbs.twimg.com/profile_images/464310668984725504/ym-M-SNv_400x400.jpeg',
                    name: 'Denis'
                },
                {
                    id: 3,
                    avatar: 'https://pbs.twimg.com/profile_images/1073304603465117696/IrzxXYmH_400x400.jpg',
                    name: 'Joe'
                },
                {
                    id: 4,
                    avatar: 'https://pbs.twimg.com/profile_images/1261680598197784577/PB4aMH7b_400x400.png',
                    name: 'Samanta'
                },
                {
                    id: 5,
                    avatar: 'https://pbs.twimg.com/profile_images/1053159168197111808/8eipWrau_400x400.jpg',
                    name: 'Cara'
                },
                {
                    id: 6,
                    avatar: 'https://pbs.twimg.com/profile_images/1111627718544764931/x9dG4u6X_400x400.jpg',
                    name: 'Bille'
                },
                {
                    id: 7,
                    avatar: 'https://pbs.twimg.com/profile_images/1276770212927410176/qTgTIejk_400x400.jpg',
                    name: 'freeCodeCamp'
                },
            ]
        }

    },
    _callSubscriber() {
        console.log('Ave SATAN')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

     dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action)

        this._callSubscriber(this._state);
    }

}





export default store;
window.store = store
