// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7ERhWlSY2QdDNi9sMW0GPYytY8pa6yG8",
  authDomain: "alainparty-eb8bf.firebaseapp.com",
  databaseURL: "https://alainparty-eb8bf-default-rtdb.firebaseio.com",
  projectId: "alainparty-eb8bf",
  storageBucket: "alainparty-eb8bf.appspot.com",
  messagingSenderId: "142982414756",
  appId: "1:142982414756:web:97236a6ad8fcf210610131"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebase = getDatabase();