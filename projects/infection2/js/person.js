function Person( x, y )
{
	/* CONSTANTS */
	this.HEALTHY = 1;
	this.INCUBATING = 2;
	this.ILL = 3;
	this.RECOVERED = 4;
	this.DEAD = 5;

	this.getRandomStartStatus = function()
	{
		return Math.ceil( Math.random() * 4 );
	};

	this.getStatusText = function()
	{
		switch( this.status )
		{
			case this.HEALTHY:
				return "Healthy";
			case this.INCUBATING:
				return "Infected";
			case this.ILL:
				return "Ill";
			case this.RECOVERED:
				return "Recovered";
			case this.DEAD:
				return "Dead";
		}
	}

	this.getStatusColour = function()
	{
		switch( this.status )
		{
			case this.HEALTHY:
				return "#0D8824";
			case this.INCUBATING:
				return "#75B387";
			case this.ILL:
				return "#D1B85F";
			case this.RECOVERED:
				return "#5FBB21";
			case this.DEAD:
				return "#F05151";
		}	
	}

	this.travel = function()
	{
		this.x += Math.floor(Math.random()*3) - 1;
		this.y += Math.floor(Math.random()*3) - 1;

		if( this.x < 0 ) this.x = 0;
		if( this.y < 0 ) this.y = 0;
		if( this.x > 700 ) this.x = 700;
		if( this.y > 500 ) this.y = 500;
	}

	this.x = x;
	this.y = y;
	this.status = this.getRandomStartStatus();
}