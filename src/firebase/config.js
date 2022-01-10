import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCmbGRzlne-I67ADeSA-43pctKp2EuRnKY',
  authDomain: 'projects-app-22789.firebaseapp.com',
  projectId: 'projects-app-22789',
  storageBucket: 'projects-app-22789.appspot.com',
  messagingSenderId: '756172383631',
  appId: '1:756172383631:web:5528cda13cdb0eab35d7fa',
};

// init firebase
const app = firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = app.firestore();
const projectAuth = app.auth();
const projectStorage = app.storage();

// timestamp
const timestamp = app.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
