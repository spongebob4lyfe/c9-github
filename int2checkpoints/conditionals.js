/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

draw = function() {
    background();
    
    ellipse(mouseX, mouseY, 30, 30);
    
    // Changes the shape's looks based on x position (light blue, thick outline)
    if(mouseX > 200){
        fill(0, 210, 247)
        strokeWeight(3)
        stroke(57, 0, 214)
    }
    // Changes the shape's looks based on x position (navy green, thinner outline)
    else{
       fill(100, 110, 47)
       strokeWeight(2)
       stroke(57, 20, 14)
    }
    
    // Changes the shape's looks based on y position (magenta, thicker, light blue outline)
    if(mouseY > 300){
        fill(400, 2, 200)
        strokeWeight(4)
        stroke(150, 300, 250)
    }
    
    // Changes the shape's looks based on y position (light green, thin, bright yellow outline)
    if(mouseY < 100){
        fill(100, 300, 40)
        strokeWeight(1.5)
        stroke(400, 300, 2)
    }
    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
