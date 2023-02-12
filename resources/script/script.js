
let cover= document.getElementById("first");
let firstPic=document.getElementById("second");
let firstText=document.getElementById("third");
let secondPic=document.getElementById("fifth");
let secondText=document.getElementById("fourth");
/*Can be used if backgroundImage style was successful*/

let nextButton=document.getElementById('button');
let backButton=document.getElementById('buttonB');

/*
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
};*/
function next(){
    /*Page background color*/
    document.querySelector('html').style.backgroundColor="#FFC375";

    /*Cover Photo*/
    cover.style.backgroundImage='url("./resources/pics/cover2.jpg")';
    cover.style.backgroundPosition="top";

    /*Pics*/
    firstPic.style.backgroundImage='url("./resources/pics/Dessert.jpg")';
    secondPic.style.backgroundImage='url("./resources/pics/Coffee.jpg")';

    /*Texts*/
    firstText.querySelector('h2').innerHTML='Desserts';
    firstText.querySelector('p').innerHTML=`“You are what you eat, so eat dessert.”`;
    firstText.querySelector('p').style.fontFamily='"Palatino", serif';
    firstText.querySelector('p').style.fontStyle='italic';
    secondText.querySelector('h2').innerHTML='Coffee';
    secondText.querySelector('p').innerHTML=`“Stressed, blessed, and coffee obsessed.”`; 
    secondText.querySelector('p').style.fontFamily='"Palatino", serif';
    secondText.querySelector('p').style.fontStyle='italic';

    /*Buttons*/
    nextButton.style.display='none';
    backButton.style.display='block';

    /*Credit*/
    document.getElementById("credit").style.display='none'; 
}

function back(){
    /*Page background color*/
    document.querySelector('html').style.backgroundColor="rgb(33, 36, 38)";

    /*Cover Photo*/
    cover.style.backgroundImage='url("./resources/pics/cover1.jpg")';
    cover.style.backgroundPosition="center";

    /*Pics*/
    firstPic.style.backgroundImage='url("./resources/pics/main.jpg")';
    secondPic.style.backgroundImage='url("./resources/pics/Salad.jpg")';

    /*Texts*/
    firstText.querySelector('h2').innerHTML='Main Course';
    firstText.querySelector('p').innerHTML='We will guide you prepare signature dishes';
    firstText.querySelector('p').style.fontFamily="'cursive', serif";
    firstText.querySelector('p').style.fontStyle='normal';
    
    secondText.querySelector('h2').innerHTML='Salad';
    secondText.querySelector('p').innerHTML=`“A salad ain't just a meal; it's a way of life.”`; 


    /*Buttons*/
    nextButton.style.display='block';
    backButton.style.display='none';

    /*Credit*/
    document.getElementById("credit").style.display='block'; 
}
nextButton.onclick=next;
backButton.onclick=back;
/*nextButton.addEventListener("click", next);*/ /*Other Method*/
