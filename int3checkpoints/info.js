// Creates Variables and saves DOM Elements to each
var spongebob = document.getElementById("spongebob");
var patrick = document.getElementById("patrick");
var display = document.getElementById("display");

/* EvenListener for Spongebob image 
   Makes info appear when user clicks */
spongebob.addEventListener("click", function(){
    display.innerHTML = "Spongebob Squarepants is the main character of the show, 'Spongebob Squarepants', and he lives in a pineapple under the sea."
});

/* EventListener for Patrick image
   Makes info appear when user clicks */
patrick.addEventListener("click", function(){
    display.innerHTML = "Patrick Star is Spongebob Squarepant's best friend, who lives under a rock."
});