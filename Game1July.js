var currentPlayer = "Player1";

function init() {
  console.log("Tic Tac Toe Ready.");

  var boardCount = 0;

  var board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

  var buttons = document.querySelectorAll(".buttons");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', executeMove);
  }

  //Clear Button
  var resetbutton = document.getElementById("btn");
  resetbutton.addEventListener('click', function() {
    location.reload();
  });

  function printBoard() {
    console.log("======Printing Board======");
    console.log(board[0]);
    console.log(board[1]);
    console.log(board[2]);
    console.log("======Printing Board======");
  }

  function setMove(move, buttonsId) {
    if (buttonsId === 'b1') {
      board[0][0] = move;
    } else if (buttonsId === 'b2') {
      board[0][1] = move;
    } else if (buttonsId === 'b3') {
      board[0][2] = move;
    } else if (buttonsId === 'b4') {
      board[1][0] = move;
    } else if (buttonsId === 'b5') {
      board[1][1] = move;
    } else if (buttonsId === 'b6') {
      board[1][2] = move;
    } else if (buttonsId === 'b7') {
      board[2][0] = move;
    } else if (buttonsId === 'b8') {
      board[2][1] = move;
    } else {
      board[2][2] = move;

    }

    boardCount++;
  }

  function executeMove(event) {
    var isUnclickedButton = event.target.id;
    var buttonStatus = true;

    if (isUnclickedButton === 'b1') {
      buttonStatus = (board[0][0] === null);
    } else if (isUnclickedButton === 'b2') {
      buttonStatus = (board[0][1] === null);
    } else if (isUnclickedButton === 'b3') {
      buttonStatus = (board[0][2]=== null);
    } else if (isUnclickedButton === 'b4') {
      buttonStatus = (board[1][0]=== null);
    } else if (isUnclickedButton === 'b5') {
      buttonStatus = (board[1][1]=== null);
    } else if (isUnclickedButton === 'b6') {
      buttonStatus = (board[1][2]=== null);
    } else if (isUnclickedButton === 'b7') {
      buttonStatus = (board[2][0]=== null);
    } else if (isUnclickedButton === 'b8') {
      buttonStatus = (board[2][1]=== null);
    } else {
      buttonStatus = (board[2][2]=== null);
    }

    //if button clicked is equals to null (unclicked) continue the logic
    if(buttonStatus){
      console.log("clicked on " + event.target.id);
      var buttons = event.target;
      var move;

      if (currentPlayer === 'Player1') {
        move = "X";
        switchPlayerTo('Player2');
      }else{
        move = "O";
        switchPlayerTo('Player1');
      }
      event.target.innerHTML = move;

      setMove(move, event.target.id);
      var winner = checkForWinner();
      console.log("value of winner is : " + winner);
      if(winner === "X" || winner ==="O"){
        alert("Winner: " + winner);
      }

    } else{
      alert("Invalid Move");
    }


    //Print the board to check
    printBoard();
  }
  function switchPlayerTo(player) {

    currentPlayer = player;

    document.getElementById('hid').innerHTML = player + "'s turn";


  }

  function checkForWinner() {
    if ((board[0][0] === board[0][1]) && (board[0][1] === board[0][2]) && board[0][0] !== null) {
      return board[0][0];
    } else if ((board[1][0] === board[1][1]) && (board[1][1] === board[1][2]) && board[1][0] !== null) {
      return board[1][0];
    } else if ((board[2][0] === board[2][1]) && (board[2][1] === board[2][2]) && board[2][0] !== null) {
      return board[2][0];// not working
    } else if ((board[0][0] === board[1][1]) && (board[1][1] === board[2][2]) && board[0][0] !== null) {
      return board[0][0];
    } else if ((board[0][1] === board[1][1]) && (board[1][1] === board[2][1])&& board[0][1] !== null) {
      return board[0][1];
    } else if ((board[0][2] === board[1][2]) && (board[1][2] === board[2][2]) && board[0][2] !== null) {
      return board[0][2];
    } else if ((board[0][0] === board[1][0]) && (board[1][0] === board[2][0]) && board[0][0] !== null){
      return board[0][0];
    } else if ((board[0][2] === board[1][1]) && (board[1][1] === board[2][0]) && board[0][2] !== null){
      return board[0][2];
    }
    else{
      console.log("no condition matched");
    }

}
}
window.addEventListener("load", init, false);
