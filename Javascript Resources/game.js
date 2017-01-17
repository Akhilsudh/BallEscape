var ball;
var obstacles = [];
function setup()
{
	createCanvas(400,600);
	ball = new Ball();
	obstacles.push(new Obs());
}

function draw()
{
	background(67,37,3);
	ball.update();
	ball.show();

	for(var i=0; i<obstacles.length; i++)
	{
		obstacles[i].show();
		obstacles[i].update();
	}
	if(frameCount % 60 == 0)
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

	if(key === ' ')
	{
		ball.kick();
	}
	
	if(key === 'i')
	{
		console.log(obstacles.length);
	}
}