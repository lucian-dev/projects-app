import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCmbGRzlne-I67ADeSA-43pctKp2EuRnKY",
  authDomain: "projects-app-22789.firebaseapp.com",
  projectId: "projects-app-22789",
  storageBucket: "projects-app-22789.appspot.com",
  messagingSenderId: "756172383631",
  appId: "1:756172383631:web:5528cda13cdb0eab35d7fa",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
