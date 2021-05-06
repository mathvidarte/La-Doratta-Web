const form__add = document.querySelector('.form__add');
const main__alert = document.querySelector('.main__alert');
const alertbtn = document.querySelector('.alertbtn');
const alert__text = document.querySelector('.alert__text');
const main__error =document.querySelector('.main__error');
const error__text  = document.querySelector('.error__text');
const errorbtn = document.querySelector('.errorbtn');
const cakeField = document.querySelector('.cakeField');
const cupcakesField = document.querySelector('.cupcakesField');
const rollsField = document.querySelector('.rollsField');
const pieField = document.querySelector('.pieField');
const form_checkbox = document.querySelector('.form_checkbox');
const form__images = document.querySelector('.form__images');

const imagesFile = [];


form__add.type.addEventListener('change', function(){
    cakeField.classList.add('hidden');
    cupcakesField.classList.add('hidden');
    rollsField.classList.add('hidden');
    pieField.classList.add('hidden');
    switch (form__add.type.value) {
        case 'Tortas':
            cakeField.classList.remove('hidden');
        break;

        case 'Cupcakes':
            cupcakesField.classList.remove('hidden');
        break;

        case 'Rolls':
            rollsField.classList.remove('hidden');
        break;

        case 'Pies':
            pieField.classList.remove('hidden');
        break;
    }
})

form__add.image.addEventListener('change', function() {
    const file = form__add.image.files[0]
    if (!file) return;
    const reader = new FileReader();
    reader.onload =function (event) {
        const formImg = document.createElement('img');
        formImg.classList.add('loadedImg');
        formImg.setAttribute('src', event.target.result);
        form__images.appendChild(formImg);
    }

    reader.readAsDataURL(file);
    imagesFile.push(file);

});

form__add.addEventListener('submit', function(event) {
    event.preventDefault();

    //create object
    const product = {
        name: form__add.name.value,
        price: parseFloat(form__add.price.value),
        type: form__add.type.value,
        description: form__add.description.value,
        flavor: [],
        sizes: [],
    };

    //Alert product loading 
    if (product.type && product.name && product.price) {

        alert__text.innerHTML = `
            <p>Cargando</p>
            `;
    
            main__alert.classList.remove('hidden');
    }

    switch (product.type) {
        case 'Tortas':
            product.flavor = [];
            product.sizes = [];
            if (form__add.naranja_1.checked) product.flavor.push('Naranaja con amapola');
            if (form__add.vainilla_1.checked) product.flavor.push('Vainilla');
            if (form__add.chocolate_1.checked) product.flavor.push('Chocolate');
            if (form__add.doublechocolate_1.checked) product.flavor.push('Double Chocolate');
            if (form__add.redvelvet_1.checked) product.flavor.push('Red Velvet');
            if (form__add.vino_1.checked) product.flavor.push('Vino');
            if (form__add.zanahoria_1.checked) product.flavor.push('Zanahoria');
            if (form__add.calabaza_1.checked) product.flavor.push('Calabaza');
            if (form__add.libra_1.checked) product.sizes.push('1 Lb');
            if (form__add.media_1.checked) product.sizes.push('1/ Lb');
            if (form__add.cuarto_1.checked) product.sizes.push('1/4 Lb');
            break;
        case 'Cupcakes':
            product.flavor = [];
            product.sizes = [];
            if (form__add.naranjac_1.checked) product.flavor.push('Naranaja con amapola');
            if (form__add.vainillac_1.checked) product.flavor.push('Vainilla');
            if (form__add.chocolatec_1.checked) product.flavor.push('Chocolate');
            if (form__add.redvelvetc_1.checked) product.flavor.push('Red Velvet');
            if (form__add.zanahoriac_1.checked) product.flavor.push('Zanahoria');
            if (form__add.calabazac_1.checked) product.flavor.push('Calabaza');
            if (form__add.tresc_1.checked) product.sizes.push('3 Cupcakes');
            if (form__add.seisc_1.checked) product.sizes.push('6 Cupcakes');
            if (form__add.nuevec_1.checked) product.sizes.push('9 Cupcakes');
            if (form__add.diezc_1.checked) product.sizes.push('10 mini Cupcakes');
            break;
        case 'Rolls':
            product.flavor = [];
            product.sizes = [];
            if (form__add.canela_1.checked) product.flavor.push('Canela');
            if (form__add.nutella_1.checked) product.flavor.push('Nutella');
            if (form__add.tresr_1.checked) product.sizes.push('3 Rolls');
            if (form__add.seisr_1.checked) product.sizes.push('6 Rolls');
            if (form__add.nuever_1.checked) product.sizes.push('9 Rolls');
            break;
        case 'Pies':
            product.flavor = [];
            product.sizes = [];
            if (form__add.pie_1.checked) product.flavor.push('Limón');
            if (form__add.unop_1.checked) product.sizes.push('Un pie');
            if (form__add.tresp_1.checked) product.sizes.push('3 mini Pies');
            break;
    }
   


    console.log(product);

    //if there's any input empty 
    if (!product.type || !product.name || !product.price) {
        
        error__text.innerHTML = `
        <p>Debes llenar los campos requeridos</p>
        `;

        main__error.classList.remove('hidden');
        return;
    }

    const genericCatch = function (error) {
        main__error.classList.add('hidden');
        main__error.innerHTML='Ocurrió un error al cargar el producto'
    }

    //upload the porduct and imgs
    db.collection('products').add(product).then(function(docRef){
        console.log('document added', docRef.id);

        const uploadPromises = [];
        const downloadURLPromises = [];

        //images upload to firestore
        imagesFile.forEach(function(file) {
            const storageRef = firebase.storage().ref();
            //storage root
            const fileRef = storageRef.child(`products/${docRef.id}/${file.name}`);

            uploadPromises.push(fileRef.put(file));
        });

        //Get the downloadURL's images
        Promise.all(uploadPromises).then(function(snapshots) {
            snapshots.forEach(function(snapshot) {
                downloadURLPromises.push(snapshot.ref.getDownloadURL());
            });
            //Upload all downloadURL
            Promise.all (downloadURLPromises).then(function (downloadURLs) {

                //Create the array with all the images
                const images = [];
                downloadURLs.forEach(function(url, index) {
                    images.push({
                        url: url,
                        ref: snapshots[index].ref.fullPath
                    });
                });
                console.log(downloadURLs);

                //update firestore with images
                db.collection('products').doc(docRef.id).update({
                    images: images
                })
                .then (function() {

                    //alert product added
                    alert__text.innerHTML = `
                        <p>Se agregó el producto</p>
                        `;

                    main__alert.classList.remove('hidden');
                })
                .catch(genericCatch);
            });
        })
        .catch(genericCatch);
    })
    .catch (genericCatch);
});


//Listener de alert and error
alertbtn.addEventListener('click', () => {
    main__alert.classList.add('hidden');
    location.reload();
   
});

errorbtn.addEventListener('click', () => {
    console.log('whta');
    main__error.classList.add('hidden');
    
})

