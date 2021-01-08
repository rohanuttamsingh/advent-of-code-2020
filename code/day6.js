"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var contents = fs_1.readFileSync('data/day6.txt', 'utf-8').trimEnd();
var forms = contents.split('\n\n');
function part1() {
    var numYes = 0;
    for (var _i = 0, forms_1 = forms; _i < forms_1.length; _i++) {
        var form = forms_1[_i];
        var questions = form.split('\n');
        var yesAnswers = new Set();
        for (var _a = 0, questions_1 = questions; _a < questions_1.length; _a++) {
            var question = questions_1[_a];
            for (var _b = 0, _c = Array.from(question); _b < _c.length; _b++) {
                var answer = _c[_b];
                yesAnswers.add(answer);
            }
        }
        numYes += yesAnswers.size;
    }
    return numYes;
}
function part2() {
    var numAllYes = 0;
    for (var _i = 0, forms_2 = forms; _i < forms_2.length; _i++) {
        var form = forms_2[_i];
        var questions = form.split('\n');
        var yesAnswers = [];
        for (var _a = 0, questions_2 = questions; _a < questions_2.length; _a++) {
            var question = questions_2[_a];
            var currentYes = [];
            for (var _b = 0, _c = Array.from(question); _b < _c.length; _b++) {
                var answer = _c[_b];
                currentYes.push(answer);
            }
            yesAnswers.push(currentYes);
        }
        var person1Answers = yesAnswers[0];
        for (var _d = 0, person1Answers_1 = person1Answers; _d < person1Answers_1.length; _d++) {
            var answer = person1Answers_1[_d];
            var inAll = true;
            for (var i = 1; i < yesAnswers.length; i++) {
                if (!yesAnswers[i].includes(answer)) {
                    inAll = false;
                }
            }
            numAllYes += inAll ? 1 : 0;
        }
    }
    return numAllYes;
}
console.log(part1());
console.log(part2());
