const firebaseConfig = {
    apiKey: "AIzaSyD9GxahojEyG3Y6P8Y0u7sYfwChx4ip4kE",
    authDomain: "la-doratta.firebaseapp.com",
    projectId: "la-doratta",
    storageBucket: "la-doratta.appspot.com",
    messagingSenderId: "1042292077423",
    appId: "1:1042292077423:web:c826dfbc29c00b7a746e9a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
const storage = firebase.storage();