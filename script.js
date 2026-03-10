const text = "AI & Machine Learning Developer";

let index = 0;

function type() {

```
const element = document.getElementById("typing");

if (!element) return;

element.innerHTML += text.charAt(index);

index++;

if (index < text.length) {
    setTimeout(type, 80);
}
```

}

type();
