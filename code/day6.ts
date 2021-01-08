import { readFileSync } from 'fs';

let contents = readFileSync('data/day6.txt', 'utf-8').trimEnd();
let forms = contents.split('\n\n');

function part1(): number {
    let numYes = 0;

    for (let form of forms) {
        let questions = form.split('\n');
        let yesAnswers = new Set<string>();

        for (let question of questions) {
            for (let answer of Array.from(question)) {
                yesAnswers.add(answer);
            }
        }

        numYes += yesAnswers.size;
    }

    return numYes;
}

function part2(): number {
    let numAllYes = 0;

    for (let form of forms) {
        let questions = form.split('\n');
        let yesAnswers: string[][] = [];

        for (let question of questions) {
            let currentYes: string[] = [];

            for (let answer of Array.from(question)) {
                currentYes.push(answer);
            }

            yesAnswers.push(currentYes);
        }

        let person1Answers = yesAnswers[0];

        for (let answer of person1Answers) {
            let inAll = true;

            for (let i = 1; i < yesAnswers.length; i++) {
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