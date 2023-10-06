"use client";
import React, {createContext, useState, useEffect} from 'react';
import {onAuthStateChanged , createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {auth} from '../firebase/firebase.config';

export const UserContext = createContext();
export const UserContextProvider = (props) => {
    let {children} = props;
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const signUp = (email, password)=>{
        createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password)=>{
        signInWithEmailAndPassword(auth, email, password);
    }
    const signout = ()=>{
        signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <UserContext.Provider value={{ signIn, signUp , user , signout}}>
           {loading ? <div>Loading...</div> : children}
        </UserContext.Provider>
    );
};
