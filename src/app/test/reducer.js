const names = (state = {}, action) => {
    console.log("REDUCER CALLED", action.selectedUser)
    switch (action.type) {
        case "GET_NAMES":
            state = {
                ...state,
                names: action.payload,
            }
            break;
        case "GET_USER_DETAILS":
            state = {
                ...state,
                selectedUser: action.selectedUser,
                details: action.payload
            }
    }
    return state;
};

export default names;