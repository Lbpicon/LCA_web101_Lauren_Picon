var gameMarker = "X";

function changeMarkerToX(){
    gameMarker = "X"
    console.log("The X button was clicked!");
    }

function changeMarkerToO(){
    gameMarker = "O"
        console.log("The 0 button was clicked!");
    }

function placeMark(divId) {
    var box = document.getElementById(divId);
    box.innerHTML = gameMarker;

}



// Decide who makes the first move. We can assume Player X always makes the first move








// 2. Player clicks a spot on the board, mark the board if it is unoccupied, else give an error message




//3. Check if the game is finished after marking the board
// If the game is finished, then outputs a message indicating the winner
// if the game is not finished, then it is the other player's turn to make a move
// Step 3 is repeated until the game is finished or it is a draw





// 4. Prompt players to decide if they want to play a new game
// If yes, go back to step 1

