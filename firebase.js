import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';


var firebaseConfig = {
    apiKey: 'AIzaSyAupV49Mt24faf7jzkpV3ADhhajbLPwnac',
    authDomain: 'test-sveltekit-app.firebaseapp.com',
    projectId: 'test-sveltekit-app',
    storageBucket: 'test-sveltekit-app.appspot.com',
    messagingSenderId: '1088283466021',
    appId: '1:1088283466021:web:e9bd4e66b40e68f55262cc'
};

var firebaseApp = initializeApp(firebaseConfig);
export var db = getFirestore();

		// console.log(firebaseApp);
		// console.log(db);


