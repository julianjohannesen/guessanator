/** @format */

(function () {
	const letsPlay = document.getElementById("letsPlay");
	const game = document.getElementById("game");
	const formWrapper = document.getElementById("formWrapper");
	const guessText = document.getElementById("guessText");
	const gotIt = document.getElementById("gotIt");
	const count = document.getElementById("count");

	let low = 1;
	let high = 1000;
	let theGuess = 500;
	let counter = 1;

	// The process is guess, then check. If guess is too high, guess again with a lower number. If the guess is too low, guess again with a higher number. If the guess is correct, the game is over.
	const checkGuess = (higherLower) => {
		haveYourNumber.style.display = "none";

		// Is the guess too high or too low? Reset the high or low value to the current guess.
		if (higherLower === "higher") {
			low = theGuess;
		} else if (higherLower === "lower") {
			high = theGuess;
		} else {
			formWrapper.style.display = "none";
			gotIt.style.display = "block";
			count.textContent = counter;
			counter = 0;
		}
		counter++;
		theGuess = Math.floor((low + high) / 2);
		return theGuess;
	};

	const getNthGuess = (counter) => {
		let guess = "";
		if (counter < 4) {
			switch (counter) {
				case 1:
					guess = "first";
					break;
				case 2:
					guess = "second";
					break;
				case 3:
					guess = "third";
					break;
			}
		} else if (counter < 21) {
			guess = counter + "th";
		} else {
			switch (counter) {
				case counter % 10 === 1:
					guess = counter + "st";
					break;
				case counter % 10 === 2:
					guess = counter + "nd";
					break;
				case counter % 10 === 3:
					guess = counter + "rd";
					break;
			}
		}
		return guess;
	};

	if (counter > 1) haveYourNumber.style.display = "none";

	letsPlay.addEventListener("click", () => {
		if (typeof game.showModal === "function") {
			game.showModal();
		} else {
			alert("The dialog API is not supported by this browser");
		}
	});
	game.addEventListener("close", (e) => {
		checkGuess(game.returnValue);
		game.showModal();
		guessText.innerHTML = `My ${
			counter < 2 ? "first" : getNthGuess(counter)
		} guess is ${theGuess
			.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.<br/>`;
	});
})();
