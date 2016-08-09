/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-05 16:51:49
 * @version $Id$
 */

function SpaceShip() {
	this.x = 0;
	this.y = 0;
	this.width = 25;
	this.hegiht = 25;
	this.rotation = 0;
	this.showFlame = false;
}

SpaceShip.prototype.draw = function(context) {
	context.save();
	context.beginPath();
	context.translate(this.x,this.y);
	context.rotate(this.rotation);
	context.strokeStyle = "#fff";
	context.moveTo(10,0);
	context.lineTo(-10,10);
	context.lineTo(-5,0);
	context.lineTo(-10,-10);
	context.lineTo(10,0);
	context.closePath();
	context.stroke();
	if(this.showFlame == true){
		context.save();
		context.beginPath();
		context.strokeStyle = "#f69";
		context.moveTo(-7.5,-5);
		context.lineTo(-15,0);
		context.lineTo(-7.5,5);
		context.stroke();
		context.restore();
	}
	context.restore();
}