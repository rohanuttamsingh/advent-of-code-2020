import { readFileSync } from 'fs';

let trees: string[][] = [];

let contents = readFileSync('data/day3.txt', 'utf-8');
let rows = contents.split('\n');

for (let row = 0; row < rows.length - 1; row++) {
    trees.push([])
    for (let col = 0; col < rows[0].length; col++) {
        trees[row][col] = rows[row].charAt(col);
    }
}

function part1(horizontal: number, vertical: number): number {
    let numTrees = 0;
    let col = 0;

    for (let row = 0; row < trees.length; row += vertical) {
        if (row != 0) {
            col += horizontal;
        }
        col %= trees[0].length;

        if (trees[row][col] == '#') {
            numTrees++;
        }
    }

    return numTrees;
}

function part2() {
    return part1(1, 1) * part1(3, 1) * part1(5, 1) * part1(7, 1) * part1(1, 2);
}

console.log(part1(3, 1));
console.log(part2());