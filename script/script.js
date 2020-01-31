document.querySelector("#start-button").addEventListener("click", () => {
    gameObject.playGame();
});


gameObject = {
    buildImagePathArray: function() {
        let diceImages = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
        return diceImages;
    },

    getRandomNumber: function() {
        let ranNumb = Math.floor(Math.random() * 6);
        return ranNumb;
    },

    playGame: function() {
        let diceImagePathArray = gameObject.buildImagePathArray();
        let randomNumber1 = this.getRandomNumber();
        let randomNumber2 = this.getRandomNumber();

        document.querySelector("#dice-image1").src = diceImagePathArray[randomNumber1];
        document.querySelector("#dice-image2").src = diceImagePathArray[randomNumber2];

        var gameResult = 0;

        if (randomNumber1 > randomNumber2) {
            gameResult = 1;

        } 

        else if (randomNumber1 < randomNumber2) {
            gameResult = 2;
        }

        this.changeResultHeading(gameResult);

    }, // end of playgame function

    changeResultHeading: function(gameResult) {

    	let resultHeading = document.querySelector("#resultHeading");

    	let text = "Player " + gameResult + " has won!"

    	if (gameResult == 0) {
    		text = "It`s a draw"
    	}

    	resultHeading.innerHTML = text;

    }








}