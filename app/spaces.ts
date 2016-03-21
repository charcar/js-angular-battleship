module Battleship {
  export interface ISpace {
    column: number;
    row: string;
    marked: boolean;
    isEmpty: boolean;
    mark(): void;
  }

  export class Space implements ISpace {
    isEmpty: boolean = true;
    marked: boolean = false;
    constructor(public row: string, public column: number){}
    mark() {
      this.marked = true;
    }
  }


}
