const mainCart__cont = document.querySelector('.mainCart__cont');
const subtotal = document.querySelector('.subtotal__summary span');
const subtotal__total = document.querySelector('.subtotal__total span');
const checkOutForm = document.querySelector('.checkOutForm');
const mainC__alert = document.querySelector('.mainC__alert');

let total = 0;
let totalWithShipping = 0;

renderCart = () => {
    console.log(cart); 
    cart.forEach((data) => {
        const allArticles =document.createElement('div');
        let img = data.images[0]?.url
        if (!img) {
            img = './imgs/noImg.png';
        }
        allArticles.innerHTML = `
            <article class="eachProduct">
                <div class="eachProduct__img" style="background-image: url(${img});">
                            <img class="img__product" src="imgs/carrotCake.jpg">
                </div>
                <div class="eachProduct__info">
                            <h1 class="info__title">${data.name}</h1>
                            <p class="info__description">${data.description}</p>
                            <p class="info__price">$${data.price}</p>
                </div>
            </article>
        
        `;
        allArticles.classList.add('allArticles');
        mainCart__cont.appendChild(allArticles);
        total += data.price;
        totalWithShipping = total + 10000;

        console.log(total);
    });
    subtotal.innerText = total
    subtotal__total.innerHTML = totalWithShipping;

    checkOutForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const productsIds = [];
        cart.forEach(function (data) {
            productsIds.push(data.id);
        });

        const order = {
            address: checkOutForm.address.value,
            card: checkOutForm.card.value,
            cvv: checkOutForm.cvvNumber.value,
            date: Date.now(),
            productsIds: productsIds,
            total: totalWithShipping,
            uid: loggedUser.uid,
        };

        orders__collection.add(order)
        .then(function (docRef) {
            console.log(docRef);

            cart_collection.doc(loggedUser.uid).set({
                cart: [],
              });
              
            mainC__alert.classList.remove('hidden');
        })
        console.log(order);
    });
}


