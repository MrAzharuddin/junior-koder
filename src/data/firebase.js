import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: FIREBASE_APIKEY,
  authDomain: FIREBASE_AUTHDOMAIN,
  databaseURL: FIREBASE_DATABASEURL,
  projectId: FIREBASE_PROJECTID,
  storageBucket: FIREBASE_STORAGEBUCKET,
  messagingSenderId: FIREBASE_MESSEGINGSENDERID,
  appId: FIREBASE_APPID,
  measurementId: FIREBASE_MESUREMENTID,
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
