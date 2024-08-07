let leftArrow = document.querySelector('.arrow-left');
let rightArrow = document.querySelector('.arrow-right');

let slide1 = document.querySelector("#slide1")
let slide2 = document.querySelector("#slide2")
let slide3 = document.querySelector("#slide3")
let slide4 = document.querySelector("#slide4")
let activeSlide =1;

let hideActiveSlaide = ()=>{
    let activeElement = document.querySelector('.active');
        activeElement.classList.remove('active');
}

let showSlide = (slideNumber)=>{
    hideActiveSlaide();
    document.querySelector('#slide'+slideNumber).classList.add('active');
}

let showNext = ()=>{
    activeSlide +=1;
    if (activeSlide ===5){
        activeSlide =1;
    }
    showSlide(activeSlide);
}

let showBack = () =>{
    
    if ( activeSlide ===1){
        activeSlide=4;
    } else {
        activeSlide -=1;
    }
    showSlide(activeSlide);
}

for (let i =1; i<=4;i++){
    
    let showSlideI = () =>{
        activeSlide =i;
        showSlide(i);
    }
    document.querySelector('#dot'+i).addEventListener('click',showSlideI);
}

leftArrow.addEventListener('click',showBack);
rightArrow.addEventListener('click',showNext);