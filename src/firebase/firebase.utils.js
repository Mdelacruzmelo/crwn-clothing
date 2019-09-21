import firebase from 'firebase/app';
import 'firebase/firestore'; // For Database
import 'firebase/auth';

var firebaseConfig = {
	apiKey: "AIzaSyDUO2_TZF4yURZKSyuWyBBG4pwHUdOqumI",
	authDomain: "crwn-db-b2092.firebaseapp.com",
	databaseURL: "https://crwn-db-b2092.firebaseio.com",
	projectId: "crwn-db-b2092",
	storageBucket: "",
	messagingSenderId: "452236487010",
	appId: "1:452236487010:web:ff2b0aedb23e019185a43b"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;