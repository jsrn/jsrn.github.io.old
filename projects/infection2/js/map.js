function Map( width, height )
{
	self = this;
	this.width = width;
	this.height = height;
	this.people = [];
	this.canvas = document.getElementById( "field-of-the-dead" );

	if( !this.canvas.getContext )
	{
		document.write(
			"Your browser does not support canvas. Please join us in 2014!"
			);
	}

	this.randomisePopulation = function( count )
	{
		for( var i = 0; i < count; i++ )
		{
			var x = Math.floor((Math.random()* self.width ));
			var y = Math.floor((Math.random()* self.height ));
			self.people.push( new Person( x, y ) );
		}
	}

	this.dumpPeopleList = function()
	{
		for( var i = 0; i < self.people.length; i++ )
		{
			var person = self.people[i];
			console.log( "Person:" );
			console.log( "  x: " + person.x + " y: " + person.y );
			console.log( "  Status: " + person.getStatusText()  );
		}	
	}

	this.travelPeople = function()
	{
		for(var i = 0; i < self.people.length; i++){
			var person = self.people[i];
			person.travel();
		}
	}

	this.draw = function()
	{
		var ctx = self.canvas.getContext('2d');

		ctx.beginPath();
		ctx.fillStyle = 'white';
		ctx.rect(0,0,700,500);
		ctx.fill();

		for(var i = 0; i < self.people.length; i++){
			var person = self.people[i];

			ctx.beginPath();
			ctx.arc(person.x, person.y, 3, 0, 2 * Math.PI, false);
			ctx.fillStyle = person.getStatusColour();
			ctx.fill();
			ctx.lineWidth = 1;
			ctx.strokeStyle = '#000';
			ctx.stroke();
		}
	}

	this.update = function()
	{
		self.travelPeople();
		self.draw();
	}

	this.run = function()
	{
		setInterval( self.update, 50 );
	}
}