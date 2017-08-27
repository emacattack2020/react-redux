const names = (state = {}, action) => {
    console.log("REDUCER CALLED", action.selectedUser)
    switch (action.type) {
        case "REQUEST_NAMES":
            state = {
                ...state,
                names: action.payload, 
                isNamesFetching: action.isNamesFetching
            }
            break;
        case "REQUEST_USER_DETAILS":
            state = {
                ...state,
                selectedUser: action.selectedUser,
                isFetching: action.isFetching
            }
            break;
        case "RECIEVE_NAMES":
            state = {
                ...state,
                names: action.payload,
                isNamesFetching: action.isNamesFetching
            }
            break;
        case "RECIEVE_USER_DETAILS":
            state = {
                ...state,
                selectedUser: action.selectedUser,
                details: action.payload,
                isFetching: action.isFetching
            }
            break;
    }
    return state;
};

export default names;