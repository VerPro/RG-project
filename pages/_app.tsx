import { UserContext } from '../context';
import { auth } from '../db';
import '../styles/globals.css';

import { useAuthState } from 'react-firebase-hooks/auth';



function MyApp({ Component, pageProps }) {
  const [user] = useAuthState(auth);
  console.log(`user: ${user?.uid}`);

  return <UserContext.Provider value={{ user }}>

    <Component {...pageProps} />

  </UserContext.Provider>
}

export default MyApp;
