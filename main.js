function startGame() {
  document.turn = "x";

}
function nextMove(square) {
  square.innerText = document.turn;
  switchTurn();
}
function switchTurn() {
  if(document.turn == "x") {
    document.turn = "o";
  } else {
    document.turn = "x";
  }
}