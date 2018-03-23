var problem = document.getElementById("problem");
var textbox = document.getElementById("yesorno");
var enter = document.getElementById("enter");
var wrong = document.getElementById("wrong");
var sandwich = document.getElementsByClassName("sandwich");
var bologna = document.getElementById("balogna");
var egg = document.getElementById("egg");
var cheese = document.getElementById("cheese");
var ham = document.getElementById("ham");
var pbj = document.getElementById("pbj");
var tuna = document.getElementById("tuna");
var display = document.getElementById("display");


enter.addEventListener("click", function(){
    if(textbox === "no"){
        wrong.style.height = "200px";
    }
    else if(textbox === "yes"){
        sandwich.style.height = "200px";
    }
});


bologna.addEventListener("click", function(){
    display.innerHTML = ""
});

egg.addEventListener("click", function(){
    display.innerHTML = ""
});

cheese.addEventListener("click", function(){
    display.innerHTML = ""
});

ham.addEventListener("click", function(){
    display.innerHTML = ""
});

pbj.addEventListener("click", function(){
    display.innerHTML = ""
});

tuna.addEventListener("click", function(){
    display.innerHTML = ""
});
