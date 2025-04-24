// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { EXPORT_MARKER } from "next/dist/shared/lib/constants";


import { getAuth } from "firebase/auth"
// import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAg4yUVbQY9fHUJ-_6geX1fn6h6FoHQYC4",
    authDomain: "smart-farm-51727.firebaseapp.com",
    projectId: "smart-farm-51727",
    storageBucket: "smart-farm-51727.firebasestorage.app",
    messagingSenderId: "641108064071",
    appId: "1:641108064071:web:7cac951afac205b635fe62",
    measurementId: "G-KCJEPJQ917"
};

const currentApps = getApps()
let auth;
let storage;
// Initialize Firebase
if (!currentApps.length) {
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app)
    // storage = getStorage(app)
    // const analytics = getAnalytics(app);
}
else {
    const app = currentApps[0]
    auth = getAuth(app)
    // storage = getStorage(app)
    // const analytics = getAnalytics(app);

}
// export { auth, storage }
export { auth }