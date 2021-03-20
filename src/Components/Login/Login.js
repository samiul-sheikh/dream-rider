import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../Firebase/firebase.config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const [user, setUser] = useState({});

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    var facebookProvider = new firebase.auth.FacebookAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                console.log(token, user)
                setUser(user);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);
            });
    }

    const handleFacebookSignIn = () => {
        firebase
            .auth()
            .signInWithPopup(facebookProvider)
            .then((result) => {
                var credential = result.credential;
                var user = result.user;
                var accessToken = credential.accessToken;
                console.log(user, accessToken);
                setUser(user);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);
            });
    }

    return (
        <div>
            <h1>This is Login Page</h1>
            <button onClick={handleGoogleSignIn}>Sign in using Google</button>
            <br />
            <button onClick={handleFacebookSignIn}>Sign in using Facebook</button>
            <h3>{user.displayName}</h3>
        </div>
    );
};

export default Login;