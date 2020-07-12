var ball, trampoline;

var brickWidth =30;  
var brickHeight = 10;
var offset = 10;
var colors = ["red", "green","yellow"];
var bricks = [];




function setup(){
    createCanvas(400,400);
    ball= createSprite(200,390,10,10);
    ball.shapeColor = "blue";
    ball.setVelocity(5,5);
    trampoline= createSprite(200,400,60,20);
    trampoline.shapeColor = "black";
    function createBrick(){
        var sprite = createSprite(i* brickWidth + i* offset, n * brickHeight + n* offset, brickWidth,brickHeight);
        sprite.shapeColor=colors[Math.floor(Math.random()*colors.length)];
        return sprite; 
    }
    for(var i = 0; i <10; i++){
        for(var n = 0; n<10; n++){
            bricks.push(createBrick());
        }
    }
}

function draw(){
    background(200);
    moveBall();
    trampoline.x= mouseX;
    
    // if(keyDown("space")){
    //     ball.velocityX = 2;
    //     ball.velocityY = 3; 
    // }

    drawSprites();
};
//create obstacles

function moveBall(){
   drawSprites();
   if(ball.x < 0 || ball.x > 400 ){
       ball.velocityX = -1* ball.velocityX;
   }
   if(ball.y < 0){
       console.log ("y < 0");
       ball.velocityY *= -1;
   }
    
    for (var i = 0; i < bricks.length; i++ ){
        var brick = bricks[i];
        if(ball.y> brick.y && ball.y < brick.y + brick.height && ball.x> brick.x && ball.x< brick.x + brick.width){
            brick.destroy();
            bricks.slice(bricks.indexOf(brick),1);
            ball.velocityY *= -1
            break;
        }
    } 
    if(ball.isTouching(trampoline)){
        ball.velocityY *= -1;
    }
};


