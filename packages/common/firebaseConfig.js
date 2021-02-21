import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCBSoud_KNN-fFh1TpQSgT0JpYtnZ-56NM",
  authDomain: "instagram-clone-6d0c0.firebaseapp.com",
  projectId: "instagram-clone-6d0c0",
  storageBucket: "instagram-clone-6d0c0.appspot.com",
  messagingSenderId: "406473837873",
  appId: "1:406473837873:web:4f3fd34d60e2460f873410",
  measurementId: "G-GXCJS8V4X1",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
