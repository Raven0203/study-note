import React, { useEffect, useState } from 'react'
import './singup.css'
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { getAuth, onAuthStateChanged, GoogleAuthProvider } from 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyA1A_ajOEo-A7Mpuhm000U4zK-sGAvlTQc",
    authDomain: "my-project-01-334308.firebaseapp.com",
    databaseURL: "https://my-project-01-334308-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "my-project-01-334308",
    storageBucket: "my-project-01-334308.appspot.com",
    messagingSenderId: "560653789068",
    appId: "1:560653789068:web:7d6a85da9cd208e3e318a9",
    measurementId: "G-JWFZ0BMCNH"
};

firebase.initializeApp(config);

const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',

    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/signedIn',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false,
    },
};


export default function Singup() {
    const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
    const [photourl, setPhotoURL] = useState("");
    const auth = firebase.auth();

    // Listen to the Firebase Auth state and set the local state.
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!!user);
            console.log(auth.currentUser.email);
            localStorage.setItem("email", auth.currentUser.email)
            localStorage.setItem("email", auth.currentUser.displayName)
            setPhotoURL(auth.currentUser.photoURL)

        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);

    if (!isSignedIn) {
        return (
            <div>
                <h1>My App</h1>
                <p>Please sign-in:</p>
                <StyledFirebaseAuth uiCallback={ui => ui.disableAutoSignIn()} uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        );
    }
    return (
        <div>
            <h1>My App</h1>
            <p>Welcome {auth.currentUser.displayName}! You are now signed-in!</p>
            <img src={photourl} alt='' />
            <button onClick={() => auth.signOut()}>Sign-out</button>
        </div>
    );
}

