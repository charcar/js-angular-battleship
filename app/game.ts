/// <reference path="spaces.ts" />
/// <reference path="board.ts" />
/// <reference path="ships.ts" />
/// <reference path="player.ts" />

module Battleship {
  export class Game {
    constructor(public player1: Player, public player2: Player){}
    currentPlayer: Player = this.player1;
    switchTurns() {
      if(this.currentPlayer === this.player1) {
        this.currentPlayer = this.player2;
      } else {
        this.currentPlayer = this.player1;
      }
    }
  }
}
