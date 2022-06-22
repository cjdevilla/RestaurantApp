import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCKuIxK0Ur9frfjRLiq5qZedFCOKangqew",
  authDomain: "restaurantapp-a1416.firebaseapp.com",
  databaseURL: "https://restaurantapp-a1416-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-a1416",
  storageBucket: "restaurantapp-a1416.appspot.com",
  messagingSenderId: "282602005793",
  appId: "1:282602005793:web:98d82870e9b619310e8a60",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
