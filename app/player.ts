/// <reference path="spaces.ts" />
/// <reference path="board.ts" />
/// <reference path="ships.ts" />

module Battleship {
  export class Player {
    constructor(public name: string){}
    ships: Ship[] = [];
    board: Board = new Board();
    generateShips() {
      for (var i=0; i < Battleship.ships.length; i++) {
        this.ships.push(Battleship.ships[i])
      }
    }
  }
}
