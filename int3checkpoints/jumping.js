// Creates Variable and saves DOM Elements to each
var jumper = document.getElementById("jumper");
jumper.style.position = "absolute";

/* EventListener for Button.
   Sets the button to randomly move each time user moves mouse to it */
jumper.addEventListener("mousemove", function(){
    jumper.style.top = Math.random() * 600 + "px";
    jumper.style.left = Math.random() * 600 + "px";
})