// Use JavaScript to obtain a reference to the first article header and change its text with textContent property to "Welcome the {insert your name here} blog"
let heading = document.querySelector(".article__header");
heading.textContent= "Welcome to the Leah Blog";

// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to "article__header important".
let important = document.querySelectorAll(".article__header");

for (i = 0; i < important.length; i++) { 
important[i].classList.add("important");
console.log(important[i].classList);
}