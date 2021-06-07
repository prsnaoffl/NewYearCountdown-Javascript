const year=document.querySelector('#year')
const days=document.querySelector("#days") 
const hours=document.querySelector("#hours") 
const minute=document.querySelector(".minute") 
const seconds=document.querySelector("#seconds") 
const loading=document.querySelector("#loading") 
const Countdown=document.querySelector("#Countdown") 

let currentYear= new Date().getFullYear();
let nextYear=currentYear+1;

year.innerHTML=nextYear;

let newYearTime= new Date("January 01 2022 00:00:00");

function updateCountDown(){
     let currentTime= new Date();
 
    let differenceTime=newYearTime-currentTime; 
    let d=Math.floor(differenceTime / 1000 / 60/ 60 /24);
    let h=Math.floor(differenceTime / 1000 / 60/ 60)%24;
    let m=Math.floor(differenceTime / 1000 / 60)%60;
    let s=Math.floor(differenceTime / 1000 )%60;
    
    days.innerHTML=d;
    hours.innerHTML=h<10 ? "0"+h: h;
    minutes.innerHTML=m<10 ? "0"+m: m;
    seconds.innerHTML=s<10 ? "0"+s: s;
}
setInterval(updateCountDown,1000);

function loadingFunc(){
    loading.remove();
    Countdown.style.display="flex";
}

setTimeout(loadingFunc,1000)