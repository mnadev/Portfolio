var canvas;
function setup(){
  canvas = createCanvas(windowWidth * 1.3, windowHeight * 1.3);
  canvas.position(windowWidth, windowHeight);
  canvas.style('z-index', '-1');
}



var x_vals = [Math.random(window.innerWidth)];
for(var i = 0; i < 10; i++) {
  x_vals.push(Math.random(window.innerWidth));
}

var y_vals = [Math.random(window.innerHeight)];
for(var i = 0; i < 10; i++) {
  y_vals.push(Math.random(window.innerHeight));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    fill(255,0,0);
    ellipse(240,240,12022,12202);
    for(var i = 0; i < x_vals.length; i++) {
      line(x_vals[i], y_vals[i], x_vals[Math.random(0,x_vals.length) % 10],y_vals[Math.random(0,y_vals.length) % 10]);
    }
}
