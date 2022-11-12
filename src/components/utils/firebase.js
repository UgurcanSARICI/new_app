import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAX9EbFGIYuCFd_954Da6zTh4Gz7roNH78",
  authDomain: "project-new-f34b5.firebaseapp.com",
  projectId: "project-new-f34b5",
  storageBucket: "project-new-f34b5.appspot.com",
  messagingSenderId: "884530625219",
  appId: "1:884530625219:web:46f1651a91168471a8c076",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
