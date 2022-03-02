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
const productLink = document.querySelector('.product');
const detailWrapperOne = document.querySelector('#first');
const detailWrapperTwo = document.querySelector('#second');
const detailWrapperThree = document.querySelector('#third');

console.log(detailOne);

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
   
});

product.addEventListener('click', () => {
    product.classList.toggle('fa-chevron-up');
    detailOne.classList.toggle('active');
    detailWrapperOne.classList.toggle('active');
});


company.addEventListener('click', () => {
    company.classList.toggle('fa-chevron-up');
    detailTwo.classList.toggle('active');
    detailWrapperTwo.classList.toggle('active');
});


connect.addEventListener('click', () => {
    connect.classList.toggle('fa-chevron-up');
    detailThree.classList.toggle('active');
    detailWrapperThree.classList.toggle('active');
})

// productLink.addEventListener('mouseover', () => {
//     product.classList.add('fa-chevron-up');
//     detailOne.classList.toggle('active');
// });
// productLink.addEventListener('mouseleave', () => {
//     product.classList.remove('fa-chevron-up');
//     detailOne.classList.remove('active');
// });



// arrow.addEventListener('click', () => {
//     console.log('clicked!');
//     arrow.classList.toggle('fa-chevron-up');
//     connect.classList.toggle('active');
//     texts.forEach(text => (
//         text.classList.toggle('active')
//     ))
// })

