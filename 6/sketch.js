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

var game_score;
var flagpole;
var lives;
var lifeTokens;

function setup()
{
	createCanvas(1024, 576);
	
	floorPos_y = height * 3/4;
	
	//Initialise lives
	lives = 3;
	
	//Start game
	startGame()	
	
	//Intialise lifetokens
	lifeTokens = [{x_pos: 40, y_pos: 40, isUsed: false},
				  {x_pos:80, y_pos: 40, isUsed: false},
				  {x_pos:120, y_pos: 40, isUsed: false}
				 ];
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
	
	for(var i = 0; i < canyons.length; i++) 
	{
		checkCanyon(canyons[i]);
		drawCanyon(canyons[i]);
	}
	
	//check if player has died
	checkPlayerDie()

	
	// Draw collectable items.
	for (var i = 0; i < collectables.length; i++)
	{
		if(collectables[i].isFound == false)
			{
				checkcollectables(collectables[i]);
				drawcollectables(collectables[i]);
			}	
	}
	
	//flagpole
	renderFlagpole()
	
	//pop function
	pop();
	
	// Draw game character.
	drawGameChar();
	
	fill(255);
	noStroke();
	
	//display score text top left
	text("Score: " + game_score, 20,20) 
	
	//display lives
	text("Lives: " + lives, 20,40)
	
	//Cat lives 
//	for (var i = 0; i < lifeTokens.length; i++)
//		{
//			fill(255,0,0);
//			ellipse(90 + (30*i),35,20,20);
//				
//		}
//	
	
	// screen messages
	if (lives < 1)
	{
		// Game over text
		fill(255);
		textSize(30);
		textAlign(CENTER);
		text("Game over. Press space to continue. ", width / 2, height / 2);
		return;
	}
	if (flagpole.isReached)
	{
		// Level complete text
		fill(255);
		textSize(30);
		textAlign(CENTER);
		text("Level complete. Press space to continue. ", width / 2, height / 2);
		return;
	}
	

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
	
	if(flagpole.isReached == false)
	{
		checkFlagpole();
	}
	
	if(isPlummeting)
	{
		gameChar_y += 2 ;
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
	
//	  if(dist(gameChar_world_x, gameChar_y, t_canyon.x_pos,t_canyon.y_pos) < 10)
//        if(gameChar_y == floorPos_y)
//        {
//            isPlummeting = true;
//        }
	
	if (gameChar_world_x < t_canyon.x_pos + t_canyon.width && gameChar_world_x > t_canyon.x_pos)
        {
         if (gameChar_y >= floorPos_y)   
        	{
				isPlummeting = true
        	}
        
        }
	
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
		game_score += 1;
	}
	

}

function renderFlagpole()
{
	push();
	strokeWeight(5);
	stroke(100);
	line(flagpole.x_pos, floorPos_y, flagpole.x_pos, floorPos_y - 250);
	fill(255, 0, 255);
	noStroke();
	
	if(flagpole.isReached == true)
	{
		rect(flagpole.x_pos, floorPos_y - 250, 50, 50);
	}
	else
	{
		rect(flagpole.x_pos, floorPos_y - 50, 50, 50);
	}
	
	
	pop();
}


function livesIndication()
{
	for(var i = 0; i < lifeTokens.length; i++)
		{
		push();
		fill(160, 110, 55);
		strokeWeight(20);
		stroke(0);
		ellipse(lifeTokens[i].x_pos,lifeTokens[i].y_pos[i], 100, 100);
		noStroke();
		pop();
		}
	
}

function checkFlagpole()
{
	var d = abs(gameChar_world_x - flagpole.x_pos); //distance of character to flagpole. abs keeps the number positive
	
	if(d < 20)
	{
		flagpole.isReached = true;
	}
	
	console.log("character from flagpole distance: " + d)
}

function checkPlayerDie()
{
	
	 {
	  if (gameChar_y > height)
	  {
		  lives--; //decrease life by 1
		  if (lives > 0)
		  {
			lifeTokens[lives].isUsed = true;
			startGame();
		  }
		  else if (lives == 0)
		  {
			lifeTokens[lives].isUsed = true;
		  }
	  }
  }

	
}

function startGame()
{
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
	
		canyons = [{x_pos: 45, y_pos: floorPos_y, width: 100},
				 {x_pos: 600,y_pos: floorPos_y,width: 100}];
	
		game_score = 0;
	
		flagpole = {isReached: false, x_pos:1750};
	
}