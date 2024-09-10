import { initializeApp } from "firebase/app";
import {
  collection,
  deleteDoc,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { ActivityInfo } from "./types/types";

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

const availableCollections = ["activities-dev", "activities-prod"];

export const collectionKey = availableCollections[0];

// References
export const activitiesRef = collection(db, collectionKey);

export const removeActivity = async (id: string) => {
  const activityDoc = doc(db, collectionKey, id);
  await deleteDoc(activityDoc);
};

export const updateActivity = async (
  id: string,
  updatedFields: Partial<ActivityInfo>
) => {
  const activityDoc = doc(db, collectionKey, id);

  await updateDoc(activityDoc, updatedFields);
};
