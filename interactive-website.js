// Creates variables for each element with Id and saves DOM Elements to each
var title = document.getElementById("title");
var directions = document.getElementById("directions");
var rule = document.getElementById("rule");
var age = document.getElementById("age");
var ageOption = document.getElementById("ageOption");
var calculate = document.getElementById("calculate");
var displayAge = document.getElementById("displayAge");
var images = document.getElementById("images");
var equations = document.getElementById("equations");
var graph = document.getElementById("graph");
var displayText = document.getElementById("displayText");

/* EventListener for "Calculate" Button
   Makes a number appear when user clicks on button based on user input and equation option */
calculate.addEventListener("click", function(){

// Creates new variables based on the values of the previous variables
    var ageNumber = +age.value;
    var ageOp = ageOption.value;

// Conditional that runs certain equation based on the option the user chooses
    if(ageOp === "Find Minimum Age"){
        displayAge.innerHTML = ageNumber / 2 + 7;
    }
    else if(ageOp === "Find Maximum Age"){
        displayAge.innerHTML = (ageNumber - 7) * 2;
    }
});

/* EventListener for equations image
   Makes info appear based on image user clicks on */
equations.addEventListener("click", function(){
    displayText.innerHTML = "The Dating Equation Calculator above is based on the two equations in this image.  The first one is for calculating the minimum age your partner must be so that the relationship is socially appropriate, and the second equation represents the maximum age of your partner.";
});

/* EventListener for graph image
   Makes info appear based on image user clicks on */ 
graph.addEventListener("click", function(){
    displayText.innerHTML = "The graph above represents The Dating Equations.  The red line shows the maximum boundaries of your date's age based on your age, and the blue line shows the minimum boundaries of your date's age.  The green line represents your age.  As you can see, anywhere past the minimum and maximum boundaries are considered socially unacceptable based on society, and the Dating Equation does not work for those under 14 years.  Additionally, the older a person gets, the wider the range of your dates' ages grow.";
});

// Changes and adds to style of website by creating thicker margins and adding a background
document.body.style.margin = "50px 50px 50px 50px";
document.body.style.backgroundImage = "url('http://getwallpapers.com/wallpaper/full/6/8/9/301862.jpg')";

// Changes and adds to the style of the heading and directions by centering them
title.style.textAlign = "center";
directions.style.textAlign = "center";

// Changes style of the input box, drop-down menu, and button by centering them altogether using a div containing all three elements
rule.style.textAlign = "center";

// Changes style of images and their info display by centering them altogether using a div containing all three parts
images.style.textAlign = "center";

// Changes style of images and display by spacing them out by adding margins
equations.style.margin = "25px 25px 25px 25px";
graph.style.margin = "25px 25px 25px 25px";
displayText.style.margin = "20px 50px 20px 50px";