import React from 'react';
import { createContext } from 'react';
import app from '../../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';

const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({children}) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  }
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }
  const logOut = () => {
    return signOut(auth);
  }
  const updateUser = profile => {
    return updateProfile(auth.currentUser, profile);
  }
  useEffect( () => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    } )
    return () => unSubscribe();
  }, [])

  const authInfo = { user, createUser, login, logOut, googleSignIn, updateUser };
  
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    </div>
  );
};

export default UserContext;