import React, { useState } from 'react';

interface UserContextProps {
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    checkUserLoggedIn: () => boolean;
}

const UserContext = React.createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkUserLoggedIn = () => {
        const userInfo = localStorage.getItem('user-info');
        return userInfo !== null;
    };

    return (
        <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, checkUserLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;