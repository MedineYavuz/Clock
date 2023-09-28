const saat=document.getElementById("saat");
const dakika=document.getElementById("dakika");
const saniye=document.getElementById("saniye");
const pmam=document.getElementById("pm-am");


function updateClock(){
    let hours=new Date().getHours();
    let minute=new Date().getMinutes();
    let seconds=new Date().getSeconds();

    let pm="AM";
    if(hours>12){
        hours=hours-12;
        pm="PM";
    }else{
        pm="AM";
    }
    
    saat.innerText=hours;
    dakika.innerText=minute;
    saniye.innerText=seconds;
    
    pmam.innerText=pm;
    
    setTimeout(()=>{
        updateClock();
    },1000);
}



updateClock();
