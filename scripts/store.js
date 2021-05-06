const menubHamburguer = document.querySelector('.menub__hamburguer')
const navb = document.querySelector('.menub__links')

/*const products = [
    {
        img: 'imgs/chocolateCake.jpg',
        title: 'Chocolate Cake',
        sub: 'Con ChocolateCream y Moras',
        star: 'imgs/starScore.png',
        price: '$25.000'
    },
    {
    img: 'imgs/carrotCake.jpg',
    title: 'Carrot Cake',
    sub: 'Con Nueces y CheeseCream',
    star: 'imgs/starScore.png',
    price: '$27.000'
    },
    {
    img: 'imgs/redvelvetCupcake.jpg',
    title: 'Red Velvet',
    sub: 'Cupcakes con ButterCream',
    star: 'imgs/starScore.png',
    price: '$24.000'
    }, 
    {
    img: 'imgs/redvelvetCupcake.jpg',
    title: 'Red Velvet',
    sub: 'Cupcakes con ButterCream',
    star: 'imgs/starScore.png',
    price: '$24.000'
    },
    {
    img: 'imgs/redvelvetCupcake.jpg',
    title: 'Red Velvet',
    sub: 'Cupcakes con ButterCream',
    star: 'imgs/starScore.png',
    price: '$24.000'
    }, 
    {
    img: 'imgs/redvelvetCupcake.jpg',
    title: 'Red Velvet',
    sub: 'Cupcakes con ButterCream',
    star: 'imgs/starScore.png',
    price: '$24.000'
    },
    {
        img: 'imgs/redvelvetCupcake.jpg',
        title: 'Red Velvet',
        sub: 'Cupcakes con ButterCream',
        star: 'imgs/starScore.png',
        price: '$24.000'
        }
    
]*/

const list = document.querySelector('.mainS__list');

db.collection('products')
.get()
.then((querySnapshot) => {
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
});

function handleMenu () {
    
}

menubHamburguer.addEventListener('click', handleMenu);