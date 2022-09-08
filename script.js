let input,add,list;
input = document.querySelector("input");
add = document.querySelector("button");

add.addEventListener("click", function(){
    console.log(input.value);
    let listItem = document.createElement("li");
    listItem.textContent= input.value;
    let ul = document.querySelector("ul");
    ul.appendChild(listItem);
    input.value= "";
});
