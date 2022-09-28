import Button from "./components/buttons.js";
import Video from "./components/video.js";


// comilllas locas con alt96 ````

const myApp = document.getElementById("myApp"); 

let myButton = new Button("Login", "btn btn-outline-primary myButton");
myApp.innerHTML = myButton.render();


let myVideo = new Video("https://www.w3schools.com/tags/movie.mp4", 320, 240, "none");
myApp.innerHTML += myVideo.render();


//myApp.innerHTML += myButton.render();