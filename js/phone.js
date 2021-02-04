let placeholder = document.querySelector('#defaultImage');
let currentPath = placeholder.src
let images = document.querySelectorAll('.onClickImage');

// Grayscale when not focused
function gray(){
images.forEach(image=>{
    if(image.src!==currentPath)
        image.style.filter = 'grayscale(1)';
})
}

gray();

// onClick event handler
images.forEach(image=>{
    image.addEventListener('click',()=>{
        placeholder.src=currentPath=image.src;
        gray();
    })
})

// onHover event handler
images.forEach( image => {
    image.addEventListener('mouseenter', () => {
            placeholder.src = image.src;
            image.style.filter = 'grayscale(0)';
        });
    });

// stopHover event handler
images.forEach( image => {
    image.addEventListener('mouseleave', () => {
            placeholder.src = currentPath;
            gray();
        });
    });


