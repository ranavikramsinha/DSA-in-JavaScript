//* https://leetcode.com/problems/design-spreadsheet/

//* tc : O(1) | sc : O(1)

var Spreadsheet = function(rows) {

    this.map = new Map();
    
};


Spreadsheet.prototype.setCell = function(cell, value) {

    this.map.set(cell, value);
    
};


Spreadsheet.prototype.resetCell = function(cell) {

    this.map.set(cell, 0);
    
};


Spreadsheet.prototype.getValue = function(formula) {

    let [a, b] = formula.slice(1).split('+');
    let aValue = Number.isInteger(+a) ? +a : (this.map.get(a) || 0);
    let bValue = Number.isInteger(+b) ? +b : (this.map.get(b) || 0);
    
    return aValue + bValue;
    
};