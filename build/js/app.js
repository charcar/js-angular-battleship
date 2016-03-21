var Battleship;
(function (Battleship) {
    var Space = (function () {
        function Space(row, column) {
            this.row = row;
            this.column = column;
            this.isEmpty = true;
            this.marked = false;
        }
        Space.prototype.mark = function () {
            this.marked = true;
        };
        return Space;
    }());
    Battleship.Space = Space;
})(Battleship || (Battleship = {}));
/// <reference path="spaces.ts" />
var Battleship;
(function (Battleship) {
    var Ship = (function () {
        function Ship(length) {
            this.length = length;
            this.isSunk = false;
        }
        return Ship;
    }());
    Battleship.Ship = Ship;
    var destroyer = new Ship(2);
    var submarine = new Ship(3);
    var cruiser = new Ship(3);
    var battleship = new Ship(4);
    var carrier = new Ship(5);
    Battleship.ships = [
        destroyer,
        submarine,
        cruiser,
        battleship,
        carrier
    ];
})(Battleship || (Battleship = {}));
/// <reference path="spaces.ts" />
var Battleship;
(function (Battleship) {
    var Board = (function () {
        function Board() {
            this.row = ["A", "B", "C", "D", "E", "F", "G"];
            this.column = [1, 2, 3, 4, 5, 6, 7, 8];
            this.spaces = [[], [], [], [], [], [], [], []];
        }
        Board.prototype.newBoard = function () {
            for (var i = 0; i < this.row.length; i++) {
                for (var j = 0; j < this.column.length; j++) {
                    this.spaces[i][j] = new Battleship.Space(this.row[i], this.column[j]);
                }
            }
        };
        return Board;
    }());
    Battleship.Board = Board;
})(Battleship || (Battleship = {}));
/// <reference path="spaces.ts" />
/// <reference path="board.ts" />
/// <reference path="ships.ts" />
var Battleship;
(function (Battleship) {
    var Player = (function () {
        function Player(name) {
            this.name = name;
            this.board = new Battleship.Board();
        }
        Player.prototype.generateShips = function () {
            for (var i = 0; i < Battleship.ships.length; i++) {
                this.ships.push(Battleship.ships[i]);
            }
        };
        return Player;
    }());
    Battleship.Player = Player;
})(Battleship || (Battleship = {}));
/// <reference path="spaces.ts" />
/// <reference path="board.ts" />
/// <reference path="ships.ts" />
/// <reference path="player.ts" />
var Battleship;
(function (Battleship) {
    var Game = (function () {
        function Game(player1, player2) {
            this.player1 = player1;
            this.player2 = player2;
            this.currentPlayer = this.player1;
        }
        Game.prototype.switchTurns = function () {
            if (this.currentPlayer === this.player1) {
                this.currentPlayer = this.player2;
            }
            else {
                this.currentPlayer = this.player1;
            }
        };
        return Game;
    }());
    Battleship.Game = Game;
})(Battleship || (Battleship = {}));
/// <reference path="spaces.ts" />
/// <reference path="board.ts" />
/// <reference path="ships.ts" />
/// <reference path="player.ts" />
/// <reference path="game.ts" />
$(function () {
    var p1name = prompt("Player 1, what is your name?");
    var p2name = prompt("Player 2, what is your name?");
    var player1 = new Battleship.Player(p1name);
    var player2 = new Battleship.Player(p2name);
    var game = new Battleship.Game(player1, player2);
});
