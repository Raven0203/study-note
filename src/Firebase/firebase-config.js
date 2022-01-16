// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyA1A_ajOEo-A7Mpuhm000U4zK-sGAvlTQc",
    authDomain: "my-project-01-334308.firebaseapp.com",
    projectId: "my-project-01-334308",
    storageBucket: "my-project-01-334308.appspot.com",
    messagingSenderId: "560653789068",
    appId: "1:560653789068:web:7d6a85da9cd208e3e318a9",
    measurementId: "G-JWFZ0BMCNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWidthGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // Get Token
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;



            const name = result.user.displayName;
            const email = result.user.email;
            const profilePic = result.user.photoURL;

            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("profilePic", profilePic);


        }).catch(error => console.log(error))

}

export const logOut = async () => {
    await signOut(getAuth(app)).then(() => {
        localStorage.removeItem("name")
        localStorage.removeItem("email")
        localStorage.removeItem("profilePic")
    })
        .catch(() => {
            console.log("失敗");
        })
}
