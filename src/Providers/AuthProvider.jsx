import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider , createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config'
import axios from "axios";

/*
 *TODO: Update new Spinner 
 */ 

export const AuthContex = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const LoginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logout = () => {
        setLoading(true)
        signOut(auth)
    }
    // Update Profile Auth
    const userProfileUpdate = (name,photo) => {
        return updateProfile(auth.currentUser,{
            displayName:name, photoURL:photo
        });
    }
    // google
    const googleSign =()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }



useEffect(() => {
    const unsubcrive = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        console.log("currentUser", currentUser);
        if(currentUser){
            axios.post('http://localhost:5000/jwt',{email:currentUser.email})
            .then(data=>{
                // console.log(data.data);
                localStorage.setItem('access-token',data.data)
            })
        }
        else{
            console.log('user to null tai ');
            localStorage.removeItem('access-token')
        }
        setLoading(false)
    })
    return () => {
        return unsubcrive;
    }
}, [])
const AuthInfo = {
    user,
    loading,
    createUser,
    LoginUser,
    logout,
    userProfileUpdate,
    googleSign
}

return (
    <AuthContex.Provider value={AuthInfo}>
        {children}
    </AuthContex.Provider>
);
};

export default AuthProvider;