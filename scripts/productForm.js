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

const form__add = document.querySelector('.form__add');
const main__alert = document.querySelector('.main__alert');
const alertbtn = document.querySelector('.alertbtn');
const main__error =document.querySelector('.main__error');
const error__text  = document.querySelector('.error__text');
const errorbtn = document.querySelector('.errorbtn');
const cakeField = document.querySelector('.cakeField');
const cupcakesField = document.querySelector('.cupcakesField');
const rollsField = document.querySelector('.rollsField');
const pieField = document.querySelector('.pieField');

form__add.type.addEventListener('change', function(){
    cakeField.classList.add('hidden');
    cupcakesField.classList.add('hidden');
    rollsField.classList.add('hidden');
    pieField.classList.add('hidden');
    switch (form__add.type.value) {
        case 'cake':
            cakeField.classList.remove('hidden');
        break;

        case 'cupcakes':
            cupcakesField.classList.remove('hidden');
        break;

        case 'rolls':
            rollsField.classList.remove('hidden');
        break;

        case 'pie':
            pieField.classList.remove('hidden');
        break;
    }
})

form__add.addEventListener('submit', function(event) {
    event.preventDefault();

    //Crear objeto

    const product = {
        type: form__add.type.value,
        name: form__add.name.value,
        price: parseFloat(form__add.price.value),
        //description: form__add.description.val(),
        flavor: [],
        sizes: []
    }
    if (form__add.naranja_1.checked) product.flavor.push('Naranaja con amapola');
    if (form__add.vainilla_1.checked) product.flavor.push('Vainilla');
    if (form__add.chocolate_1.checked) product.flavor.push('Chocolate');
    if (form__add.doublechocolate_1.checked) product.flavor.push('Double Chocolate');
    if (form__add.redvelvet_1.checked) product.flavor.push('Red Velvet');
    if (form__add.vino_1.checked) product.flavor.push('Vino');
    if (form__add.zanahoria_1.checked) product.flavor.push('Zanahoria');
    if (form__add.calabaza_1.checked) product.flavor.push('Calabaza');
    if (form__add.canela_1.checked) product.flavor.push('Canela');
    if (form__add.nutella_1.checked) product.flavor.push('Nutella');
    if (form__add.pie_1.checked) product.flavor.push('Limón');
    if (form__add.libra_1.checked) product.sizes.push('1 Lb');
    if (form__add.media_1.checked) product.sizes.push('1/ Lb');
    if (form__add.cuarto_1.checked) product.sizes.push('1/4 Lb');
    if (form__add.tres_1.checked) product.sizes.push('3 unidades');
    if (form__add.seis_1.checked) product.sizes.push('6 unidades');
    if (form__add.nueve_1.checked) product.sizes.push('9 unidades');
    if (form__add.diez_1.checked) product.sizes.push('10 unidades');
    if (form__add.uno_1.checked) product.sizes.push('Un pie');
    if (form__add.tresp_1.checked) product.sizes.push('3 mini Pies');


    console.log(product);

    if (!product.type || !product.name || !product.price) {
        
        error__text.innerHTML = `
        <p>Debes llenar los campos requeridos</p>
        `;

        main__error.classList.remove('hidden');
       
    }
    return;

    db.collection('products').add(product).then(function(docRef){
        main__alert.classList.remove('hidden');
    })
    .catch (function(error) {
        main__error.classList.add('hidden');
    });
    
});

alertbtn.addEventListener('click', () => {
    main__alert.classList.add('hidden');
   
});

errorbtn.addEventListener('click', () => {
    console.log('whta');
    main__error.classList.add('hidden');
    
})

