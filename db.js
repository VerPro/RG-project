import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
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

//references - zlobí to, proto zakomentováno, necháno lokálně v každé té funkci
//const usersRef = collection(db, 'users');
//const teasRef = collection(userDoc.ref, 'teas');

//queries
//const userQ = query(usersRef, where('email', '==', userEmail), limit(1));
//const teasQ = query(teasRef);

//getting teas from DB
export const getTeas = async (userEmail) => {
  try {
    const usersRef = collection(db, 'users'); // TODO smazat, opakuje se

    const userQ = query(usersRef, where('email', '==', userEmail), limit(1)); // TODO smazat, opakuje se

    const snapshot = await getDocs(userQ);
    //console.log('snapshots', snapshot);

    const userDoc = snapshot.docs[0];

    if (userDoc) {
      const teasRef = collection(userDoc.ref, 'teas');
      console.log('teasRef', teasRef);
      const teasQ = query(teasRef);
      console.log('teasQ', teasQ);

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

//getting one specific tea from DB
export const getTeaDetail = async (userEmail, teaId) => {
  try {
    const usersRef = collection(db, 'users'); // TODO smazat, opakuje se

    const userQ = query(usersRef, where('email', '==', userEmail), limit(1)); // TODO smazat, opakuje se

    const snapshot = await getDocs(userQ);
    console.log('snapshotsUser', snapshot);

    const userDoc = snapshot.docs[0];

    console.log('userDoc', userDoc);

    if (userDoc) {
      const teaDetailRef = doc(userDoc.ref, 'teas', teaId);
      console.log('teaDetailRef', teaDetailRef);

      const snapshot = await getDoc(teaDetailRef);
      console.log('snapshotsDetail', snapshot);
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

//adding teas to DB

{
  /* 
export const addTea = async (userEmail) => {
  const addTeaFormElement = document.getElementById('addTeaForm');

  //tohle se opakuje, nějak to vymyslet, aby to šlo vyhodit
  try {
    const usersRef = collection(db, 'users'); // TODO smazat, napsáno globálně do references

    const userQ = query(usersRef, where('email', '==', userEmail), limit(1)); // TODO smazat, napsáno globálně do queries

    const snapshot = await getDocs(userQ);
    //console.log('snapshots', snapshot);

    const userDoc = snapshot.docs[0];

    if (userDoc) {
      const teasRef = collection(userDoc.ref, 'teas'); // TODO smazat, napsáno globálně do references

      //reálné přidávání dokumentu, struktura dat - nefunguje, asi bude něco blbě s tím formulářem, hlásí to null
      addDoc(teasRef, {
        buyDate: addTeaFormElement.buyDate.value,
        country: addTeaFormElement.country.value,
        distributor: addTeaFormElement.distributor.value,
        name: addTeaFormElement.name.value,
        //tasteProfile: [tea.tasteProfile.value],
        type: addTeaFormElement.type.value,
      });
    } else {
      throw new Error('Non existing user');
    }
  } catch (err) {
    console.log(err.message);
  }
};*/
}

//getting entries from DB
export const getEntries = async (userEmail) => {
  try {
    const usersRef = collection(db, 'users'); // TODO smazat, opakuje se

    const userQ = query(usersRef, where('email', '==', userEmail), limit(1)); // TODO smazat, opakuje se

    const snapshot = await getDocs(userQ);
    //console.log('snapshots', snapshot);

    const userDoc = snapshot.docs[0];

    if (userDoc) {
      const entriesRef = collection(userDoc.ref, 'entries');
      const entriesQ = query(entriesRef);

      const snapshot = await getDocs(entriesQ);

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

//getting TastePallete (AppData) from DB - nefunguje, asi blbě napsaná query
export const getTastePallete = async () => {
  try {
    const appDataRef = collection(db, 'appData');

    const tastePalleteQ = query(appDataRef, where('id', '==', 'tastePallete'));

    console.log('tastePalleteQ', tastePalleteQ);

    const snapshot = await getDoc(tastePalleteQ);
    console.log('snapshots', snapshot);

    const tastePalleteDoc = snapshot.docs[0];

    console.log('tastePalleteDoc', tastePalleteDoc);

    // if (userDoc) {
    //   const entriesRef = collection(userDoc.ref, 'entries');
    //   const entriesQ = query(entriesRef);

    //   const snapshot = await getDocs(entriesQ);

    //   return snapshot.docs.map((doc) => {
    //     return doc.data();
    //   });
    // } else {
    //   throw new Error('Non existing user');
    // }
  } catch (err) {
    console.log(err.message);
  }
};
