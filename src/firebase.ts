import { initializeApp } from "firebase/app";
import { collection, deleteDoc, doc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_MESSAGING_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASURAMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const availableCollections = ["activities", "activities-dev"];

export const collectionKey = availableCollections[1]

// References
export const activitiesRef = collection(db, collectionKey);

export const removeActivity = async (id: string) => {
  const activityDoc = doc(db, collectionKey, id);
  await deleteDoc(activityDoc);
};
