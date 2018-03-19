/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(1366, 654);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


background(156, 134, 90); // dirt/soil

// underground rocks
for(var ellipseWidth = 0; ellipseWidth < width; ellipseWidth+=100) {
    for(var ellipseHeight = 0; ellipseHeight < height; ellipseHeight+=125) { // distributes rocks throughout the dirt/soil
        fill(89, 85, 74);
        ellipse(ellipseWidth, ellipseHeight, random(20), random(20)); // allows for rocks to have random shapes
    }
};

// sky
var r = 106 // red
var g = 206 // green
var b = 217 // blue
// splits the sky into 5 parts so that each part is lighter than the one above it
for (var x = 0; x < 200; x+=40) { 
    noStroke(); // to take away the lines across the sky 
    // the various parts of the sky
    if(x >= 0) { 
        fill(r, g += 10, b += 10);
        rect(0, x, 1366, 40);
    }
    else if(x > 40) { 
        fill(r, g -= 2, b -= 2);
        rect(0, x, 1366, 40);
    }
    else if(x > 80) { 
        fill(r, g -= 2, b -= 2);
        rect(0, x, 1366, 40);
    }
    else if(x > 120) { 
        fill(r, g -= 2, b -= 2);
        rect(0, x, 1366, 40);
    }
    else if(x > 160) { 
        fill(r, g -= 2, b -= 2);
        rect(0, x, 1366, 40);
    }
    else if(x > 200) {
        fill(r, g -= 2, b -= 2);
        rect(0, x, 1366, 40);
    }
}; 

// grass
fill(30, 138, 57);
rect(0, 200, 1366, 20);
        
// potato drawing
potato = function(x, y) {
    noStroke();
    fill(222, 185, 130);
    ellipse(x, y, 60, 100); // top half of potato
    ellipse(x + 10, y + 30, 70, 70); // bottom half of potato
    fill(3, 2, 1);
    ellipse(x - 13, y + 10, 10, 10); // left eye
    ellipse(x + 20, y + 7, 10, 10); // right eye
    fill(117, 101, 53);
    // upper right dots
    ellipse(x + 5, y - 40, 2, 2);
    ellipse(x + 15, y - 35, 2, 2);
    ellipse(x + 8, y - 30, 2, 2);
    // lower left dots
    ellipse(x - 10, y + 50, 2, 2);
    ellipse(x - 10, y + 40, 2, 2);
    ellipse(x, y + 45, 2, 2);
    // lower right dots
    ellipse(x + 30, y + 40, 2, 2);
    ellipse(x + 35, y + 35, 2, 2);
    ellipse(x + 37, y + 28, 2, 2);
    noFill();
    strokeWeight(2);
    stroke(3, 2, 1);
    arc(x + 5, y + 10, 10, 10, 0, PI/1.2); // mouth
    // potato outlines
    arc(x, y, 60, 100, PI/1.2, TWO_PI-PI/200);
    arc(x +10, y + 30, 70, 70, -0.97, PI/0.97);
};

// allows potatoes to appear wherever the mouse is clicked
mouseClicked = function() {
    potato(mouseX, mouseY);
};


// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
