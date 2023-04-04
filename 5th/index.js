const days=document.querySelector(".days");
const hours=document.querySelector(".hours");
const minutes=document.querySelector(".minutes");
const seconds=document.querySelector(".seconds");
const heading =document.querySelector("h1");
const countertimer=document.querySelector(".counterTimer");

const second = 1000;
const minute =60*second;
const hour=60*minute;
const day=24*hour;

const timerfunction=()=>{



    let now=new Date(),
    dd=String(now.getDate()).padStart(2,"0"),
    mm=String(now.getMonth()+1).padStart(2,"0")
    yyyy=now.getFullYear();

    const enterday =prompt("enter day").padStart(2,"0");
    const entermonth=prompt("enter month").padStart(2,"0");

    now=`${mm}/${dd}/${yyyy}`;

    let targetDate=`${entermonth}/${enterday}/${yyyy}`;
    if(now>targetDate){
        targetDate=`${entermonth}/${enterday}/${yyyy+1}`;
    }

    // console.log(`${entermonth}/${enterday}/${yyyy}`);

 

   const intervalid= setInterval(()=>{

    const timer=new Date(targetDate).getTime();
    const today= new Date().getTime();
    const diff=timer-today;

    const leftday=Math.floor(diff/day);
    const lefthour=Math.floor((diff%day)/hour);
    const leftmin=Math.floor((diff%hour)/minute);
    const leftsec=Math.floor((diff%minute)/second);

    // console.log(`${leftday}:${lefthour}:${leftmin}:${leftsec}`);

    days.innerText=leftday;
    hours.innerText=lefthour;
    minutes.innerText=leftmin;
    seconds.innerText=leftsec;

    if(diff<0){
        countertimer.style.diplay="none";
        heading.innerText="Times Up";
        clearInterval(intervalid);
    }


    },0);

}
timerfunction();