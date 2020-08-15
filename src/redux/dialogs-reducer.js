const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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

}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody
             return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 8, message: body}]
            }
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;