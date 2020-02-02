/*

The Game Project 5 - Bring it all together

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

var trees_x;
var collectables;
var cloud;
var mountain;
var canyon;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y
	treePos_y = height/2; //tree position y

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

	// Initialise arrays of scenery objects.
	
		trees_x = [-500,-100, 150, 450, 700, 950,1550,1950];
		
		collectables = [{x_pos: 350, y_pos: 400, isFound:false},
					   {x_pos: 300, y_pos: 400, isFound:false}];
	
		cloud = [{x_pos: 300, y_pos: 100},			  
			 {x_pos: 600, y_pos: 100}, 
			 {x_pos: 750, y_pos: 100},
			 {x_pos: 1800, y_pos: 150}];
	
		mountain =[{x_pos: 800, y_pos:160},
			  {x_pos: 1200, y_pos:160},
			  {x_pos: 1400, y_pos:160}];
	
		canyons = [{x_pos: 45,width: 100},
				 {x_pos: 600,width: 100}];
}

function draw()
{
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height/4); // draw some green ground
	
	push();
	translate(scrollPos,0);

	// Draw clouds.
	drawClouds();

	// Draw mountains.
	drawMountains();

	// Draw trees.
	drawTrees();

	// Draw canyons.
	
		if(gameChar_y < floorPos_y)
	{
		gameChar_y += 2 ;
		isFalling = true; 
	}
	
	for(var i = 0; i < canyons.length; i++) {
		checkCanyon(canyons[i]);
		drawCanyon(canyons[i]);
	}

	
	// Draw collectable items.
	
	for (var i = 0; i < collectables.length; i++)
		{
			if(collectables[i].isFound == false)
				{
					checkcollectables(collectables[i]);
					drawcollectables(collectables[i]);
				}	
		}
	

	
	//pop function
	pop();
	
	// Draw game character.
	
	drawGameChar();

	// Logic to make the game character move or the background scroll.
	if(isLeft)
	{
		if(gameChar_x > width * 0.2)
			{
				gameChar_x -= 5;
			}
		
		else
			{
				scrollPos += 5;
			}
	}

	if(isRight)
	{
				if(gameChar_x < width * 0.8)
			{
				gameChar_x  += 5;
			}
			
			else
			{
				scrollPos -= 5; // negative for moving against the background
			}
	}

	// Logic to make the game character rise and fall.
	
	if(gameChar_y != floorPos_y)
	{
		gameChar_y += 2 ;
		isFalling = true; 
	}
	else
	{
		isFalling = false;
 	}

	// Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;
}


// ---------------------
// Key control functions
// ---------------------

function keyPressed(){

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


// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar()
{
	// draw game character
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




	}

// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.
function drawClouds()
{
	for(var i = 0; i < cloud.length; i++)
		{
			fill(255,255,255);
			ellipse(cloud[i].x_pos, cloud[i].y_pos, 80, 80)
			ellipse(cloud[i].x_pos - 40, cloud[i].y_pos, 60, 60)
			ellipse(cloud[i].x_pos + 40, cloud[i].y_pos,60,60);
		}
}

// Function to draw mountains objects.
function drawMountains()
{
	for(var i = 0; i < mountain.length; i++)
		{
			fill(128,128,128,100);
			triangle(mountain[i].x_pos - 75,
				 mountain[i].y_pos +272,
				 mountain[i].x_pos,
				 mountain[i].y_pos,
				 mountain[i].x_pos + 75,
				 mountain[i].y_pos + 272);
		}
}

// Function to draw trees objects.
function drawTrees()
{
	for(var i = 0; i < trees_x.length; i++)
		{	//tunk
			fill(120,100,40);
			rect(trees_x[i],
				 treePos_y,60,150);
			//branches
			fill(0,155,0);
			triangle(trees_x[i] - 50,
					 treePos_y,trees_x[i] + 30,
					 treePos_y - 100,trees_x[i] + 110,treePos_y);
			triangle(trees_x[i] - 50,
					 treePos_y + 50,trees_x[i]+ 30,treePos_y - 50,trees_x[i] + 110,treePos_y + 50);
		}
}

// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon)
{
	for(var i = 0; i < canyons.length; i++)
	{
		fill(184, 134, 11);
		rect(t_canyon.x_pos,432,t_canyon.width,150);
		noStroke();
		fill(255);
	}
}

// Function to check character is over a canyon.

function checkCanyon(t_canyon)

{
	
	  if(dist(gameChar_world_x, gameChar_y, (t_canyon.x_pos + 60), floorPos_y) < 35)
        if(gameChar_y == floorPos_y)
        {
            isPlummeting = true;
        }
	
//	if(gameChar_world_x >= t_canyon.posX && gameChar_world_x <= t_canyon.posX + 100 && gameChar_y >= 432)
//	{
//		gameChar_y += 5
//	}
//	
//	if(gameChar_y > floorPos_y)
//	{
//		gameChar_world_x = 140
//		isPlummeting = true;
//	}
}

// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawcollectables(t_collectable)
{
	for(var i = 0; i < collectables.length; i++)
		{
			stroke(255, 255, 0); 
			strokeWeight(25)
			point(t_collectable.x_pos, t_collectable.y_pos);
			stroke(255, 255, 0);
			strokeWeight();	
		}
}

// Function to check character has collected an item.

function checkcollectables(t_collectable)
{
	if(dist(gameChar_world_x, gameChar_y -30 , t_collectable.x_pos, t_collectable.y_pos) < 30)
	{
		t_collectable.isFound = true;
		console.log("is true statement", gameChar_world_x)
	}
	

}
