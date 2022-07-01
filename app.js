const hamburger = document.querySelector('.hamburger');
const list = document.querySelector('.nav-list ul');
const link = document.querySelector('.list li a');

hamburger.addEventListener('click', function(){
    list.classList.toggle('active');
})