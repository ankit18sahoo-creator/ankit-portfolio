const text = "AI & Machine Learning Developer";

let index = 0;

function type() {

const element = document.getElementById("typing");

if(!element) return;

element.innerHTML += text.charAt(index);

index++;

if(index < text.length){

setTimeout(type,80);

}

}

type();

tsParticles.load("particles-js", {
particles: {
number: { value: 60 },
size: { value: 3 },
move: { enable: true, speed: 1 },
links: {
enable: true,
distance: 150,
color: "#38bdf8"
}
}
});

fetch("https://api.github.com/users/ankit18sahoo-creator/repos")
.then(response => response.json())
.then(data => {

const projectSection = document.getElementById("projects");

data.slice(0,6).forEach(repo => {

const div = document.createElement("div");

div.classList.add("project");

div.innerHTML = `

<h3>${repo.name}</h3>
<p>${repo.description || "No description available"}</p>
<a href="${repo.html_url}" target="_blank">View Project</a>
`;

projectSection.appendChild(div);

});

});
