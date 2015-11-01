var wordBank = ['apple', 'orange', 'banana', 'giraffe', 'colin', 'cherry', 'combo', 'reggae'];
var answer = wordBank[Math.floor(Math.random() * wordBank.length)].toUpperCase();
var canvas = document.getElementById('canvas');
canvas.setAttribute('width', '400');
canvas.setAttribute('height', '400');
var ctx = canvas.getContext('2d');

for (i = 0; i < answer.length; i++) {
	$('#puzzleAnswer').append('<span id="' + i + '">_</span>');
}

function drawCanvas(startx, starty, endx, endy) {
	ctx.beginPath()
	ctx.strokeStyle = 'black';
	ctx.moveTo(startx, starty);
	ctx.lineTo(endx, endy);
	ctx.stroke();
}

initializeCanvas = [drawCanvas(0, 375, 400, 375), drawCanvas(25,375,25,15), drawCanvas(25,15,200,15), drawCanvas(200,15,200,25)];


function AnimateDude(bodyPart, startx, starty, endx, endy) {
	this.bodyPart = bodyPart;
	this.startx = startx;
	this.starty = starty;
	this.endx = endx;
	this.endy = endy;
}
		
drawHead = function() {
	ctx.beginPath();
	ctx.arc(200, 60, 35, 0, 2 * Math.PI);
	ctx.stroke();
};
var drawTorso = new AnimateDude("Torso", 200, 95, 200, 220);
var drawLeftLeg = new AnimateDude("Left Leg", 200, 220, 125, 290);
var drawRightLeg = new AnimateDude("Right Leg", 200, 220, 275, 290);
var drawLeftArm = new AnimateDude("Left Arm", 200, 145, 120, 120);
var drawRightArm = new AnimateDude("Right Arm", 200, 145, 280, 120);


//When .letters are clicked, 
$('.letters').click(function() {
	var guess = $(this).text();
	$(this).fadeOut('slow');
	if (answer.indexOf(guess) >= 0) {
		var puzzleAnswer = $('#puzzleAnswer').text();
		var guessIndex = answer.indexOf(guess);
		var newString = puzzleAnswer.substr(0, guessIndex) + guess + puzzleAnswer.substr(guessIndex+1); 
		$('#puzzleAnswer').text(newString);
	} else {
		$('#usedLetters').append('<li>' + guess + '</li>').hide().fadeIn('slow');
	}
});