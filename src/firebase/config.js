import { initializeApp } from "firebase/app";
import {
  getStorage,
  getDownloadURL,
  ref,
  uploadBytesResumable,
  
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB2wollOFBtiFA2OvcMYoFVyhL95G5I2bk",
  authDomain: "facebook-4a76a.firebaseapp.com",
  projectId: "facebook-4a76a",
  storageBucket: "facebook-4a76a.appspot.com",
  messagingSenderId: "909723182256",
  appId: "1:909723182256:web:4c689450de9742a6f40775",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage();

export { app, storage, getDownloadURL, ref,  uploadBytesResumable };
