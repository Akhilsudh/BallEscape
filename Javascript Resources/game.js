var ball;
var obstacles = [];
var hitCount;
function setup()
{
	createCanvas(400,600);
	ball = new Ball();
	obstacles.push(new Obs());
	hitFlag = 0;
}

function draw()
{
	background(135,206,250);


	ball.update();
	ball.show();

	for(var i=0; i<obstacles.length; i++)
	{
		obstacles[i].show();
		obstacles[i].update();
		if(obstacles[i].collides(ball))
		{
			hitFlag = 1;
			for(var j=0; j<obstacles.length; j++)	
			{	
				obstacles[j].stop();
			}
			fill(153,76,0);
			rect(100,250,200,100,20);
			fill(255);
			textSize(20);
			text("GAME OVER!!!", 130, 305);
		}
	}
	
	if(frameCount % 60 == 0 && !hitFlag)
	{
		if(obstacles.length==3)
		{
			obstacles.shift();
		}
		obstacles.push(new Obs());
	}
}

function keyTyped()
{

	if(key === ' ' && !hitFlag)
	{
		ball.kick();
	}
	
	if(key === 'i')
	{
		console.log(obstacles.length);
	}
}