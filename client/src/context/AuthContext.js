"use client"
import { auth } from '@/firebase/client';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            //set current user to user but if he don't exist he will be null
            setCurrentUser(user ?? null)

        })
        return () => unsubscribe()
    }, [])
    return (
        <AuthContext.Provider value={
            currentUser
        }>
            {children}
        </AuthContext.Provider>
    );
}
export const useAuth = () => (useContext(AuthContext))