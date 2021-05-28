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
console.log(loggedUser);

const setLoggedUser = (info, id) => {
  loggedUser = info;
  loggedUser.uid = id;
  userAuthChanged(true);
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    db.collection('users').doc(user.uid).get().then(function(doc) {
      if(!doc.data()) return;
      setLoggedUser(doc.data(), user.uid);

      if (thefile[thefile.length-1] == 'logIn.html') {
          window.location='store.html';
        
      }
    });
    getMyCard(user.uid);
  } else {
    loggedUser = null;
    cart = [];
    userAuthChanged(false);
  }
});

let cart = [];
const cartNumber = document.querySelector('.menua__cart span');
const cart_collection =db.collection('cart');
const orders__collection = db.collection('orders');

const addToMyCart = (product) => {
  cart.push(product);
    cart_collection.doc(loggedUser.uid).set({
      cart,
    });
    cartNumber.innerText = cart.length;
}

let renderCart = null;

const getMyCard = (uid) => {
  cart_collection.doc(uid).get().then(snapShot => {
    const data = snapShot.data();
    if (!data) return;
    if (cartNumber) cartNumber.innerText = data.cart.length;
    cart = data.cart;

    if (renderCart) renderCart();
  });

}


/*const cartFromLS = localStorage.getItem('store__cart');
if(cartFromLS) {
    cart = JSON.parse(cartFromLS);
    if (cartNumber) {
      cartNumber.innerText=cart.length;
    }
}*/