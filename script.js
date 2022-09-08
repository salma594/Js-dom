
let count = 0;

function inc() {
  document.getElementById("output").innerHTML=++count;
  changecolor();
}
function reset() {
  count=0
  document.getElementById("output").innerHTML=
  0;
  changecolor();
}

function dec() {
  document.getElementById("output").innerHTML=--count;
  changecolor();
}
function changecolor(){
  if(output.innerHTML>0){
    output.style.color='blue'
  }
  else if(output.innerHTML==0){
    output.style.color="#c07860";
  }
  else
  output.style.color='red'
}

