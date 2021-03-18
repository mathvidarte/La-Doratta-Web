const onebtn = document.querySelectorAll('.one__btn');
const rowimg = document.querySelector('.row__img');

function handleForEach (elem, i) {

    function handleCheck () {
        console.log(elem,i)
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