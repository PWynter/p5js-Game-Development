/*

The Game Project

2 - Game character

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

IMPORTANT: For each box the variables gameChar_x & gameChar_y are set to the bottom
center of the box. You must combine these variables with arithmetic to
determine the position of each shape that you draw. This will later allow
you to adjust the position of your game character.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
/walking left = 2
.//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it lacks detail and you didn't use gameChar_x and gameChar_y correctly
2 marks = you've used a selction of shape functions and made consistent use of gameChar_x and gameChar_y

WARNING: Do not get too carried away. If you're character takes more than 5 lines
of code to draw then you've probably over done it.

** Only submit your sketch.js **

*/

var gameChar_x = 0;
var gameChar_y = 0;

function setup()
{
	createCanvas(400, 600);
}

function draw()
{
	background(255);

	//Standing, facing frontwards

	stroke(100);
	noFill();
	rect(20, 60, 50, 80);
	noStroke();
	fill(0);
	text("1. standing front facing", 20, 160);

	gameChar_x = 45;
	gameChar_y = 137;
	//Add your code here ...
    fill(232, 198, 135);
    var head_pos = 17.5
    var body_x = gameChar_x - head_pos + 2;
    var body_y = gameChar_y - 25;
    rect(gameChar_x - head_pos, gameChar_y - 60, 35,35); // Head
    fill(76, 116, 191);
    rect(body_x + 25, body_y, 10,10); // right arm
    rect(body_x - 4, body_y, 10,10); // Left arm
    fill(207, 50, 29);
    rect(gameChar_x - head_pos + 2, gameChar_y - 25 , 31, 18); // Body
    fill(120, 85, 22);
    rect(gameChar_x - head_pos + 2, gameChar_y -7 , 12, 10); // left leg
    rect(gameChar_x - head_pos + 21, gameChar_y -7 , 12, 10); // right leg    
    
	//Jumping facing forwards
	stroke(100);
	noFill();
	rect(220, 60, 50, 80);
	noStroke();
	fill(0);
	text("2. jumping facing forwards", 220, 160); /* ON JUMP, Body Shrinks a little bit */
    

	gameChar_x = 245;
	gameChar_y = 137;
	//Add your code here ...
    fill(232, 198, 135);
    var head_pos = 17.5
    var body_x = gameChar_x - head_pos + 2;
    var body_y = gameChar_y - 25;
    rect(gameChar_x - head_pos, gameChar_y - 60, 35,35); // Head
    fill(207, 50, 29);
    fill(76, 116, 191);
    rect(body_x + 25, body_y, 10,10); // right arm
    rect(body_x - 4, body_y, 10,10); // Left arm
    fill(207, 50, 29);
    rect(gameChar_x - head_pos + 2, gameChar_y - 25 , 31, 15); // Body
    fill(120, 85, 22);
    rect(gameChar_x - head_pos -1 , gameChar_y -10 , 12, 10); // left leg
    rect(gameChar_x - head_pos + 21 + 3, gameChar_y -10 , 12, 10); // right leg  

	//Walking, turned left
	stroke(100);
	noFill();
	rect(20, 260, 50, 80);
	noStroke();
	fill(0);
	text("3. Walking left", 20, 360);

	gameChar_x = 45;
	gameChar_y = 337;
	//Add your code here ...
    fill(232, 198, 135);
    var head_pos = 17.5
    rect(gameChar_x - head_pos, gameChar_y - 60, 35,35); // Head
    fill(207, 50, 29);
    rect(gameChar_x - head_pos + 2, gameChar_y - 25 , 31, 15); // Body
    var body_x = gameChar_x - head_pos + 2;
    var body_y = gameChar_y - 25;
    fill(76, 116, 191);
    rect(body_x - 4, body_y, 10,10); // Left arm
    fill(207, 50, 29);
    rect(gameChar_x - head_pos + 2, gameChar_y - 25 , 31, 18); // Body
    fill(76, 116, 191);
    rect(body_x + 25, body_y, 10,10); // right arm
    fill(120, 85, 22);
    rect(gameChar_x - head_pos -1 , gameChar_y -7 , 12, 10); // left leg
    rect(gameChar_x - head_pos + 21, gameChar_y -7 , 12, 10); // right leg    
    
	//Walking, turned right
	stroke(100);
	noFill();
	rect(220, 260, 50, 80);
	noStroke();
	fill(0);
	text("4. Walking right", 220, 360);

	gameChar_x = 245;
	gameChar_y = 337;
	//Add your code here ...
    fill(232, 198, 135);
    var head_pos = 17.5
    rect(gameChar_x - head_pos, gameChar_y - 60, 35,35); // Head
    fill(207, 50, 29);
    rect(gameChar_x - head_pos + 2, gameChar_y - 25 , 31, 15); // Body
    var body_x = gameChar_x - head_pos + 2;
    var body_y = gameChar_y - 25;
    fill(76, 116, 191);
    rect(body_x + 25, body_y, 10,10); // right arm
    fill(207, 50, 29);
    rect(gameChar_x - head_pos + 2, gameChar_y - 25 , 31, 18); // Body
    fill(76, 116, 191);
    rect(body_x - 4, body_y, 10,10); // Left arm
    fill(120, 85, 22);
    rect(gameChar_x - head_pos +2 , gameChar_y -7 , 12, 10); // left leg
    rect(gameChar_x - head_pos + 24, gameChar_y -7 , 12, 10); // right leg   

	//Jumping right
	stroke(100);
	noFill();
	rect(20, 460, 50, 80);
	noStroke();
	fill(0);
	text("5. Jumping to the right", 20, 560); /* ON JUMP, Body Shrinks a little bit */

	gameChar_x = 45;
	gameChar_y = 537;
	//Add your code here ...
    fill(232, 198, 135);
    var head_pos = 17.5
    rect(gameChar_x - head_pos, gameChar_y - 60, 35,35); // Head
    fill(207, 50, 29);
    rect(gameChar_x - head_pos + 2, gameChar_y - 25 , 31, 15); // Body
    var body_x = gameChar_x - head_pos + 2;
    var body_y = gameChar_y - 25;
    fill(76, 116, 191);
    rect(body_x + 25, body_y, 10,10); // right arm
    fill(207, 50, 29);
    rect(gameChar_x - head_pos + 2, gameChar_y - 25 , 31, 15); // Body
    fill(76, 116, 191);
    rect(body_x - 4, body_y, 10,10); // Left arm
    fill(120, 85, 22);
    rect(gameChar_x - head_pos + 2 , gameChar_y -10 , 12, 10); // left leg
    rect(gameChar_x - head_pos + 21 + 3, gameChar_y -10 , 12, 10); // right leg  

	//Jumping to the left
	stroke(100);
	noFill();
	rect(220, 460, 50, 80);
	noStroke();
	fill(0);
	text("6. Jumping to the left", 220, 560); /* ON JUMP, Body Shrinks a little bit */
    

	gameChar_x = 245;
	gameChar_y = 537;
	//Add your code here ...
    fill(232, 198, 135);
    var head_pos = 17.5
    rect(gameChar_x - head_pos, gameChar_y - 60, 35,35); // Head
    fill(207, 50, 29);
    rect(gameChar_x - head_pos + 2, gameChar_y - 25 , 31, 15); // Body
    var body_x = gameChar_x - head_pos + 2;
    var body_y = gameChar_y - 25;
    fill(76, 116, 191);
    rect(body_x - 4, body_y, 10,10); // Left arm
    fill(207, 50, 29);
    rect(gameChar_x - head_pos + 2, gameChar_y - 25 , 31, 15); // Body
    fill(76, 116, 191);
    rect(body_x + 25, body_y, 10,10); // right arm
    fill(120, 85, 22);
    rect(gameChar_x - head_pos - 1, gameChar_y -10 , 12, 10); // left leg
    rect(gameChar_x - head_pos + 21 , gameChar_y -10 , 12, 10); // right leg
}
