// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBl-bjuGf46rVdWi5h_A3FFRNCkHdjDFMY",
    authDomain: "doctor-services-e20ee.firebaseapp.com",
    projectId: "doctor-services-e20ee",
    storageBucket: "doctor-services-e20ee.appspot.com",
    messagingSenderId: "79686231095",
    appId: "1:79686231095:web:45f79de2a6b6c06c5acbb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;