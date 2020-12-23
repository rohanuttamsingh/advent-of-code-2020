"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
function part1() {
    var contents = fs_1.readFileSync('data/day2.txt', 'utf8');
    var passwords = contents.split('\n');
    var numValidPasswords = 0;
    for (var _i = 0, passwords_1 = passwords; _i < passwords_1.length; _i++) {
        var line = passwords_1[_i];
        var minNum = Number(line.substring(0, line.indexOf('-')));
        var maxNum = Number(line.substring(line.indexOf('-') + 1, line.indexOf(' ')));
        var letter = line.charAt(line.indexOf(' ') + 1);
        var password = line.substring(line.indexOf(':') + 2);
        var numAppearances = 0;
        for (var i = 0; i < password.length; i++) {
            if (password.charAt(i) == letter) {
                numAppearances++;
            }
        }
        if (line != "" && numAppearances >= minNum && numAppearances <= maxNum) {
            numValidPasswords++;
        }
    }
    return numValidPasswords;
}
function part2() {
    var contents = fs_1.readFileSync('data/day2.txt', 'utf8');
    var passwords = contents.split('\n');
    var numValidPasswords = 0;
    for (var _i = 0, passwords_2 = passwords; _i < passwords_2.length; _i++) {
        var line = passwords_2[_i];
        var index1 = Number(line.substring(0, line.indexOf('-')));
        var index2 = Number(line.substring(line.indexOf('-') + 1, line.indexOf(' ')));
        var letter = line.charAt(line.indexOf(' ') + 1);
        var password = line.substring(line.indexOf(':') + 2);
        if (password.charAt(index1 - 1) == letter && password.charAt(index2 - 1) != letter ||
            password.charAt(index1 - 1) != letter && password.charAt(index2 - 1) == letter) {
            numValidPasswords++;
        }
    }
    return numValidPasswords;
}
console.log('Part 1:', part1());
console.log('Part 2:', part2());
