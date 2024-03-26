new WOW().init();

let login = document.getElementById('link')
let add = document.getElementById('add')
const input = document.querySelectorAll('input');


login.addEventListener("click", function (){
    modal.classList.add('active')
})
add.addEventListener("click", function (){
    modal.classList.remove('active')

    this.input = ' ';
})

