let rez = 20;
let w;
let h;
var snake;
var food;
var snd,fd;
function preload(){
    snd = loadSound("hit sound1.mp3");
    fd = loadSound("hit sound2.mp3");
}
function setup(){
    createCanvas(400,400);
    snake = new Snake();
    frameRate(5);
    pickLocation();
}
function pickLocation() {
    let cols = floor(width / rez);
    let rows = floor(height / rez);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(rez);
  }

function draw(){
    background(100,110,140);
    snake.go();
    snake.death()
    snake.show();
    push();
    fill("red")
    rect(food.x,food.y,rez,rez);
    pop();
   if (snake.eat(food)){
       pickLocation();
       fd.play();
   }
}

function keyPressed(){
    if(keyCode===DOWN_ARROW){
        snake.dir(0,1);
        
    }else if (keyCode===UP_ARROW){
        snake.dir(0,-1);
        
    }else if (keyCode===LEFT_ARROW){
        snake.dir(-1,0);
        
    }else if(keyCode===RIGHT_ARROW){
        snake.dir(1,0);
        
    }
    
}

