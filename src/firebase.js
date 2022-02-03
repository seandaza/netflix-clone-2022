// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut  } from "firebase/auth";
/* import { useEffect, useState } from "react"; */
/* import { useDispatch } from "react-redux"; */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS7Bu9cWqlMHRnhp-oUNmvyYR8jkUWyh4",
  authDomain: "netvideo-4fcbf.firebaseapp.com",
  projectId: "netvideo-4fcbf",
  storageBucket: "netvideo-4fcbf.appspot.com",
  messagingSenderId: "1027378000053",
  appId: "1:1027378000053:web:90fdd2775bbf33267a8efc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
/* export function useAuth() {
  
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
} */

/*   useEffect(() => { 
     const unsubscribe = onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid, 
          email: userAuth.email,
        }));
      } else {
        dispatch(logout);
      }
    })
    return unsubscribe;
  },[dispatch]); */