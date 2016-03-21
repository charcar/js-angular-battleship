/// <reference path="spaces.ts" />

module Battleship {
  export class Board {
    row: string[] = ["A", "B", "C", "D", "E", "F", "G"];
    column: number[] = [1,2,3,4,5,6,7,8];
    spaces = [[],[],[],[],[],[],[],[]];
    constructor(){}
    newBoard() {
      for (var i=0; i < this.row.length; i++) {
        for (var j=0; j < this.column.length; j++) {
          this.spaces[i][j] = new Space(this.row[i], this.column[j])

        }
      }
    }
  }
}
