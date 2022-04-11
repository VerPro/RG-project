import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: 'AIzaSyDB3fNy4oVq_iX7k1xQ_0P-qvI_KV96PPA',
  authDomain: 'cajovy-denik.firebaseapp.com',
  projectId: 'cajovy-denik',
  storageBucket: 'cajovy-denik.appspot.com',
  messagingSenderId: '204364589194',
  appId: '1:204364589194:web:734a448e130db87bcda573',
};

// Initialize Firebase

export const db = initializeApp(firebaseConfig);

/*if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}*/



export const auth = firebase.auth();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
