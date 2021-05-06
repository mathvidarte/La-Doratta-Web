const menubHamburguer = document.querySelector('.menub__hamburguer')
const navb = document.querySelector('.menub__links')
const list = document.querySelector('.mainS__list');
const filters = document.querySelector('.mainS__filter');

const handleCollectionResult = (querySnapshot) => {
        list.innerHTML='';
        querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log(doc.id);

        const product =document.createElement('a');
        let img = data.images[0]?.url
        if (!img) {
            img = './imgs/noImg.png';
        }
        product.innerHTML = `
        <div class="column__product">
            <p class="product__title"> ${data.name}</p>
            <p class="product__sub">${data.type}</p>
        </div>
        <div class="column__footer">
            <p class="product__price">${data.price}</p>
            <img src='imgs/starScore.png'>
            <button type="button"><img src="./imgs/car.png">Agregar</button>
        </div>
        `;
        product.classList.add('product');
        
        product.setAttribute('style', `background-image: url(${img})`);
        list.appendChild(product);
        });
}

filters.type.addEventListener('change', function() {
    console.log(filters.type.value);
    let productsCollection = db.collection('products');

    if (filters.type.value) {
        productsCollection = productsCollection.where('type', '==', filters.type.value);
    }
    productsCollection.get().then(handleCollectionResult);
});

db.collection('products')
.get()
.then(handleCollectionResult);

function handleMenu () {
    
}

menubHamburguer.addEventListener('click', handleMenu);