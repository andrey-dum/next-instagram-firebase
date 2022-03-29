import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCPzYNxPhe_uhpjEp04np0nARARePPDNf0",
  authDomain: "instagram-next-87b69.firebaseapp.com",
  projectId: "instagram-next-87b69",
  storageBucket: "instagram-next-87b69.appspot.com",
  messagingSenderId: "19960875768",
  appId: "1:19960875768:web:d9f434342a0d838d36890d"
};

const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
// const app = initializeApp(firebaseConfig);
const db = getFirestore()
const storage = getStorage()

export {
    app,
    db,
    storage
}