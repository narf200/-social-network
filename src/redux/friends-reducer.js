let initialState =  {
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
            avatar: 'https://pbs.twimg.com/profile_images/1244678697564553220/4u7DvR7X_400x400.jpg',
            name: 'Minko Gechev'
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

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
        return state;
    }
}

export default friendsReducer;