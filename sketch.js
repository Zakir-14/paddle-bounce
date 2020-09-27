var gameState = "serve";
var score;
var ball_img,img,paddle_img;
function preload() {
   ball_img = loadImage("ball.png");
  paddle_img = loadImage("paddle.png");
  score = 0;
}
function setup() {
  createCanvas(400, 400);
  
  ball = createSprite(200,200);
  ball.addAnimation("ball1" , ball_img);
  ball.scale = 0.8;
  
  paddle = createSprite(390,200);
  paddle.addAnimation("paddle1" , paddle_img);
  paddle.scale = 0.9;
  
  
  
    //ball.velocityX = 9;
  
 
    
 

}

function draw() {
  background(205,153,0);
  edges = createEdgeSprites();
  
 ball.bounceOff(paddle,randomVelocity);
 ball.bounceOff(edges[2]);
 ball.bounceOff(edges[0]);
 ball.bounceOff(edges[3]);

  paddle.collide(edges);
  
  if(gameState === "serve"){
    fill("black");
    textSize(20);
    textStyle(BOLD);
    textFont("georgia")
   text("PRESS ' r ' TO PLAY" , 70 ,100);
    if(keyDown("r") && gameState == "serve"){
      secore = 0;
    //ball.velocityY = 0;
    ball.velocityX = -9;
      
      gameState = "play"; 
      }
  }else if(gameState === "play"){
   if(ball.isTouching(paddle)){
     score = score + 1;
     
   }
    if(ball.x > 400 ){
     
    ball.x = 200;
     ball.y = 200;
     ball.velocityX = 0;
     ball.velocityY = 0;
     gameState = "end";
   }
    
  if(keyDown(UP_ARROW))
  {
   paddle.y = paddle.y - 20 
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y = paddle.y + 20
  }
  
  }else if(gameState === "end"){
    textSize(20);
    fill("black")
    textStyle(BOLD);
   text("Oops!" , 170,100);
   text("PRESS ' p ' TO RESTART" , 60,300);
    if(keyDown("p")){
      gameState = "serve"; 
      }
  }
 
 

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  drawSprites();
  fill("blue")
    textStyle(BOLD)
  textSize(20);
   text("SCORE : " + score, 60,50);
}

function randomVelocity(){
  ball.velocityY = random(-10,+10);
}


