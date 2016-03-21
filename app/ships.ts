/// <reference path="spaces.ts" />

module Battleship {
  export interface IShip {
    length: number;
    bowPoint?: Space;
    waterline?: Space[];
    isSunk: boolean;
  }

  export class Ship implements IShip {
    isSunk: boolean = false;
    constructor(public length: number){}
  }

  var destroyer = new Ship(2);
  var submarine = new Ship(3);
  var cruiser = new Ship(3);
  var battleship = new Ship(4);
  var carrier = new Ship(5);

  export var ships = [
    destroyer,
    submarine,
    cruiser,
    battleship,
    carrier
  ];

}
