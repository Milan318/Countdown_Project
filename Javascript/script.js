let silderContainer=document.querySelector(".slider-container");
let sliderItem=document.querySelectorAll(".slider-item");
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
}

function changeSlide(n){
    showSlide(currentSlide+=n);

}
setInterval(() => {
    changeSlide(1)
}, 3000);
  