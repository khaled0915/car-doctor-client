import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../FireBase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);

    const [loading , setLoading] = useState(true)

    // for signup

    const createUser = (email , password ) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email, password)
    }

    // fot signIn 

    const signIn = (email ,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword (auth , password ,email);
    }



    useEffect( () =>{
      const unsubscribe =   onAuthStateChanged(auth , currentUser =>{

            setUser(currentUser);
            console.log('current suer ' , currentUser);
            setLoading(false);
        })
        return () =>{
            return unsubscribe(); 
        }






    }, [] )

    const authInfo = {

        user , 
        loading,
        createUser,
        signIn



    }


    return (
        <AuthContext.Provider value={authInfo}>

            {children}

            
        </AuthContext.Provider>
    );
};

export default AuthProvider;