import {updateProfile, signInWithEmailAndPassword ,getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
     


    const googleProvider = new GoogleAuthProvider();
    
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');
      const [isLogin, setIsLogin] = useState(false);
    
      const auth = getAuth();
    
      const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
          .then(result => {
            const user = result.user;
            console.log(user);
          })
      }
    
      const toggleLogin = e => {
        setIsLogin(e.target.checked)
      }
    
      const handleNameChange = e => {
        setName(e.target.value);
      }
      const handleEmailChange = e => {
        setEmail(e.target.value);
      }
    
      const handlePasswordChange = e => {
        setPassword(e.target.value)
      }
    
      const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
          setError('Password Must be at least 6 characters long.')
          return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
          setError('Password Must contain 2 upper case');
          return;
        }
    
        if (isLogin) {
          processLogin(email, password);
        }
        else {
          registerNewUser(email, password);
        }
    
      }
    
      const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
          })
          .catch(error => {
            setError(error.message);
          })
      }
    
      const registerNewUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
          // .then(result => {
          //   const user = result.user;
          //   console.log(user);
          //   setError('');
          //   setUserName();
          // })
          .catch(error => {
            setError(error.message);
          })
      }
    
      // const setUserName = () => {
      //   updateProfile(auth.currentUser, { displayName: name })
      //     .then(result => { })
      // }


    

    const signInUsingGoogle = () =>{
        
        const googleProvider = new GoogleAuthProvider();
        
        return signInWithPopup(auth, googleProvider)
        
    }

    // observe user state change
    useEffect( () => {
        const unsubscribed = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    },[])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        email,
        password,
        setUser,
        // setUserName,
        isLoading,
        setIsLoading,
        signInUsingGoogle,
        registerNewUser,
        logOut,
        isLogin,
        toggleLogin,
        handleGoogleSignIn,
        handleNameChange,
        handlePasswordChange,
        handleRegistration,
        handleEmailChange
    }
}

export default useFirebase;