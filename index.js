var timer=10;
var score = 0 ;
var hith;
function makebubble(){
    var clutter="";

for(var i =1;i<=133;i++){
    var n= Math.floor(Math.random()*10);
     clutter +=`<div id="bubble">${n}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
   var timerint = setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector(".timerval").textContent= timer;


        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`<div> <h1>Game Over
            </h1>
            <br/>
            <br/>
            <h2>Your score is ${score} </h2></div>
            `;
        }
        
    },1000);
}
function getnewhit(){
    hith=Math.floor(Math.random()*10);
    document.querySelector(".hitval").textContent=hith;
}
function increasescore(){
    score += 10;
    document.querySelector(".scoreval").textContent=score;
}


makebubble();
getnewhit();
runTimer();
document.querySelector("#pbtm").addEventListener("click",function(dets){
   var clickedno= Number(dets.target.textContent) ;
   if(clickedno===hith){
    increasescore();
    makebubble();
    getnewhit();
   }
})


