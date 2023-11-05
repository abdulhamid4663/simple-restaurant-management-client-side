import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDFuJJWA_Ve_Cn0MGgXi7Kwvpx2WYRLNIA",
  authDomain: "amal-auth-b8696.firebaseapp.com",
  projectId: "amal-auth-b8696",
  storageBucket: "amal-auth-b8696.appspot.com",
  messagingSenderId: "83565345165",
  appId: "1:83565345165:web:b30d41f7216e904c6fa5c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;