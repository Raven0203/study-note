import React, { useEffect, useState } from 'react';


import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import '../../Firebase/firebase-config'
import { firebaseConfig } from '../../Firebase/firebase-config';
// import { signInWidthGoogle } from '../Firebase/firebase-config';
// import { firebaseConfig, auth } from '../Firebase/firebase-config';
import { StyledFirebaseAuth } from 'react-firebaseui/StyledFirebaseAuth';





firebase.initializeApp(firebaseConfig);

const Test = () => {

    const uiConfig = {
        sigInFlow: 'popup',
        signInSuccessUrl: "/",
        // signInSuccessUrl: '/signedIn',
        signInOptions: [

            firebase.auth.GoogleAuthProvider.PROVIDER_ID,

        ],

    }

    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        const unregistered =
            firebase.auth().onAuthStateChanged(user => {
                setIsSignedIn(!!user);
            })
        return () => unregistered();
    }, [])


    return (
        <div>
            {/* <button onClick={signInWidthGoogle} type="button" className="login-with-google-btn" >
                Sign in with Google
            </button>
            <h1>{localStorage.getItem("name")}</h1>
            <h1>{localStorage.getItem("email")}</h1>
            <img src={localStorage.getItem("profilePic")} alt="" /> */}

            <h1>My App</h1>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />

        </div >


    );
}

export default Test;
