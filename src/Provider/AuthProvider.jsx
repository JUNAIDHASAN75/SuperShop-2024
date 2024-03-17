import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const LoggedIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };
    
    const LogOut = () =>{
    setLoading(true);
    return signOut(auth)
    };

    const updateUserProfile = (name, photo)=>{
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName:name, photoURL:photo
        })
    }

    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            return unsubscribe()
        }
    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        LoggedIn,
        LogOut,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;