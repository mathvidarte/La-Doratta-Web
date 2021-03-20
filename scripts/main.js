const onebtn = document.querySelectorAll('.one__btn');
const rowimg = document.querySelector('.row__img');
const slider = document.querySelector('.main__slider');
const menubHamburguer = document.querySelector('.menub__hamburguer')
const navb = document.querySelector('.menub__links')

let currentSlide = 0;

function handleInterval () {
    currentSlide++;
    if(currentSlide >= 2) {
        currentSlide = 0;
    }
    slider.style.transform = `translate(-${100 * currentSlide}%, 0px)`;
}
setInterval(handleInterval, 5000);




function handleForEach (elem, i) {

    function handleCheck () {
        
        switch (i) {
            case 0:
                rowimg.classList.remove('row__img--svg')
                rowimg.classList.add('row__img--gvg');
                break;
            case 1:
                rowimg.classList.remove('row__img--gvg')
                rowimg.classList.add('row__img--svg')
                break;

        }
    }

    elem.addEventListener('click', handleCheck);
} 

onebtn.forEach(handleForEach);


function handleMenu () {
    
}

menubHamburguer.addEventListener('click', handleMenu);