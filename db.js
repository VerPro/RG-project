import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  collectionGroup,
  limit,
} from 'firebase/firestore';
import firebase, { getApps, getApp, initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: 'cajovy-denik',
  storageBucket: 'cajovy-denik.appspot.com',
  messagingSenderId: '204364589194',
  appId: '1:204364589194:web:734a448e130db87bcda573',
};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);

const collectionRef = collection(db, 'users');

//queries
// const q = query(
//   collectionRef,
//   where('id', '==', 'QoHR14C7tUhQ0ZWORxZoWUU4mGn1'),
// );

// getDocs(collectionRef).then((snapshot) => {
//   console.log(snapshot.docs);
// });

// const idRef = collection(db, 'QoHR14C7tUhQ0ZWORxZoWUU4mGn1');

// getDocs(idRef).then((snapshot) => {
//   console.log(snapshot.docs);
// });

// const teasRef = collection(db, 'teas');

// getDocs(teasRef).then((snapshot) => {
//   console.log(snapshot.docs);
// });

// const teas = query(collectionGroup(db, 'teas'), where('type', '==', 'oolong'));

//export const auth = firebase.auth();

//export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const getTeas = async (userEmail) => {
  try {
    const usersRef = collection(db, 'users');

    const userQ = query(usersRef, where('email', '==', userEmail), limit(1));

    const snapshot = await getDocs(userQ);
    console.log('snapshots', snapshot);

    const userDoc = snapshot.docs[0];

    if (userDoc) {
      const teasRef = collection(userDoc.ref, 'teas');
      const teasQ = query(teasRef);

      const snapshot = await getDocs(teasQ);

      return snapshot.docs.map((doc) => {
        return doc.data();
      });
    } else {
      throw new Error('Non existing user');
    }
  } catch (err) {
    console.log(err.message);
  }
};
