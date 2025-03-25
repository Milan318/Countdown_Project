let silderContainer=document.querySelector(".slider-container");
let sliderItem=document.querySelectorAll(".slider-item");
let indicatorItem=document.querySelectorAll(".indicator-item");
let currentSlide=0;

function showSlide(n){
    if(n>=sliderItem.length){
        currentSlide=0;
    }
    else if(n<0){
        currentSlide=sliderItem.length-1;
    }

    sliderItem.forEach((slide,n)=>{
        slide.classList.remove("active");
        
        if(n===currentSlide){
            slide.classList.add("active");
        }
    })

    indicatorItem.forEach((indicator,n)=>{
        indicator.classList.remove("active-2");
        if(n===currentSlide){
            indicator.classList.add("active-2");
        }
    })
}

function changeSlide(n){
    showSlide(currentSlide+=n);

}
setInterval(() => {
    changeSlide(1)
}, 5000);
  