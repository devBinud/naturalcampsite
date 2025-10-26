// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDxl0-CDOHDhi7XYtcJLsbSzkL3V_AazSk",
  authDomain: "mrittikanaturals-c3571.firebaseapp.com",
  databaseURL: "https://mrittikanaturals-c3571-default-rtdb.firebaseio.com",
  projectId: "mrittikanaturals-c3571",
  storageBucket: "mrittikanaturals-c3571.appspot.com",
  messagingSenderId: "248938451173",
  appId: "1:248938451173:web:27d27858d004a6262e440c"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const rtdb = getDatabase(app);

export { app, db, storage, rtdb };
