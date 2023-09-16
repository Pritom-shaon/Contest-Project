import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCMs_mN5KoCi9kntzRYiO7R-diC_w6NUP4",
  authDomain: "contest-ea7fc.firebaseapp.com",
  projectId: "contest-ea7fc",
  storageBucket: "contest-ea7fc.appspot.com",
  messagingSenderId: "550182401065",
  appId: "1:550182401065:web:5345d3ecd3a89168ea9838"
};

const app = initializeApp(firebaseConfig);
export default app