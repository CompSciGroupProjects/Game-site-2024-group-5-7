let board = [    [null, null, null, null, null, null, null ],
    [null, null, null, null, null, null, null ],
    [null, null, null, null, null, null, null ],
    [null, null, null, null, null, null, null ],
    [null, null, null, null, null, null, null ],
    [null, null, null, null, null, null, null ]]
//each array inside is a row with a value to represent empty, and take each player
//for the column that the user presses, check the lowest available row (for-loop)
//TO CHECK FOR WINNER: separate loop check one and check the 3 to the right. another loop to check columns using same algorithm. check diagonals by checking the top left 4x3 box and checking one down and one right.do the same from the right 4x3 section and go left and down one (USE IF STATEMENT TO CHECK BACKGROUND COLOR)
let player = 1
let gameOver = false;
function fill(row, col, playerValue)//takes location and player and puts color down and changes player. PLAYER ONE IS YELLOW PLAYER TWO IS RED
{
    if (playerValue%2 === 0)
        document.getElementById(row + "," + col).style.backgroundColor = "red";
    else
        document.getElementById(row + "," + col).style.backgroundColor = "yellow";
    player++;
}
function clickC1() {
    if(gameOver === false)
    {
        for (let x = 5; x >= 0; x--) {
            if (board[x][0] === null) {
                board[x][0] = player;
                fill(x, 0, player);
                switchPlayer();
                check();
                break;
            }
        }
        switchPlayer();
        check();
    }
}
function clickC2() {
    if(gameOver === false)
    {
        for (let x = 5; x >= 0; x--) {
            if (board[x][1] === null) {
                board[x][1] = player;
                fill(x, 1, player);
                switchPlayer();
                check();
                break;
            }
        }
        switchPlayer();
        check();
    }
}
function clickC3() {
    if(gameOver === false)
    {
        for (let x = 5; x >= 0; x--) {
            if (board[x][2] === null) {
                board[x][2] = player;
                fill(x, 2, player);
                switchPlayer();
                check();
                break;
            }
        }
        switchPlayer();
        check();
    }
}
function clickC4() {
    if(gameOver === false)
    {
        for (let x = 5; x >= 0; x--) {
            if (board[x][3] === null) {
                board[x][3] = player;
                fill(x, 3, player);
                switchPlayer();
                check();
                break;
            }
        }
        switchPlayer();
        check();
    }
}
function clickC5() {
    if(gameOver === false)
    {
        for (let x = 5; x >= 0; x--) {
            if (board[x][4] === null) {
                board[x][4] = player;
                fill(x, 4, player);
                switchPlayer();
                check();
                break;
            }
        }
        switchPlayer();
        check();
    }
}
function clickC6() {
    if(gameOver === false)
    {
        for (let x = 5; x >= 0; x--) {
            if (board[x][5] === null) {
                board[x][5] = player;
                fill(x, 5, player);
                switchPlayer();
                check();
                break;
            }
        }
        switchPlayer();
        check();
    }
}
function clickC7() {
    if(gameOver === false)
    {
        for (let x = 5; x >= 0; x--) {
            if (board[x][6] === null) {
                board[x][6] = player;
                fill(x, 6, player);
                switchPlayer();
                check();
                break;
            }
        }
        switchPlayer();
        check();
    }
}
function checkHorizontal()
{
    for(let row = 0; row < 6; row++)
    {
        for(let col = 0; col < 4; col++)
        {
            if(board[row][col] !== null)
            {
                let nextOne = col+1;
                let nextOnePlus = col+2;
                let nextOnePlusPlus = col+3;
                let color = document.getElementById(row + "," + col).style.backgroundColor;
                let cell1 = document.getElementById(row + "," + nextOne).style.backgroundColor;
                let cell2 = document.getElementById(row + "," + nextOnePlus).style.backgroundColor;
                let cell3 = document.getElementById(row + "," + nextOnePlusPlus).style.backgroundColor;
                if(color === cell1 && color === cell2 && color === cell3)
                {
                    if(color === "yellow")
                    {
                        win("Player 1");
                        return;
                    }
                    else if (color === "red")
                    {
                        win("Player 2");
                        return;
                    }
                }//if board[start][next] is equal to the next one which is equal to the next which is equal to the next
            }
        }
    }
}
function checkVertical() {
    for(let col = 0; col < 7; col++) { //iterate over columns
        for(let row = 0; row < 3; row++) {  //limit rows
            if(board[row][col] !== null) {
                let color = document.getElementById(row + "," + col).style.backgroundColor;
                let cell1 = document.getElementById(row + 1 + "," + col).style.backgroundColor;
                let cell2 = document.getElementById(row + 2 + "," + col).style.backgroundColor;
                let cell3 = document.getElementById(row + 3 + "," + col).style.backgroundColor;
                if(color === cell1 && color === cell2 && color === cell3) {
                    if(color === "yellow") {
                        win("Player 1");
                        return;
                    } else if (color === "red") {
                        win("Player 2");
                        return;
                    }
                }
            }
        }
    }
}
function checkDiagonal() {
    // Check diagonals from top-left to bottom-right
    for(let row = 0; row < 3; row++) {
        for(let col = 0; col < 4; col++) {
            if(board[row][col] !== null) {
                let color = document.getElementById(row + "," + col).style.backgroundColor;
                let cell1 = document.getElementById(row + 1 + "," + (col + 1)).style.backgroundColor;
                let cell2 = document.getElementById(row + 2 + "," + (col + 2)).style.backgroundColor;
                let cell3 = document.getElementById(row + 3 + "," + (col + 3)).style.backgroundColor;
                if(color === cell1 && color === cell2 && color === cell3) {
                    if(color === "yellow") {
                        win("Player 1");
                        return;
                    } else if (color === "red") {
                        win("Player 2");
                        return;
                    }
                }
            }
        }
    }

    // Check diagonals from top-right to bottom-left
    for(let row = 0; row < 3; row++) {
        for(let col = 3; col < 7; col++) {
            if(board[row][col] !== null) {
                let color = document.getElementById(row + "," + col).style.backgroundColor;
                let cell1 = document.getElementById(row + 1 + "," + (col - 1)).style.backgroundColor;
                let cell2 = document.getElementById(row + 2 + "," + (col - 2)).style.backgroundColor;
                let cell3 = document.getElementById(row + 3 + "," + (col - 3)).style.backgroundColor;
                if(color === cell1 && color === cell2 && color === cell3) {
                    if(color === "yellow") {
                        win("Player 1");
                        return;
                    } else if (color === "red") {
                        win("Player 2");
                        return;
                    }
                }
            }
        }
    }
}
function check()//performs all the checks
{
    checkVertical();
    checkHorizontal();
    checkDiagonal();
    checkTie();
}
function switchPlayer()
{
    if(player%2 === 0)
    {
        document.getElementById("player2").style.backgroundColor = "red";
        document.getElementById("player1").style.backgroundColor = "lightsteelblue";
    }
    else {
        document.getElementById("player1").style.backgroundColor = "yellow"
        document.getElementById("player2").style.backgroundColor = "lightsteelblue";
    }
}
function checkTie() {
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 7; col++) {
            if (board[row][col] === null) {
                return; // If any cell is empty, the game is not tied
            }
        }
    }
    win("Tie"); // If no empty cells are found, call win function with "Tie"
}
function win(winner)
{
    if(winner === "Player 1")
    {
        document.getElementById("player1").style.backgroundColor = "yellow";
        document.getElementById("player2").style.backgroundColor = "lightsteelblue";
        document.getElementById("winCondition").innerHTML = winner + " Wins!"
    }


    else if(winner === "Player 2")
    {
        document.getElementById("player2").style.backgroundColor = "red";
        document.getElementById("player1").style.backgroundColor = "lightsteelblue";
        document.getElementById("winCondition").innerHTML = winner + " Wins!"
    }
    else if (winner === "Tie")
    {
        document.getElementById("player2").style.backgroundColor = "red";
        document.getElementById("player1").style.backgroundColor = "yellow";
        document.getElementById("winCondition").innerHTML = "Tie!"
    }
    gameOver = true;
}