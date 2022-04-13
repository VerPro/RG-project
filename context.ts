import { createContext } from 'react';
import firebase from 'firebase/app';

const initialUserContext = {
    user: null,
};

export const UserContext = createContext<{ user: firebase.User | null }>(initialUserContext); 