import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDPJt2X6gAcIsy_UTWwafIo_JtfEXwMH5E",
    authDomain: "netflix-adae4.firebaseapp.com",
    projectId: "netflix-adae4",
    storageBucket: "netflix-adae4.appspot.com",
    messagingSenderId: "542644492739",
    appId: "1:542644492739:web:01c394eb42232c7b578576",
    measurementId: "G-40XY3P4LJP"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore()
const auth = getAuth(firebaseApp)

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged }
export default db