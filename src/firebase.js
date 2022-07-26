import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA1SlndP4KwvZM2XdwlkN1jjbnZ9Frfsa8",
    authDomain: "whatsapp-clone-aba46.firebaseapp.com",
    projectId: "whatsapp-clone-aba46",
    storageBucket: "whatsapp-clone-aba46.appspot.com",
    messagingSenderId: "104375490974",
    appId: "1:104375490974:web:94a03cefdc19161ec29e8f",
    measurementId: "G-W0DB4YTTMC"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider(firebaseApp);

  export { auth, provider};
  export default db;