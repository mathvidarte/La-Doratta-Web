const params = new URLSearchParams(location.search);
const id = params.get('id');
console.log(id);

const article = document.querySelector('.article');


//If there is not id
if (!id) {
    location.href='./404.html';
}

//bring the info from database
db.collection('products')
.doc(id)
.get()
.then(function(doc){
    const data = doc.data();
    //if there is no data
    if (!data) {
        location.href='./404.html';
    }

    //article.setAttribute('src',data.images[0].url);
    article.setAttribute('style', `background-image: url(${data.images[0].url})`);
    article.innerHTML=
    `<img class="article__img" src="${data.images[0].url}">
    <div class="article__info">
        <h1 class="info__tittle">${data.name}</h1>
        <p class="info__description">${data.description}</p>
        <p class="info__price">$${data.price}</p>
        <div class="infoqty">
            <label class="infoqty__label">Cantidad</label>
            <select class="infoqty__select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>+5</option>
                </select>
        </div>
        <div class="infobtn">
            <button type="button" class="info__btn">Agregar al carrito<img src="./imgs/cardWhite.png"></button>
        </div>
    </div>`
})