let silderContainer=document.querySelector(".slider-container");
let sliderItem=document.querySelectorAll(".slider-item");
let currentSlide=0;

// ---------- slider -----------
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
// setInterval(() => {
//     changeSlide(1)
//     changeQuotes(currentindex++)
// }, 1000);

//---------------Quotes-------------//

let Quotes = document.querySelector('.para p');

let quotes=[
    {quote:"1. Taj Mahal. “Taj Mahal is not just a monument, but a symbol of love.” - Suman Pokhrel"},
    {quote:"2. India Gate. Proud moment at India Gate!"},
    {quote:"3. Jal Mahal. “Jal Mahal—a palace that floats like a dream on Jaipur's waters.”"},
    {quote:"4. Nehru Garden. A garden in the middle of Fateh Sagar Lake in Udaipur"},
    {quote:"5. City Palace. A royal legacy etched in stone and time -City Palace, Udaipur"},
    {quote:"6. Jaiselmer Desert. Golden sands, endless horizons, and the magic of the desert!"},
    {quote:"7. Ladakh Mountains. Living life on mountain time"},
    {quote:"8. Manali Ice-Mountains. Manali's snow-capped peaks aren't just for the eyes; they're the perfect backdrop for a love story that unfolds amidst the mountains"},
    {quote:"9. Historical palace. Every place has a story to tell"},
    {quote:"10. White City. In the arms of Udaipur, time stands still, and memories last a lifetime"}
]

let currentindex = 0
let changeQuotes = ()=>{

    Quotes.innerText = quotes[currentindex].quote;

}

changeQuotes()
// -------------- timer --------------

let time = document.getElementById('time').textContent;
let resetTime=time;
let id;

const startTimer = ()=>{
    id = setInterval(()=>{

        if(time==0){
            changeSlide(1)

            if(currentindex<quotes.length){

                currentindex+=1;
            }
            else{
                currentindex = 0
            }

            changeQuotes(currentindex)
        time=resetTime;
        document.getElementById('time').innerText=time
        
        }
        time--;
        document.getElementById('time').textContent =  time>9 ? time : '0'+time;
    },1000)
}  

startTimer()
