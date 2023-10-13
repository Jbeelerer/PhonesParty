import React from 'react'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, serverTimestamp, set } from "firebase/database";

export default FirebaseIntegration = () => {

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyB7ERhWlSY2QdDNi9sMW0GPYytY8pa6yG8",
  authDomain: "alainparty-eb8bf.firebaseapp.com",
  projectId: "alainparty-eb8bf",
  storageBucket: "alainparty-eb8bf.appspot.com",
  messagingSenderId: "142982414756",
  appId: "1:142982414756:web:e95ae05e79d204e6610131"
};
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  
  const database = getDatabase();
  
}
