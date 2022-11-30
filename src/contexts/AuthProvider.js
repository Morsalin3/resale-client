import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';

export const Authcontext = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignin =()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logout=()=>{
        setLoading(true)
        localStorage.removeItem('accessToken')
        return signOut(auth)
    }

    const updateUser = (userInfo)=>{
        return updateProfile(auth.currentUser, userInfo)
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('user observing');
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unsubscribe();
    },[])

    const authInfo = {
        createUser,
        signIn,
        googleSignin,
        logout,
        user,
        updateUser,
        loading
    }

    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    
    );
};

export default AuthProvider;