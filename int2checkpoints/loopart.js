/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

background(0, 0, 1);

// Putting the loop in the draw function causes flashing colors
draw = function() {
    // Row of circles
    for(var i = 0; i < width; i+=25){
        // Columns and rows of circles to make a square
        for(var j = 0; j < height; j+=25){
            // Random circle sizes
            var size = random(25);
            // Random colors of circles
            fill(random(255),random(0),random(0))
            // Random colors of circle outlines
            stroke(random(0),random(1000),random(255))
            ellipse(i, j, size, size);
    }
}
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
