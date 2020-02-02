/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isPlummeting;
var isFalling;
var collectable;
var canyon;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
	
	isLeft = false;
	isRight = false;
	isPlummeting = false;
	isFalling = false;
	
	collectable = {x_pos: 250, y_pos: 380, size: 50, isFound: false};
	
	canyon = {x_pos: 90,width: 100};
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
	
	// Collectable item
	if(dist(gameChar_x, gameChar_y -30 , collectable.x_pos, collectable.y_pos) < 30)
	{
		collectable.isFound = true;
		console.log("is true statement", gameChar_x)
	}
	if(collectable.isFound == false)
	{
		stroke(255, 255, 0); 
		strokeWeight(collectable.size)
		point(collectable.x_pos, collectable.y_pos);
		strokeWeight();
	}
    
	


	//draw the canyon
fill(184, 134, 11);
	rect(canyon.x_pos,432,canyon.width,150);

	noStroke();
	fill(255);

	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
		fill(100,100,100)
		triangle(gameChar_x,
			 gameChar_y - 65,
			 gameChar_x - 15,
			 gameChar_y -43,
			 gameChar_x + 15,
			 gameChar_y -43);
	
		//body
		fill(128, 255, 0);
		rect(gameChar_x - 15, 
		gameChar_y - 43, 
		 30,30,5);
	
		// ball legs 
		fill(255,10, 10);
		ellipse(gameChar_x - 13,
			gameChar_y - 15, 
			20, 20);

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
		fill(100,100,100)
		triangle(gameChar_x,
			 gameChar_y - 65,
			 gameChar_x - 15,
			 gameChar_y -43,
			 gameChar_x + 15,
			 gameChar_y -43);
	
		//body
		fill(128, 255, 0);
		rect(gameChar_x - 15, 
		 	gameChar_y - 43, 
		 		30,30,5);
	
		// ball legs 
		fill(255,10, 10);
		ellipse(gameChar_x + 13,
				gameChar_y - 15, 
				20, 20);

	}
	else if(isLeft)
	{
		// add your walking left code
		fill(100,100,100)
		triangle(gameChar_x,
			 	gameChar_y - 65,
			 	gameChar_x - 15,
			 	gameChar_y -43,
			 	gameChar_x + 15,
			 	gameChar_y -43);
	
		//body
		fill(128, 255, 0);
		rect(gameChar_x - 15,
		gameChar_y - 43, 
		 30,30,5);
	
		// ball legs 
		fill(255,10, 10);
		ellipse(gameChar_x -13,
		gameChar_y - 5, 
			20, 20);

	}
	else if(isRight)
	{
		// add your walking right code
		fill(100,100,100)
			triangle(gameChar_x,
			 gameChar_y - 65,
			 gameChar_x - 15,
			 gameChar_y -43,
			 gameChar_x + 15,
			 gameChar_y -43);
	
		//body
		fill(128, 255, 0);
		rect(gameChar_x - 15,
		 gameChar_y - 43, 
		 30,30,5);
	
		// ball legs 
		fill(255,10, 10);
		ellipse(gameChar_x +
				13,
				gameChar_y - 5, 
				20, 20);

	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
		fill(100,100,100)
		triangle(gameChar_x,
			 gameChar_y - 65,
			 gameChar_x - 15,
			 gameChar_y -43,
			 gameChar_x + 15,
			 gameChar_y -43);
	
		//body
		fill(128, 255, 0);
		rect(gameChar_x - 15, 
		 gameChar_y - 43, 
		 30,30,5);
	
		// ball legs 
		fill(255,10, 10);
		ellipse(gameChar_x,
			gameChar_y - 15, 
			20, 20);

	}
	else
	{
		// add your standing front facing code
		fill(100,100,100)
		triangle(gameChar_x,
			 gameChar_y - 65,
			 gameChar_x - 15,
			 gameChar_y -43,
			 gameChar_x + 15,
			 gameChar_y -43);
	
	//body
	fill(128, 255, 0);
	rect(gameChar_x - 15,
		 gameChar_y - 43, 
		 30,30,5);
	
	// ball legs 
	fill(255,10, 10);
	ellipse(gameChar_x,
			gameChar_y - 5, 
			20, 20);
	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
	
	if(isLeft == true)
	{
		gameChar_x -= 4;
	}
	
	if(isRight == true)
	{
		gameChar_x += 4;
	}
	
	if(gameChar_y < floorPos_y)
	{
		gameChar_y += 2 ;
		isFalling = true; 
	}
	else
	{
		isFalling = false;
 	}
	
	//falling down canyon
	if(gameChar_x >= canyon.x_pos && gameChar_x <= canyon.x_pos + 100 && gameChar_y >= 432)
	{
		gameChar_y += 5
		gameChar_x = canyon.width + 50;
		
	}
	
//	if(gameChar_y > floorPos_y)
//	{
//		gameChar_x = 140
//		isPlummeting = true;
//	}
//	
}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
	

	if(keyCode == 37)
	{
		console.log("left arrow pressed")
		isLeft = true;
	}
	
	else if(keyCode == 39)
	{
		console.log("right arrow pressed")
		isRight = true;
	}
	

	
	if( keyCode == 32 && gameChar_y == floorPos_y )
	{
		console.log("spacebar pressed")
		gameChar_y -= 100;
	}
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
	
	if(keyCode == 37)
	{
		console.log("left arrow released")
		isLeft = false;
	}
	
	else if(keyCode == 39)
	{
		console.log("right arrow released")
		isRight = false;
	}
}
