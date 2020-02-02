/*

The Game Project 4 - Side scrolling

Week 6

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var scrollPos;

var cloud;
var mountain;
var trees_x;
var treePos_y;
var canyon;
var collectable;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
	treePos_y = height/2;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Initialise arrays of scenery objects.
	
	trees_x = [150, 450, 600, 950,1550,1950];
	cloud = [{x_pos: 300, y_pos: 100},			  
			 {x_pos: 600, y_pos: 100}, 
			 {x_pos: 750, y_pos: 100},
			 {x_pos: 1800, y_pos: 150}];
	mountain =[{x_pos: 800, y_pos:160},
			  {x_pos: 1200, y_pos:160},
			  {x_pos: 1400, y_pos:160}];
	canyon = [{x_pos: 45,width: 100}];
	collectable = [{x_pos: 350, y_pos: 400}];
	
}

function draw()
{
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height/4); // draw some green ground

	push();
	translate(scrollPos,0);
	
	// Draw clouds.
	for(var i = 0; i < cloud.length; i++)
	{
		fill(255,255,255);
		ellipse(cloud[i].x_pos, cloud[i].y_pos, 80, 80)
		ellipse(cloud[i].x_pos - 40, cloud[i].y_pos, 60, 60)
		ellipse(cloud[i].x_pos + 40, cloud[i].y_pos,60,60);
	
	}
		
	// Draw mountains. 
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

	 //Draw trees.
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
	
	
	  
	

	// Draw canyons
	for(var i = 0; i < canyon.length; i++)
	{
		fill(184, 134, 11);
		rect(canyon[i].x_pos,432,canyon[i].width,150);
		noStroke();
		fill(255);
	}
		
	// Draw collectable items
	for(var i = 0; i < collectable.length; i++)
	{
		stroke(255, 255, 0); 
		strokeWeight(25)
		point(collectable[i].x_pos, collectable[i].y_pos);
		stroke(255, 255, 0);
		strokeWeight();	
	}


	pop();
	
	
	
	// Draw the game character - this must be last
	
	// front facing character 
	//head
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
	
	

	//////// Game character logic ///////
	// Logic to move

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
}

function keyPressed()
{

	if(key == 'A' || keyCode == 37)
	{
		isLeft = true;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = true;
	}

}

function keyReleased()
{
	if(key == 'A' || keyCode == 37)
	{
		isLeft = false;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = false;
	}
}
