import { createContext } from "react";

type PropType = {
    children: React.ReactNode;
};

// Validate whos login
let whosLogin = "admin";
const setWhosLogin = (who: string) => {
    whosLogin = who;
};

export const GlobalContext = createContext({ setWhosLogin, whosLogin });

export function GlobalProvider({ children }: PropType) {
    return (
        <GlobalContext.Provider value={{ setWhosLogin, whosLogin }}>
            {children}
        </GlobalContext.Provider>
    );
}
