const menubHamburguer = document.querySelector('.menub__hamburguer')
const navb = document.querySelector('.menub__links')
const list = document.querySelector('.mainS__list');
const filters = document.querySelector('.mainS__filter');
const filterPopUp = document.querySelector('.filterPopUp');
const filterBtn = document.querySelector('.filterBtn');


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
            <p class="product__price">$${data.price}</p>
            <img src='imgs/starScore.png'>
            <button type="button"><img src="./imgs/car.png">Agregar</button>
        </div>
        `;
        product.classList.add('product');
        
        product.setAttribute('style', `background-image: url(${img})`);
        product.setAttribute('href', `./product.html?id=${doc.id}&name=${data.name}`);
        list.appendChild(product);

        console.log(data.name);
        });
}

filters.addEventListener('change', function() {
    console.log('tipo: ', filters.type.value);
    console.log('sabor: ', filters.flavor.value);
    console.log('precio: ', filters.price.value);

    let productsCollection = db.collection('products');

    if (filters.type.value) {
        productsCollection = productsCollection.where('type', '==', filters.type.value);
    }

    if (filters.flavor.value) {
        productsCollection = productsCollection.where('flavor', 'array-contains', filters.flavor.value);
    }

    if (filters.price.value) {
        switch (filters.price.value) {
            case '0':
                productsCollection = productsCollection.where('price', '<', 25000); 
                break;
            case '1':
                productsCollection = productsCollection.where('price', '>=', 25000).where('price', '<=', 50000);
                break;
            case '2':
                productsCollection = productsCollection.where('price', '>', 50000);
                break;
        }
       
    }
    if (filters.orderPrice.value) {
        switch (filters.orderPrice.value) {
            case 'price__desc':
                productsCollection = productsCollection.orderBy('price', 'desc'); 
                break;
            case 'price__asc':
                productsCollection = productsCollection.orderBy('price', 'asc');
                break;
        }
    }

    if (filters.orderName.value) {
        switch (filters.orderName.value) {
            case 'name__asc':
                if (filters.price.value) {
                    productsCollection = productsCollection.orderBy('price', 'asc');
                }
                productsCollection = productsCollection.orderBy('name', 'asc'); 
                break;
            case 'name__desc':
                if (filters.price.value) {
                    productsCollection = productsCollection.orderBy('price', 'desc'); 
                }
                productsCollection = productsCollection.orderBy('name', 'desc');
                break;
        }
    }

    productsCollection.get().then(handleCollectionResult);
});

db.collection('products')
.get()
.then(handleCollectionResult);

function handleMenu () {
    
}

menubHamburguer.addEventListener('click', handleMenu);

filterBtn.addEventListener ('click', function() {
    
})