"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var contents = fs_1.readFileSync('data/day4.txt', 'utf-8');
var passports = contents.split('\n\n');
function part1() {
    var numValid = 0;
    for (var _i = 0, passports_1 = passports; _i < passports_1.length; _i++) {
        var passport = passports_1[_i];
        if (passport.includes('byr') && passport.includes('iyr') && passport.includes('eyr') &&
            passport.includes('hgt') && passport.includes('hcl') && passport.includes('ecl') &&
            passport.includes('pid')) {
            numValid++;
        }
    }
    return numValid;
}
function getFieldValue(passport) {
    var splitAtSpace = passport.split(" ");
    var splitFully = [];
    for (var _i = 0, splitAtSpace_1 = splitAtSpace; _i < splitAtSpace_1.length; _i++) {
        var elem = splitAtSpace_1[_i];
        var splitAtNewLine = elem.split('\n');
        for (var _a = 0, splitAtNewLine_1 = splitAtNewLine; _a < splitAtNewLine_1.length; _a++) {
            var single = splitAtNewLine_1[_a];
            splitFully.push(single);
        }
    }
    var dict = {};
    for (var _b = 0, splitFully_1 = splitFully; _b < splitFully_1.length; _b++) {
        var keyValPair = splitFully_1[_b];
        var indexOfColon = keyValPair.indexOf(':');
        var key = keyValPair.substring(0, indexOfColon);
        var val = keyValPair.substring(indexOfColon + 1);
        dict[key] = val;
    }
    return dict;
}
function checkYear(year, lower, upper) {
    return lower <= year && year <= upper;
}
function checkByr(year) {
    return checkYear(year, 1920, 2002);
}
function checkIyr(year) {
    return checkYear(year, 2010, 2020);
}
function checkEyr(year) {
    return checkYear(year, 2020, 2030);
}
function checkHgt(hgt) {
    if (hgt.includes('cm')) {
        var num = Number(hgt.substring(0, hgt.indexOf('cm')));
        return 150 <= num && num <= 193;
    }
    else if (hgt.includes('in')) {
        var num = Number(hgt.substring(0, hgt.indexOf('in')));
        return 59 <= num && num <= 76;
    }
    else {
        return false;
    }
}
function checkHcl(hcl) {
    if (hcl.charAt(0) !== '#') {
        return false;
    }
    var chars = new Set();
    for (var _i = 0, _a = Array.from(hcl.substring(1)); _i < _a.length; _i++) {
        var char = _a[_i];
        chars.add(char);
    }
    var allowedChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    for (var _b = 0, allowedChars_1 = allowedChars; _b < allowedChars_1.length; _b++) {
        var char = allowedChars_1[_b];
        chars["delete"](char);
    }
    return chars.size === 0;
}
var ecls = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
function checkEcl(ecl) {
    return ecls.includes(ecl);
}
function checkPid(pid) {
    if (pid.length !== 9) {
        return false;
    }
    var pidSet = new Set(pid);
    var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        pidSet["delete"](num);
    }
    return pidSet.size === 0;
}
function part2() {
    var numValid = 0;
    for (var _i = 0, passports_2 = passports; _i < passports_2.length; _i++) {
        var passport = passports_2[_i];
        if (passport.includes('byr') && passport.includes('iyr') && passport.includes('eyr') &&
            passport.includes('hgt') && passport.includes('hcl') && passport.includes('ecl') &&
            passport.includes('pid')) {
            var byr = Number(getFieldValue(passport)['byr']);
            var iyr = Number(getFieldValue(passport)['iyr']);
            var eyr = Number(getFieldValue(passport)['eyr']);
            var hgt = getFieldValue(passport)['hgt'];
            var hcl = getFieldValue(passport)['hcl'];
            var ecl = getFieldValue(passport)['ecl'];
            var pid = getFieldValue(passport)['pid'];
            if (checkByr(byr) && checkIyr(iyr) && checkEyr(eyr) && checkHgt(hgt) && checkHcl(hcl) &&
                checkEcl(ecl) && checkPid(pid)) {
                numValid++;
            }
        }
    }
    return numValid;
}
console.log(part1());
console.log(part2());
