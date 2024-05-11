let workTitle=document.getElementById("work");
let breakTitle=document.getElementById("break");
let play=document.getElementById('start');

let workTime=25;
let breakTime=5;

let seconds='00';
//display

window.onload=()=>{
    document.getElementById('min').innerHTML=workTime;
    document.getElementById('sec').innerHTML=seconds;

    workTitle.classList.add('active');
}

//start timer

play.addEventListener('click',()=>{
     //change button
     document.getElementById('start').style.display="none";
     document.getElementById('reset').style.display="block"

    //change the time
    seconds=59;

    let workMinutes=workTime-1;
    let breakMinutes=breakTime-1;

    breakCount=0;
    //countDown
    let timerFunction=()=>{
       //chamge the display 
       document.getElementById('min').innerHTML = workMinutes;
       document.getElementById('sec').innerHTML=seconds;

       //change the time
       seconds=seconds-1;
       if(seconds==0){
        workMinutes=workMinutes-1;
        if (workMinutes == -1){
            if(breakCount%2==0){
                //start break
                workMinutes=breakMinutes;
                breakCount++;

                workTitle.classList.remove('active');
                breakTitle.classList.add('active');

            }else{
                //continue work
                workMinutes=breakMinutes;
                breakCount++

                breakTitle.classList.remove('active');
                workTitle.classList.add('active');
            }
        }
        seconds=59;
       }

    }

    setInterval(timerFunction,1000);

})