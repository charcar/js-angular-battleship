/// <reference path="spaces.ts" />
/// <reference path="board.ts" />
/// <reference path="ships.ts" />
/// <reference path="player.ts" />
/// <reference path="game.ts" />

$(function() {
  var p1name = prompt("Player 1, what is your name?");
  var p2name = prompt("Player 2, what is your name?");
  var player1 = new Battleship.Player(p1name);
  var player2 = new Battleship.Player(p2name);
  var game = new Battleship.Game(player1, player2);
  game.player1.generateShips();
  game.player2.generateShips();
  game.player1.board.newBoard();
  game.player2.board.newBoard();
  game.player1.board.spaces[1][2].isEmpty = false;
  game.player1.board.spaces[1][3].isEmpty = false;
  game.player1.board.spaces[5][5].isEmpty = false;
  game.player1.board.spaces[4][5].isEmpty = false;
  game.player1.board.spaces[3][5].isEmpty = false;
  game.player1.board.spaces[0][7].isEmpty = false;
  game.player1.board.spaces[0][6].isEmpty = false;
  game.player1.board.spaces[0][5].isEmpty = false;
  for(var i = 0; i < game.player1.board.row.length; i++) {
    $("#p1board").append('<div id="p1' + game.player1.board.row[i] + '" class="row"></div>')
    for(var j = 0; j < game.player1.board.column.length; j++) {
      $("#p1" + game.player1.board.row[i]).append('<div id="' + game.player1.board.row[i] + game.player1.board.column[j] + '" class="space"></div>');
    }
  }
  for(var i = 0; i < game.player2.board.row.length; i++) {
    $("#p2board").append('<div id="p2' + game.player2.board.row[i] + '" class="row"></div>')
    for(var j = 0; j < game.player2.board.column.length; j++) {
      $("#p2" + game.player2.board.row[i]).append('<div id="' + game.player2.board.row[i] + game.player2.board.column[j] + '" class="space"></div>');
    }
  }
  $("#p1board").show();
  $(".space").click(function() {
    var id = $(this).attr('id');
    var row = id.substring(0, 1);
    var column = id.substring(1, 2);
    var rowIndex = game.player1.board.row.indexOf(row);
    if(!(game.player1.board.spaces[rowIndex][column-1].marked)) {
      if(game.player1.board.spaces[rowIndex][column-1].isEmpty) {
        game.player1.board.spaces[rowIndex][column-1].mark();
        $(this).text("X");
      } else {
        game.player1.board.spaces[rowIndex][column-1].mark();
        $(this).text("O");
      }
    }
  });
});
