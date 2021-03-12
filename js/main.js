
document.querySelector('.bars').addEventListener('touchstart', () => {
    document.querySelector('header ul').classList.toggle('show');
    document.querySelector('.bars').classList.toggle('cross');
})
document.querySelector('.bars').addEventListener('click', () => {
    document.querySelector('header ul').classList.toggle('show');
    document.querySelector('.bars').classList.toggle('cross');
})
