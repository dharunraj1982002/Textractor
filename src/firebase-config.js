// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCflt8UbzgEKQ74fbdnMITNDgt2mXlNkOc",
  authDomain: "textractor-dc0aa.firebaseapp.com",
  databaseURL: "https://textractor-dc0aa-default-rtdb.firebaseio.com",
  projectId: "textractor-dc0aa",
  storageBucket: "textractor-dc0aa.appspot.com",
  messagingSenderId: "657538356205",
  appId: "1:657538356205:web:c3142167509a8139fe0de4",
  measurementId: "G-Z29JE307EB"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
