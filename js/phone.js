let imagePlaceholder = document.querySelector('#defaultImage');
let onClickImage1 = document.querySelector('#onClickImage1');
let onClickImage2 = document.querySelector('#onClickImage2');
let onClickImage3 = document.querySelector('#onClickImage3');
let onClickImage4 = document.querySelector('#onClickImage4');
let onClickImage5 = document.querySelector('#onClickImage5');
let onClickImage6 = document.querySelector('#onClickImage6');
let currentPath = '../img/phone/ca/caFront.png'

onClickImage1.addEventListener('click', () => {
    imagePlaceholder.src = '../img/phone/ca/caFront.png';
    currentPath = '../img/phone/ca/caFront.png';
})
onClickImage2.addEventListener('click', () => {
    imagePlaceholder.src = '../img/phone/ca/caBack.png';
    currentPath = '../img/phone/ca/caBack.png';
})
onClickImage3.addEventListener('click', () => {
    imagePlaceholder.src = '../img/phone/ca/caRight.png';
    currentPath = '../img/phone/ca/caRight.png';
})
onClickImage4.addEventListener('click', () => {
    imagePlaceholder.src = '../img/phone/ca/caLeft.png';
    currentPath = '../img/phone/ca/caLeft.png';
})
onClickImage5.addEventListener('click', () => {
    imagePlaceholder.src = '../img/phone/ca/caDiagL.png';
    currentPath = '../img/phone/ca/caDiagL.png';
})
onClickImage6.addEventListener('click', () => {
    imagePlaceholder.src = '../img/phone/ca/caDiagR.png';
    currentPath = '../img/phone/ca/caDiagR.png';
})


onClickImage1.addEventListener('mouseenter', () => {
    imagePlaceholder.src = '../img/phone/ca/caFront.png';
})
onClickImage1.addEventListener('mouseleave', () => {
    imagePlaceholder.src = currentPath
})
onClickImage2.addEventListener('mouseenter', () => {
    imagePlaceholder.src = '../img/phone/ca/caBack.png';
})
onClickImage2.addEventListener('mouseleave', () => {
    imagePlaceholder.src = currentPath
})
onClickImage3.addEventListener('mouseenter', () => {
    imagePlaceholder.src = '../img/phone/ca/caRight.png';
})
onClickImage3.addEventListener('mouseleave', () => {
    imagePlaceholder.src = currentPath
})
onClickImage4.addEventListener('mouseenter', () => {
    imagePlaceholder.src = '../img/phone/ca/caRight.png';
})
onClickImage4.addEventListener('mouseleave', () => {
    imagePlaceholder.src = currentPath
})
onClickImage5.addEventListener('mouseenter', () => {
    imagePlaceholder.src = '../img/phone/ca/caDiagL.png';
})
onClickImage5.addEventListener('mouseleave', () => {
    imagePlaceholder.src = currentPath
})
onClickImage6.addEventListener('mouseenter', () => {
    imagePlaceholder.src = '../img/phone/ca/caDiagR.png';
})
onClickImage6.addEventListener('mouseleave', () => {
    imagePlaceholder.src = currentPath
})


