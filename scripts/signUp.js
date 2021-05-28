const signUp__inputs = document.querySelector('.signUp__inputs');
const btnSignUp = document.querySelector('btnSignUp');
const main__error = document.querySelector('.main__error')


signUp__inputs.addEventListener('submit', function (event){
 
    event.preventDefault();

    const name = signUp__inputs.name.value;
    const email = signUp__inputs.email.value;
    const password = signUp__inputs.password.value;

    console.log(name);
    console.log(email);
    console.log(password);

    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    
    var user = userCredential.user;
    console.log(user);

    const userDoc = {
      name,
      email,
    };

    db.collection('users').doc(user.uid).set(userDoc)
    .then (function(e) {
      window.location='store.html';
    }).catch ((error) => {
      console.log(error);
    });
    setLoggedUser(userDoc, user.uid);

    
  })
  .catch((error) => {
    main__error.innerHTML='<p class="error__msn">El usuario ya existe</p>';
  });

})