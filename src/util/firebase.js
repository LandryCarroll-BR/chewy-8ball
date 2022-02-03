import { initializeApp } from "firebase/app";

const firebase = {
  apiKey: "AIzaSyAZgXkAnfWt9pjTCk-48q20hhhLCOXhPng",
  authDomain: "chewy-8ball.firebaseapp.com",
  projectId: "chewy-8ball",
  storageBucket: "chewy-8ball.appspot.com",
  messagingSenderId: "621054222180",
  appId: "1:621054222180:web:a8039d91325127a8a4a471",
};

export const app = initializeApp(firebase);

export default firebase;
