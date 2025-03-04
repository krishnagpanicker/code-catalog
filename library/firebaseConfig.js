import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBVLd9neoC_1oanwnwfmilYNWPmXAUqhz0",
    authDomain: "code-catalog-71c05.firebaseapp.com",
    projectId: "code-catalog-71c05",
    storageBucket: "code-catalog-71c05.firebasestorage.app",
    messagingSenderId: "334314044853",
    appId: "1:334314044853:web:eb4a675f3b30cc9d46adfc",
    measurementId: "G-7EFMZRM80G"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);
export const googleProvider = new GoogleAuthProvider(app).addScope('email');
export default app;