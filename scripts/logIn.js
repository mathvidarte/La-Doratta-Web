const login__inputs = document.querySelector('.login__inputs');
const btnLogIn = document.querySelector('.btnLogIn');
const main__error = document.querySelector('.main__error')

login__inputs.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = login__inputs.email.value;
    const password = login__inputs.password.value;

    firebase.auth().signInWithEmailAndPassword(email, password)
  /*.then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user);
    
  })*/
  .catch((error) => {
   
        main__error.innerHTML='<p class="error__msn">El usuario o contraseña es incorrecto</p>';
    

  });

});