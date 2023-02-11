let cover= document.getElementById("first");

/*cover.querySelector('h1').innerHTML='hi';
cover.querySelector('p').innerHTML='hi';*/

let firstPic=document.getElementById("second");


let firstText=document.getElementById("third");
/*firstText.querySelector('h2').innerHTML='hi';
firstText.querySelector('p').innerHTML='hi';*/

let secondPic=document.getElementById("fifth");

let secondText=document.getElementById("fourth");
/*secondText.querySelector('h2').innerHTML='hi';
secondText.querySelector('p').innerHTML='hi';*/

let nextButton=document.getElementById('button');

/*
document.querySelector('html').style.backgroundColor="white";*/

function next(){
    cover.querySelector('h1').innerHTML='hi';
    cover.querySelector('p').innerHTML='hi';
}

/*nextButton.addEventListener("click", next);*/
nextButton.onclick=next;