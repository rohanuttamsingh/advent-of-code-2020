import { readFileSync } from 'fs';

function part1(): number {
    let contents: string = readFileSync('data/day2.txt', 'utf8');
    let passwords: string[] = contents.split('\n');
    let numValidPasswords = 0;

    for (let line of passwords) {
        let minNum = Number(line.substring(0, line.indexOf('-')));
        let maxNum = Number(line.substring(line.indexOf('-') + 1, line.indexOf(' ')));
        let letter = line.charAt(line.indexOf(' ') + 1);
        let password = line.substring(line.indexOf(':') + 2);

        let numAppearances = 0;

        for (let i = 0; i < password.length; i++) {
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

function part2(): number {
    let contents: string = readFileSync('data/day2.txt', 'utf8');
    let passwords: string[] = contents.split('\n');
    let numValidPasswords = 0;

    for (let line of passwords) {
        let index1 = Number(line.substring(0, line.indexOf('-')));
        let index2 = Number(line.substring(line.indexOf('-') + 1, line.indexOf(' ')));
        let letter = line.charAt(line.indexOf(' ') + 1);
        let password = line.substring(line.indexOf(':') + 2);

        if (password.charAt(index1 - 1) == letter && password.charAt(index2 - 1) != letter ||
            password.charAt(index1 - 1) != letter && password.charAt(index2 - 1) == letter) {
            numValidPasswords++
        }
    }

    return numValidPasswords;
}

console.log('Part 1:', part1());
console.log('Part 2:', part2());