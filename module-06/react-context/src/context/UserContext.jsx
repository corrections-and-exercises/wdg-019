import {createContext, useContext, useState} from 'react';

export const UserContext = createContext(null);

export function UserContextProvider({children}) {
    const [user, setUser] = useState({name: 'karl', age: 20});
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    const context = useContext(UserContext);

    if (!context)
        throw new Error(
            'useUserContext must be used within a UserContextProvider'
        );

    return {user: context.user, setUser: context.setUser};
}
