import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCVDejytGaYBD01wSAHxcd2UtsixeNt7Ls",
  authDomain: "clone-b3758.firebaseapp.com",
  projectId: "clone-b3758",
  storageBucket: "clone-b3758.appspot.com",
  messagingSenderId: "137880457752",
  appId: "1:137880457752:web:65a83dd5403a1044d7296d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()

export default app