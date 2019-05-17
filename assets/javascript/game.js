$(function() {

    // Selects a random number between 19 - 120 to be shown at the start of the game.
    var randomMatch = Math.floor(Math.random() * (120-19+1) +19);
    $('#randomNumber').text(randomMatch);

    //Selects a random number between 1-12 for each crystal.
    var randomOne = Math.floor(Math.random() * 12) + 1;
    var randomTwo = Math.floor(Math.random() * 12) + 1;
    var randomThree = Math.floor(Math.random() * 12) + 1;
    var randomFour = Math.floor(Math.random() * 12) + 1;

    //Starts game with blank slate.
    var playerTotal = 0;
    var wins = 0;
    var losses = 0;

    //Sets up placeholders for scores.
    $('#playerWins').text(wins);
    $('#playerLosses').text(losses);


    //Reset
    //When the game begins again, the player should see a new random number.
    //The crystals will have four new hidden values.
    //The user's score (and score counter) will reset to zero.
    function reset() {
        randomMatch = Math.floor(Math.random() * 120) + 1;
        $('#randomNumber').text(randomMatch);
        randomOne = Math.floor(Math.random() * 12) + 1;
        randomTwo = Math.floor(Math.random() * 12) + 1;
        randomThree = Math.floor(Math.random() * 12) + 1;
        randomFour = Math.floor(Math.random() * 12) + 1;
        playerTotal = 0;
        $('#finalTotal').text(playerTotal);
    }

    //Adds the wins to the player's scores and calls reset
    function youWon() {
        $('#status').text("You Won!");
        wins++;
        $('#playerWins').text(wins);
        reset();
    }
    //Adds the losses to the player's scores and calls reset
    function youLost() {
        $('#status').text("Better Luck Next Time");
        losses++;
        $('#playerLosses').text(losses);
        reset();
    }

    //Basic Game set-up click for crystals
    $('#img1').on('click', function() {
        playerTotal = playerTotal + randomOne;
        $('#finalTotal').text(playerTotal);
    //sets win/lose conditions
        if (playerTotal === randomMatch) {
            youWon();
        } else if (playerTotal > randomMatch) {
            youLost();
        }
    });

    $('#img2').on('click', function() {
        playerTotal = playerTotal + randomTwo;
        $('#finalTotal').text(playerTotal);
        if (playerTotal === randomMatch) {
            youWon();
        } else if (playerTotal > randomMatch) {
            youLost();
        }
    });

    $('#img3').on('click', function() {
        playerTotal = playerTotal + randomThree;
        $('#finalTotal').text(playerTotal);
        if (playerTotal === randomMatch) {
            youWon();
        } else if (playerTotal > randomMatch) {
            youLost();
        }
    });

    $('#img4').on('click', function() {
        playerTotal = playerTotal + randomFour;
        $('#finalTotal').text(playerTotal);
        if (playerTotal === randomMatch) {
            youWon();
        } else if (playerTotal > randomMatch) {
            youLost();
        }
    });
});


