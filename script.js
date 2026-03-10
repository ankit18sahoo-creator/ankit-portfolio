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

tsParticles.load("particles-js", {

particles: {

```
number: {
  value: 80
},

size: {
  value: 3
},

move: {
  enable: true,
  speed: 1
},

links: {
  enable: true,
  distance: 150
}
```

}

});