function Obs()
{
	this.up =  random(height-200);
	this.x = width;

	this.show = function()
	{
		fill(128,0,0);
		rect(this.x, this.up+200 , 30, height);
		rect(this.x, 0 , 30, this.up);	
	}

	this.update = function()
	{
		this.x -= 5
	}
}