import { readFileSync } from 'fs';

function part1(): number {
    let contents: string = readFileSync('data/day1.txt', 'utf8');
    let splitContents: string[] = contents.split('\n');
    let nums: Set<number> = new Set();

    for (let numToAdd of splitContents) {
        for (let num of Array.from(nums)) {
            if (num + Number(numToAdd) == 2020) {
                return num * Number(numToAdd);
            }
        }

        nums.add(Number(numToAdd));
    }

    return -1;
}

function part2() {
    let contents: string = readFileSync('data/day1.txt', 'utf8');
    let splitContents: string[] = contents.split('\n');
    let nums: Set<number> = new Set();
    let found = false;

    for (let numToAdd of splitContents) {
        for (let num1 of Array.from(nums)) {
            for (let num2 of Array.from(nums)) {
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