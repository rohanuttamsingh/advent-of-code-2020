"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var contents = fs_1.readFileSync('data/day5.txt', 'utf-8').trimEnd();
var seats = contents.split('\n');
function getSeatId(row, col) {
    return row * 8 + col;
}
function binSearch(input, lower, upper, lowerKey) {
    if (input === '') {
        return lower;
    }
    if (input.charAt(0) === lowerKey) {
        return binSearch(input.substring(1), lower, Math.floor((upper + lower) / 2), lowerKey);
    }
    return binSearch(input.substring(1), Math.floor((upper + lower) / 2) + 1, upper, lowerKey);
}
function getRow(seat) {
    return binSearch(seat.substring(0, 7), 0, 127, 'F');
}
function getCol(seat) {
    return binSearch(seat.substring(7), 0, 7, 'L');
}
function getAllSeatIds() {
    var seatIds = [];
    for (var _i = 0, seats_1 = seats; _i < seats_1.length; _i++) {
        var seat = seats_1[_i];
        seatIds.push(getSeatId(getRow(seat), getCol(seat)));
    }
    return seatIds;
}
function part1() {
    return Math.max.apply(Math, getAllSeatIds());
}
function part2() {
    var allSeatIds = getAllSeatIds().sort(function (a, b) { return a - b; });
    var prevSeatId = allSeatIds[0];
    for (var i = 1; i < allSeatIds.length; i++) {
        if (allSeatIds[i] !== prevSeatId + 1) {
            return allSeatIds[i] - 1;
        }
        prevSeatId = allSeatIds[i];
    }
    return -1;
}
console.log(part1());
console.log(part2());
