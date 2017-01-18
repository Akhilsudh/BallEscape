function Obs()
{
	this.up =  random(height-200);
	this.x = width;
	this.velocity = 5

	this.show = function()
	{
		fill(150,22,11);
		rect(this.x, this.up+200 , 30, height);
		rect(this.x, 0 , 30, this.up);	
	}

	this.update = function()
	{
		this.x -= this.velocity
	}

	this.collides = function(ball)
	{
			if((ball.y+15 < this.up || ball.y-15 < this.up || ball.y +15 > this.up+200 || ball.y - 15 > this.up+200) && (ball.x > this.x || ball.x+15 > this.x || ball.x-15 > this.x) && (ball.x < this.x+30 || ball.x+15 < this.x+30 || ball.x-15 < this.x+30))
			{	
				return true;
			}		
		return false;
	}

	this.stop = function()
	{
		this.velocity=0;
	}
}