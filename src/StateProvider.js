import React, { createContext, useContext, useReducer } from 'react'; 

export const StateContext = createContext(); // This block prepares the Data

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer( reducer, initialState)}>
        {children}
    </StateContext.Provider>
); //We call this a higher order component  We use it to wrap our app using a StateProvider to provide a data functionality

export const useStateValue = () => useContext(StateContext); // We use the useStateValue hook to pull things from the data  


