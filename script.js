const text = "AI & Machine Learning Developer";

let index = 0;

function type(){

document.getElementById("typing").innerHTML += text.charAt(index);

index++;

if(index < text.length){

setTimeout(type,80);

}

}

type();
