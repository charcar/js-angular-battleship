$(function () {
    var p1name = prompt("Player 1, what is your name?");
    var p2name = prompt("Player 2, what is your name?");
    var player1 = new Battleship.Player(p1name);
    var player2 = new Battleship.Player(p2name);
    var game = new Battleship.Game(player1, player2);
});
