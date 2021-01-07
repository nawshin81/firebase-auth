import firebase from 'firebase/app';
import 'firebase/auth'

const app =firebase.initializeApp({
    apiKey: "AIzaSyDvWYo7BnAQob0Cr8xe51-XE1q15Di_CwQ",
    authDomain: "fir-auth-development-dd90c.firebaseapp.com",
    projectId: "fir-auth-development-dd90c",
    storageBucket: "fir-auth-development-dd90c.appspot.com",
    messagingSenderId: "486721296987",
    appId: "1:486721296987:web:b0621e22076f9cbc7bfd7e"
})

const auth=app.auth();
export {auth};
export default app;