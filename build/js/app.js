var Battleship;
(function (Battleship) {
    var Space = (function () {
        function Space(column, row) {
            this.column = column;
            this.row = row;
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
