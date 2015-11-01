var wordBank = ['apple', 'orange', 'banana', 'giraffe', 'colin', 'cherry', 'combo', 'reggae'];
var answer = wordBank[Math.floor(Math.random()*wordBank.length)].toUpperCase();

for (var i = 0; i < answer.length; i++) {
	$('#puzzleAnswer').append('<span id="' + i +'">_</span>');
}

//When letters are clicked, replace underscore. indexOf letter within answer, use index to replace underscore with correctly guessed letter

//When .letters are clicked, 
$('.letters').click(function() {
	var guess = $(this).text();
	$(this).fadeOut('slow');
	if (answer.indexOf(guess) >= 0 ) {
		var puzzleAnswer = $('#puzzleAnswer').text();
		var guessIndex = answer.indexOf(guess);
		var newString = puzzleAnswer.substr(0, guessIndex) + guess + puzzleAnswer.substr(guessIndex+1); 
		$('#puzzleAnswer').text(newString);
	} else {
		$('#usedLetters').append('<li>' + guess + '</li>').hide().fadeIn('slow');
		}
});