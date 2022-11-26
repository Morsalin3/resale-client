import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';

export const Authcontext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('user observing');
            setUser(currentUser)
        })
        return ()=> unsubscribe();
    },[])

    const authInfo = {
        createUser,
        signIn,
        logout,
        user
    }

    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    
    );
};

export default AuthProvider;