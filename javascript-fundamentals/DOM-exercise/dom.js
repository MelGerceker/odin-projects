// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);


//TODO: add the following
/*
a <p> with red text that says “Hey I’m red!”
an <h3> with blue text that says “I’m a blue h3!”
a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
*/

const red = document.createElement("p");
red.textContent = "Hey I’m red!";
red.style.cssText = "color: red;";
container.appendChild(red);

const blue = document.createElement("h3");
blue.textContent = "I am a blue h3!";
blue.style.cssText = "color: blue;";
container.appendChild(blue);


const pinkDiv = document.createElement("div");
const divText = document.createElement("h1");
const divText2 = document.createElement("p");
pinkDiv.appendChild(divText);
pinkDiv.appendChild(divText2);

divText.textContent = "I'm in a div";
divText2.textContent = "ME TOO!";
pinkDiv.style.cssText = "border-style: solid; background: pink";

container.appendChild(pinkDiv);
