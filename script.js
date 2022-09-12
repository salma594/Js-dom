let heading1=document.querySelector("h1");
let text="Hey I'm Salma and I'm very strong"
let i=0
function typeLetter() {
    if (i<text.length) {
        heading1.textContent+=text.charAt(i);
        i++;
        setTimeout(typeLetter,100);
    }
    else{
        setTimeout(function() {
            heading1.textContent="";
            i=0;
        },2000)
    }
}

setInterval(typeLetter,1000)