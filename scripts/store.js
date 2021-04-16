const products = [
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
    }
]

const list = document.querySelector('.main__list');

function handleProdcutItem (item) {

    const product =document.createElement('a');
    product.innerHTML = `
    <div class="column__product">
        <p class="product__title"> ${item.title}</p>
        <p class="product__sub">${item.sub}</p>
    </div>
    <div class="column__footer">
        <p class="product__price">${item.price}</p>
        <img src=${item.star}>
        <button type="button"><img src="./imgs/car.png">Agregar</button>
    </div>
    `;
    product.classList.add('product');
    product.setAttribute('href', '#', 'style', `background-image: url(${item.img})`);
    product.setAttribute('style', `background-image: url(${item.img})`);
    list.appendChild(product);

}

products.forEach(handleProdcutItem)