/**
 * StoreContext.jsx
 * allow other components to access this context to show the store name throughout
 */

//import context and state pieces from react
    import { createContext, useContext, useState } from "react";

//define name of context
    const StoreContext = createContext();

//define context provider
export const StoreProvider = ({ children }) => {
    const [storeName, setStoreName] = useState("Fancy Book Store");

    return (
        <StoreContext.Provider value={{ storeName }}>
            { children }
        </StoreContext.Provider>
    )
}

export const useStore = () => useContext(StoreContext);