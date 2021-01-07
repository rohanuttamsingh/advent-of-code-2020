import { readFileSync } from 'fs';

let contents = readFileSync('data/day5.txt', 'utf-8').trimEnd();
let seats = contents.split('\n');

function getSeatId(row: number, col: number): number {
    return row * 8 + col;
}

function binSearch(input: string, lower: number, upper: number, lowerKey: string): number {
    if (input === '') {
        return lower;
    }

    if (input.charAt(0) === lowerKey) {
        return binSearch(input.substring(1), lower, Math.floor((upper + lower) / 2), lowerKey);
    }
    return binSearch(input.substring(1), Math.floor((upper + lower) / 2) + 1, upper, lowerKey);
}

function getRow(seat: string): number {
    return binSearch(seat.substring(0, 7), 0, 127, 'F');
}

function getCol(seat: string): number {
    return binSearch(seat.substring(7), 0, 7, 'L');
}

function getAllSeatIds(): number[] {
    let seatIds: number[] = [];
    for (let seat of seats) {
        seatIds.push(getSeatId(getRow(seat), getCol(seat)));
    }
    return seatIds;
}

function part1() {
    return Math.max(...getAllSeatIds());
}

function part2(): number {
    let allSeatIds = getAllSeatIds().sort((a, b) => a - b);

    let prevSeatId = allSeatIds[0];
    for (let i = 1; i < allSeatIds.length; i++) {
        if (allSeatIds[i] !== prevSeatId + 1) {
            return allSeatIds[i] - 1;
        }
        prevSeatId = allSeatIds[i];
    }

    return -1;
}

console.log(part1());
console.log(part2());