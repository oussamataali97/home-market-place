// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5pqmwq7XYapDIfG44ct0n6fjZPUso1bo",
  authDomain: "house-market-place-e62e2.firebaseapp.com",
  projectId: "house-market-place-e62e2",
  storageBucket: "house-market-place-e62e2.appspot.com",
  messagingSenderId: "705571039568",
  appId: "1:705571039568:web:2d05550307d725313d6455"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore()