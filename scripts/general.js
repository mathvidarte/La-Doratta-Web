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

let loggedUser = null;

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('onAuthStateChanged', user)

    db.collection('users').doc(user.uid).get().then(function(doc) {
      loggedUser = doc.data();
      //loggedUser.uid = user.uid
      
      userLoggedIn();

    })
  } else {
    //userLoggedOut();
    let loggedUser = null;
  }
});

