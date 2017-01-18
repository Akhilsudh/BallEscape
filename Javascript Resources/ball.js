function Ball()
{
	this.x = 64;
	this.y = height/2;
	
	this.gravity = 0.3 ;
	this.kickForce = -9;
	this.velocity = 0;

	this.show = function() {
		fill(51,255,51);
		ellipse(this.x,this.y,30,30);
	}

	this.update = function() {
		this.velocity += this.gravity;
		this.y += this.velocity;

		if(this.y < 0)
		{
			this.y = 0;
			this.velocity = 0;
		}

		if(this.y > height)
		{
			this.y = height;
			this.velocity = 0;
		}
	}

	this.kick = function()
	{
		this.velocity += this.kickForce;  
	}
}