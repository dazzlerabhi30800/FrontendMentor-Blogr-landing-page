const menuBtn = document.querySelector('.menu-btn i');
const navbar = document.querySelector('.navbar');
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




const secondImg = document.querySelector('.second .future-wrapper .img-wrapper img');
const fourthImg = document.querySelector('.fourth .future-wrapper .img-wrapper img');


if(window.innerWidth >= 1000) {
    secondImg.src = "images/illustration-editor-desktop.svg"
    fourthImg.src = "images/illustration-laptop-desktop.svg"
} else {
    secondImg.src = "images/illustration-editor-mobile.svg"
    fourthImg.src = "images/illustration-laptop-mobile.svg"
}
