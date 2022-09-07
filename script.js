// let element;
// element=document.getElementById("title");
// console.log(element);

// let paragraph;
// paragraph=document.getElementById("lorem");
// console.log(paragraph);

// let btn = document.getElementById('btnDestination');
//         let output = document.getElementById('output');

//     btn.addEventListener('click', () => {
//         let destination = document.getElementsByName('destination');
//         destination.forEach((destination) => {
//             if (destination.checked) {
//             output.innerText = `You selected: ${destination.value}`;
//                 }
//             });

//         });

// let content, input, btn;
// content = document.querySelector("#content");
// input = document.querySelector("#input");
// btn = document.querySelector("#btn");

// btn.addEventListener("click", function () {
//   let name = input.value;
//   if (name.length > 0) {
//     content.textContent += " " + name;
//   }
//   input.value = "";
// });


let colors=[ "red","blue","green","gray","pink","purple","yellow","black","coral"];
let btn = document.querySelector("#btn");
let body = document.querySelector("body");

function changeColor(event) {
  let randomNumber = Math.floor(Math.random() * colors.length);
  console.log("the color is " + randomNumber);
  body.style.backgroundColor = colors[randomNumber];
}

btn.addEventListener("click", changeColor);


// let input = document.querySelector("#input");
// let body = document.querySelector("body");

// function changeColor(event){
// body.style.backgroundColor = event.target.value;
// }
// input.addEventListener("input", changeColor);