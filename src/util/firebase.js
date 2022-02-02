import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAZgXkAnfWt9pjTCk-48q20hhhLCOXhPng",
  authDomain: "chewy-8ball.firebaseapp.com",
  projectId: "chewy-8ball",
  storageBucket: "chewy-8ball.appspot.com",
  messagingSenderId: "621054222180",
  appId: "1:621054222180:web:a8039d91325127a8a4a471",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const firebase = {
  app: app,
  db: db,
  storage: storage,
};

export default firebase;
