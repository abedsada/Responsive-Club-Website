/*
let cover= document.getElementById("first");
let firstPic=document.getElementById("second");
let firstText=document.getElementById("third");
let secondPic=document.getElementById("fifth");
let secondText=document.getElementById("fourth");
*/ /*Can be used if backgroundImage style was successful*/

let nextButton=document.getElementById('button');
let backButton=document.getElementById('buttonB');


function next(){
    document.getElementById("bac").style.display='none';
    document.getElementById("credit").style.display='none';
    document.querySelector('html').style.backgroundColor="#FFC375"
    document.getElementById("bac2").style.display='block';    
};
function back(){
    document.getElementById("bac").style.display='block';
    document.getElementById("credit").style.display='inline-block';
    document.querySelector('html').style.backgroundColor="rgb(33, 36, 38)"
    document.getElementById("bac2").style.display='none';    
};

nextButton.onclick=next;
backButton.onclick=back;

/*nextButton.addEventListener("click", next);*/ /*Other Method*/
