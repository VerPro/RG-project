import { initializeApp } from "firebase/app";
import{
  getFirestore, collection, getDocs,
  onSnapshot,addDoc, deleteDoc, doc,
  query, where, collectionGroup,
  limit

} from 'firebase/firestore';

import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDB3fNy4oVq_iX7k1xQ_0P-qvI_KV96PPA',
  authDomain: 'cajovy-denik.firebaseapp.com',
  projectId: 'cajovy-denik',
  storageBucket: 'cajovy-denik.appspot.com',
  messagingSenderId: '204364589194',
  appId: '1:204364589194:web:734a448e130db87bcda573',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db =getFirestore()
export const auth = getAuth();

const collectionRef = collection(db, 'users')

//queries
const q = query(collectionRef, where('id', '==', 'QoHR14C7tUhQ0ZWORxZoWUU4mGn1'))



getDocs(collectionRef)
  .then(snapshot => {
    console.log(snapshot.docs)

  })

  const idRef = collection(db, "QoHR14C7tUhQ0ZWORxZoWUU4mGn1")

  getDocs(idRef).then(snapshot => {console.log(snapshot.docs)})

const teasRef = collection(db, 'teas')

getDocs(teasRef).then(snapshot => {console.log(snapshot.docs)})

const teas = query(collectionGroup(db, 'teas'), where("type", "==", "oolong"))

//const querySnapshot = await getDocs(teas)

//console.log(querySnapshot)



// Auth
export const googleAuthProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, googleAuthProvider);
    } catch (err) {
        console.log(err.message);
    }
};

export const logOut = async () => {
    try {
        signOut(auth);
        console.log('User signed out.');
    } catch (err) {
        console.log(err.message);
    }
};

onAuthStateChanged(auth, (user) => {
  console.log('user status changed:', user)
})

export const getTeas = async (userId) => {
  try {

const usersRef = collection(db, 'users');
  const userQ = query(usersRef, userId, limit(1));
  const snapshot = await getDocs(userQ);
  const userDoc = snapshot.docs[0];


      if (userDoc) {
          const teasRef = collection(userDoc.ref, 'teas');
           const teasQ = query(
          teasRef
      );

      const snapshot = await getDocs(teasQ);
      let teas = [];
      snapshot.docs.forEach(doc => {
          const data = doc.data();
          posts.push({ ...data });

      });
      console.log(teas)



      } else {
          throw new Error('Non existing user');
      }
  } catch (err) {
      console.log(err.message);
  }
};