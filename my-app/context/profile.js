import { createContext, useContext} from "react";

const AppContext = createContext();

export function AppWrapper({children}) {
    let sharedState = {red :"open"};

    return(
        <AppContext.Provider value={sharedState}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    
}