
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCCgGuHu3QVUPP5tlqOFY3Jj6FbsqIOdZ0",
  authDomain: "filmyknus.firebaseapp.com",
  projectId: "filmyknus",
  storageBucket: "filmyknus.appspot.com",
  messagingSenderId: "28806456075",
  appId: "1:28806456075:web:87b718b07a7d812569b80e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export default app;