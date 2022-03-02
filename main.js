const menuBtn = document.querySelector('.menu-btn i');
const navbar = document.querySelector('.navbar');
// const connect = document.querySelector('.connect-wrapper');
// const texts = document.querySelectorAll('.connect-wrapper ul li');
const product = document.querySelector('.product i');
const detailOne = document.querySelector('.one');
const company = document.querySelector('.company i')
const detailTwo = document.querySelector('.two');
const connect = document.querySelector('.connect i');
const detailThree = document.querySelector('.three');

console.log(detailOne);

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
   
});

product.addEventListener('click', () => {
    product.classList.toggle('fa-chevron-up');
    detailOne.classList.toggle('active');
});


company.addEventListener('click', () => {
    company.classList.toggle('fa-chevron-up');
    detailTwo.classList.toggle('active');
});


connect.addEventListener('click', () => {
    connect.classList.toggle('fa-chevron-up');
    detailThree.classList.toggle('active');
})


// arrow.addEventListener('click', () => {
//     console.log('clicked!');
//     arrow.classList.toggle('fa-chevron-up');
//     connect.classList.toggle('active');
//     texts.forEach(text => (
//         text.classList.toggle('active')
//     ))
// })

