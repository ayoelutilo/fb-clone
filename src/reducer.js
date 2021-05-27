// This is the in

export const initialState = {
    user: null,
}; // This is the initial state of the user (The data layer)

export const actionTypes = {
    SET_USER: "SET_USER",
}; // This are actions that can be dispatched into the data

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {    // If you just recieved an action
        case actionTypes.SET_USER:
            return { // Return what it currently looks like ; 
                ...state, // but change the user ;
                user: action.user, // to whatever we passed in as a user payload inside the action that we passed ;
            };
            default:
                return state; // else return state .
            }
        };
        
        export default reducer;