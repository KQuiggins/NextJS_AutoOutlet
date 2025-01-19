'use client';
import { createContext, useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import geUnreadMessageCount from "../actions/getUnreadMessageCount";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [unreadCount, setUnreadCount] = useState(0);

    const { data: session } = useSession();

    useEffect(() => {
        if (session) {
            geUnreadMessageCount()
                .then((res) => {
                    setUnreadCount(res.count);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [geUnreadMessageCount, session]);

    return (
        <GlobalContext.Provider value={{ unreadCount, setUnreadCount }}>
        {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};