"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var contents = fs_1.readFileSync('data/day7.txt', 'utf-8').trimEnd();
var rules = contents.split('\n');
function getBagColor(rule) {
    return rule.substring(0, rule.indexOf(' bags'));
}
function canContainKey(keys, containers) {
    if (keys.length === 0) {
        return 0;
    }
    var key = String(keys.pop());
    var numContaining = 0;
    for (var _i = 0, rules_1 = rules; _i < rules_1.length; _i++) {
        var rule = rules_1[_i];
        if (rule.substring(rule.indexOf('contain')).includes(key) && !containers.has(getBagColor(rule))) {
            numContaining++;
            containers.add(getBagColor(rule));
            keys.push(getBagColor(rule));
        }
    }
    return numContaining + canContainKey(keys, containers);
}
function part1() {
    return canContainKey(['shiny gold'], new Set());
}
console.log(part1());
