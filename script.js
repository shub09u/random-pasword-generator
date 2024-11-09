function shubham() {
    // let die1=Math.floor(Math.random()*6)+1;
    // let die2=Math.floor(Math.random()*6)+1;
    // let die3=Math.floor(Math.random()*6)+1;

let max=6
let min=1
    let die1=Math.floor(Math.random()*(max-min+1))+1;
    let die2=Math.floor(Math.random()*(max-min+1))+1;
    let die3=Math.floor(Math.random()*(max-min+1 ))+1;


 document.getElementById(`box1`).innerHTML=die1;
 document.getElementById(`box2`).innerHTML=die2;
 document.getElementById(`box3`).innerHTML=die3;
} 