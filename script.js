let affichage = document.getElementById("affichage");
 let btn1 = document.getElementById("control");
 let btn2 = document.getElementById("reje");
 let saisie = document.querySelector("input");
 let mot = document.getElementById("fin");
 let zoneA = document.getElementById("jeu");
 let zoneB =document.getElementById("finJeu");
 let audio=document.querySelectorAll("audio");

 function Findejeu(){
  zoneA.style.display="none";
  zoneB.style.display="block";
 }
 function Rejouer(){
  Somme();
  zoneB.style.display="none";
  zoneA.style.display="block"
 }

 function Aleatoire(min, max)
 {
  return Math.floor(Math.random() * (max - min)) + min;
}
let entierA;
 let entierB;
let res ;
function Somme() {
  entierA = Aleatoire(1, 100);
  entierB = Aleatoire(1, 100);
  res = entierA+entierB;
 affichage.innerText = entierA+" "+"+"+" "+entierB;
 affichage.style.color="black";
 console.log(res);
}

function Compariason(){

  if(saisie.value.length<=0){
    mot.innerText= "Box empty choose a number";
    mot.style.color="black";
  }else if(saisie.value == res){
    mot.innerText= "Excellent you won";
    mot.style.color="green";
    audio[1].play()
  }
  else{
    mot.innerText= "You lost";
    mot.style.color="red";
    audio[0].play()
  }
  Findejeu();
  saisie.value="";
};
 Somme();
 btn1.addEventListener("click",Compariason);
 btn2.addEventListener("click",Rejouer);