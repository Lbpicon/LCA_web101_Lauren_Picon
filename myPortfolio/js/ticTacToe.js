var gameMarker = "x"
function changeMarkerToX()
{
    var gameMarker = "x"
    var gameMarker = "o"
    console.log("The x button was clicked!")
}

function changeMarkerToO()
{
    var gameMarker = "x"
    var gameMarker = "o"
    console.log("The O button was clicked!")
}


// 1. Set up game board
// Clear all Xs and Os from the board
clearBoard() {

}

for ( var i=1; i<10; i++) {
 var box = document.getElementById(i);
 box.innerHTML="";

}

var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');

// Decide who makes the first move. We can assume Player X always makes the first move








// 2. Player clicks a spot on the board, mark the board if it is unoccupied, else give an error message




//3. Check if the game is finished after marking the board
// If the game is finished, then outputs a message indicating the winner
// if the game is not finished, then it is the other player's turn to make a move
// Step 3 is repeated until the game is finished or it is a draw





// 4. Prompt players to decide if they want to play a new game
// If yes, go back to step 1

