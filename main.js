const boxes = document.querySelectorAll(".board-div");
const winnerBtn = document.querySelector("#winnerBtn")
const resetBtn = document.querySelector("#resetBtn")
const PlayerX = "X";
const PlayerO = "O";
var isGameActive = true;
var currentPlayer = PlayerX;
var player1Try = [];
var player2Try = [];
var winningCombo = [
    ["1","4","7"],
    ["2","5","8"],
    ["3","6","9"],
    ["1","2","3"],
    ["4","5","6"],
    ["7","8","9"],
    ["1","5","9"],
    ["3","5","7"]
    ];

boxes.forEach(box => {
    box.addEventListener("click",function(){
    if(isGameActive){
        if(currentPlayer == PlayerX){
            box.textContent = PlayerX;
            currentPlayer = PlayerO;
            player1Try.push(box.id);
            checkWinnerX();
        }else{
            box.textContent = PlayerO;
            currentPlayer = PlayerX;
            player2Try.push(box.id);
            checkWinnerO();
        }
    }    
    })
});


function checkWinnerX(){
    for(var i = 0; i < winningCombo.length; i++) {
        if ( player1Try.indexOf(winningCombo[i][0]) >= 0 ) {
            if ( player1Try.indexOf(winningCombo[i][1]) >= 0 ) {
                if ( player1Try.indexOf(winningCombo[i][2]) >= 0 ) {
                    winnerBtn.textContent = "Winner is Player 1";
                    isGameActive = false;
                }
           }
        }
    }
};

function checkWinnerO(){
    for(var i = 0; i < winningCombo.length; i++) {
        if ( player2Try.indexOf(winningCombo[i][0]) >= 0 ) {
            if ( player2Try.indexOf(winningCombo[i][1]) >= 0 ) {
                if ( player2Try.indexOf(winningCombo[i][2]) >= 0 ) {
                    winnerBtn.textContent = "Winner is Player 2";
                    isGameActive = false;
                }
           }
        }
    }
};

resetBtn.addEventListener("click",function(){
    boxes.forEach(box => {
        box.textContent = "";
        isGameActive = true;
        player1Try = [];
        player2Try = [];
        currentPlayer = PlayerX;
        winnerBtn.textContent = "Winner is ....."
    })
});

