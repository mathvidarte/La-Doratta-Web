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

let path = window.location.href;
let thefile = path.split('/');

const menua__cart = document.querySelector('.menua__cart');

let loggedUser = null;

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
  
    db.collection('users').doc(user.uid).get().then(function(doc) {

      console.log(doc.data());
      loggedUser = doc.data();
      loggedUser.uid = user.uid

      if (thefile[thefile.length-1] == 'store.html' || thefile[thefile.length-1] == 'card.html'){
        userAuthChanged(true);
      } 

      if (thefile[thefile.length-1] == 'logIn.html') {
        window.location='store.html';
      }

      


    })
  } else {
    loggedUser = null;
    if (thefile[thefile.length-1] == 'store.html' || thefile[thefile.length-1] == 'card.html') {
      userAuthChanged(false);
    }
  }
});



