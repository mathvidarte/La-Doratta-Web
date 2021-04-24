const form__add = document.querySelector('.form__add');


form__add.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(form__add.name.value);
    //Crear objeto

    const product = {
        name: form__add.name.value,
        price: form__add.price.value,
        description: form__add.description.value,
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
    if (form__add.canela_1.checked) product.flavor.push('canela');
    if (form__add.nutella_1.checked) product.flavor.push('Nutella');
    if (form__add.libra_1.checked) product.sizes.push('1 Lb');
    if (form__add.media_1.checked) product.sizes.push('1/ Lb');
    if (form__add.cuarto_1.checked) product.sizes.push('1/4 Lb');
    if (form__add.tres_1.checked) product.sizes.push('3 unidades');
    if (form__add.seis_1.checked) product.sizes.push('6 unidades');
    if (form__add.nueve_1.checked) product.sizes.push('9 unidades');
    if (form__add.diez_1.checked) product.sizes.push('10 unidades');

    
})