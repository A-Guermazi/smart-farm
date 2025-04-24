import { Firestore, getFirestore } from "firebase-admin/firestore"
import { getApps } from "firebase-admin/app"
import admin, { initializeApp } from "firebase-admin";
const serviceAccount = {
    "type": "service_account",
    "project_id": "smart-farm-51727",
    "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
    "private_key": process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    "client_email": process.env.FIREBASE_CLIENT_EMAIL,
    "client_id": process.env.FIREBASE_CLIENT_ID,
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40smart-farm-51727.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
}

const currentApps = getApps()
let firestore;
// Initialize Firebase
if (!currentApps.length) {
    const app = initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
    firestore = getFirestore(app)
}
else {
    const app = currentApps[0]
    firestore = getFirestore(app)
}
export { firestore }

// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
// });
