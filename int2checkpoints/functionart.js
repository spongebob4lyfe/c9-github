/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

button = function(x, y){
    // Button
    fill(random(255), random(255), random(255));
    // Outer Circle
    ellipse(x - 0, y - 0, 50, 50);
    // Inner Circle
    ellipse(x - 0, y - 0, 40, 40);
    fill()
    // Bottom Right Hole
    ellipse(x - 5, y - 5, 5, 5);
    // Bottom Left Hole
    ellipse(x - 5, y + 5, 5, 5);
    // Top Left Hole
    ellipse(x + 5, y + 5, 5, 5);
    // Top Right Hole
    ellipse(x + 5, y - 5, 5, 5);
    line(x - 3, y - 3, x + 3, y + 3);
    line(x - 3, y + 3, x + 3, y - 3);
};

mouseClicked = function(){
    button(mouseX, mouseY);
};
  
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
