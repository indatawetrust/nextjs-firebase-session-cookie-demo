import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const auth = getAuth()

export const signInWithGoogle = () => signInWithPopup(auth, provider);
