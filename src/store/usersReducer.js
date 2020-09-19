const initialState = {
    users: [
        {
            name: 'salis',
            email: 'salis@salis.org'
        },
        {
            name: 'ab',
            email: 'ab@ab.org'
        },
        {
            name: 'angie',
            email: 'angie@angie.org'
        },
        {
            name: 'tony',
            email: 'tony@tony.org'
        }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            const newUser = { name: action.payload.name, email: action.payload.email };
            return {...state, users: [...state.users, newUser]}
        default:
            return state;
    }

}

export default usersReducer;