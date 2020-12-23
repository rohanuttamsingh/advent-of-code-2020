"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
function part1() {
    var contents = fs_1.readFileSync('data/day1.txt', 'utf8');
    var splitContents = contents.split('\n');
    var nums = new Set();
    for (var _i = 0, splitContents_1 = splitContents; _i < splitContents_1.length; _i++) {
        var numToAdd = splitContents_1[_i];
        for (var _a = 0, _b = Array.from(nums); _a < _b.length; _a++) {
            var num = _b[_a];
            if (num + Number(numToAdd) == 2020) {
                return num * Number(numToAdd);
            }
        }
        nums.add(Number(numToAdd));
    }
    return -1;
}
function part2() {
    var contents = fs_1.readFileSync('data/day1.txt', 'utf8');
    var splitContents = contents.split('\n');
    var nums = new Set();
    var found = false;
    for (var _i = 0, splitContents_2 = splitContents; _i < splitContents_2.length; _i++) {
        var numToAdd = splitContents_2[_i];
        for (var _a = 0, _b = Array.from(nums); _a < _b.length; _a++) {
            var num1 = _b[_a];
            for (var _c = 0, _d = Array.from(nums); _c < _d.length; _c++) {
                var num2 = _d[_c];
                if (num1 != num2 && num1 + num2 + Number(numToAdd) == 2020) {
                    return num1 * num2 * Number(numToAdd);
                }
            }
        }
        nums.add(Number(numToAdd));
    }
    return -1;
}
console.log('Part 1:', part1());
console.log('Part 2:', part2());
