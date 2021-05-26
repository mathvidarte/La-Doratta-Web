const manua__user = document.querySelector('.manua__user');
const menua__close =document.querySelector('.menua__close');


function userLoggedIn () {

    manua__user.classList.add('hidden');
    menua__close.classList.remove('hidden');

   /* if(loggedUser.admin) {
        const showLoggedInAdmin = document.querySelectorAll('.showLoggedInAdmin');
        showLoggedInAdmin.forEach(function(elem) {
            elem.classList.remove('hidden');
        });
    }*/


}

function userLoggedOut () {
    
    manua__user.classList.remove('hidden');
    menua__close.classList.add('hidden');
}