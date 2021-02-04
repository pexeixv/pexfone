window.addEventListener('scroll',()=>{
    let top1=document.querySelector('header').offsetTop;
    let top2=document.querySelector('.landingArea').offsetTop;
    let top3=document.querySelector('.gridShow').offsetTop;
    let scrollPos=this.scrollY;
    let header = document.querySelector('header');


    if(top1<=scrollPos && scrollPos<=top2)
        header.style.background = 'rgb(199, 242, 255)';
    else if (top2<=scrollPos && scrollPos<=top3)
        header.style.background = 'white';
    else if (top3<=scrollPos)
        header.style.background = 'rgb(199, 242, 255)';
    
    if(scrollPos>=50)
        header.style.boxShadow = '0 2px 10px 2px rgba(0,0,0,0.2)';
    else header.style.boxShadow = 'none';
})