/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var xPos = 0;
var yPos = 0;
var weight = 2;

draw = function() {

    // Draws Blue Circles from Upper Left to Lower Right
    strokeWeight(3);
    stroke(57, 0, 214);
    fill(0, 210, 247);
    ellipse(xPos, yPos, 30, 30);
    xPos = xPos + 20;
    yPos = yPos + 20;
    
    // Draws Thicker Blue Circles from Upper Right to Lower Left
    strokeWeight(weight);
    stroke(57, 0, 214);
    fill(0, 210, 247);
    ellipse(height - xPos, yPos, 30, 30);
    weight++;
    
    // Draws Blue Circles from Left to Right
    strokeWeight(3);
    stroke(57, 0, 214);
    fill(0, 210, 247);
    ellipse(xPos, 200, 30, 30);
    
    // Draws Blue Circles from Up to Down
    strokeWeight(3);
    stroke(57, 0, 214);
    fill(0, 210, 247);
    ellipse(200, yPos, 30, 30);
    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);